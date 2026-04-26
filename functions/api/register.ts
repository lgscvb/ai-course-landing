/// <reference types="@cloudflare/workers-types" />

interface Env {
  DB: D1Database;
}

interface Payload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  version?: string;
  problem?: string;
  source?: string;
  user_agent?: string;
  company_website?: string; // honeypot
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^09\d{8}$|^\+?886\s?9\d{8}$/;
const VALID_VERSIONS = new Set(['12hr', '24hr']);

const json = (body: unknown, status = 200): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let payload: Payload;
  try {
    payload = await request.json<Payload>();
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  // Honeypot — bots fill hidden fields；silently succeed
  if (payload.company_website && payload.company_website.trim() !== '') {
    return json({ ok: true, bot: true });
  }

  // Validate
  const errors: string[] = [];
  const name = (payload.name ?? '').trim();
  const email = (payload.email ?? '').trim().toLowerCase();
  const phone = (payload.phone ?? '').replace(/[\s-]/g, '');
  const company = (payload.company ?? '').trim();
  const version = (payload.version ?? '').trim();
  const problem = (payload.problem ?? '').trim();
  const source = (payload.source ?? '').trim();
  const userAgent =
    (payload.user_agent ?? '').slice(0, 500) ||
    request.headers.get('user-agent')?.slice(0, 500) ||
    '';

  if (!name) errors.push('name_required');
  if (!EMAIL_RE.test(email)) errors.push('email_invalid');
  if (!PHONE_RE.test(phone)) errors.push('phone_invalid');
  if (!VALID_VERSIONS.has(version)) errors.push('version_invalid');
  if (problem.length < 10) errors.push('problem_too_short');

  if (errors.length) return json({ ok: false, errors }, 400);

  // Capture IP for spam mitigation
  const ip =
    request.headers.get('cf-connecting-ip') ??
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    '';

  try {
    const result = await env.DB.prepare(
      `INSERT INTO enrollments
         (name, email, phone, company, version, problem, source, user_agent, ip_address)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(
        name,
        email,
        phone,
        company || null,
        version,
        problem,
        source || null,
        userAgent,
        ip || null
      )
      .run();

    return json({ ok: true, id: result.meta.last_row_id });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);

    // Unique constraint: email + version 已存在
    if (/UNIQUE constraint failed/i.test(msg)) {
      return json({ ok: false, error: 'duplicate_enrollment' }, 409);
    }

    console.error('register insert failed', msg);
    return json({ ok: false, error: 'db_error' }, 500);
  }
};

export const onRequestGet: PagesFunction<Env> = () =>
  json({
    ok: true,
    service: 'ai-course-landing enrollment endpoint',
    hint: 'POST JSON to enroll',
  });
