/// <reference types="@cloudflare/workers-types" />

interface Env {
  DB: D1Database;
  ADMIN_USERNAME: string;
  ADMIN_PASSWORD: string;
}

interface EnrollmentRow {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  version: string;
  problem: string;
  source: string | null;
  user_agent: string | null;
  ip_address: string | null;
  status: string;
}

const REALM = 'AI Course Landing Admin';

function unauthorized(): Response {
  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
      'cache-control': 'no-store',
    },
  });
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

function checkAuth(request: Request, env: Env): boolean {
  const header = request.headers.get('authorization') ?? '';
  if (!header.startsWith('Basic ')) return false;
  if (!env.ADMIN_PASSWORD) return false;

  let decoded: string;
  try {
    decoded = atob(header.slice(6));
  } catch {
    return false;
  }

  const idx = decoded.indexOf(':');
  if (idx < 0) return false;
  const user = decoded.slice(0, idx);
  const pass = decoded.slice(idx + 1);

  const expectedUser = env.ADMIN_USERNAME || 'admin';
  return (
    constantTimeEqual(user, expectedUser) &&
    constantTimeEqual(pass, env.ADMIN_PASSWORD)
  );
}

function csvEscape(value: unknown): string {
  if (value === null || value === undefined) return '';
  const s = String(value);
  if (/[",\n\r]/.test(s)) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

function toCSV(rows: EnrollmentRow[]): string {
  const headers = [
    'id',
    'created_at',
    'name',
    'email',
    'phone',
    'company',
    'version',
    'problem',
    'source',
    'status',
    'ip_address',
    'user_agent',
  ];
  const lines = [headers.join(',')];
  for (const r of rows) {
    lines.push(
      [
        r.id,
        r.created_at,
        r.name,
        r.email,
        r.phone,
        r.company,
        r.version,
        r.problem,
        r.source,
        r.status,
        r.ip_address,
        r.user_agent,
      ]
        .map(csvEscape)
        .join(',')
    );
  }
  return lines.join('\n');
}

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  if (!checkAuth(request, env)) return unauthorized();

  const url = new URL(request.url);
  const format = url.searchParams.get('format') ?? 'json';
  const limit = Math.min(
    Math.max(parseInt(url.searchParams.get('limit') ?? '500', 10) || 500, 1),
    1000
  );

  const { results } = await env.DB.prepare(
    `SELECT id, created_at, name, email, phone, company, version,
            problem, source, user_agent, ip_address, status
       FROM enrollments
      ORDER BY created_at DESC
      LIMIT ?`
  )
    .bind(limit)
    .all<EnrollmentRow>();

  if (format === 'csv') {
    const csv = toCSV(results ?? []);
    // Excel 友善：加 UTF-8 BOM
    const body = '﻿' + csv;
    const filename = `enrollments-${new Date().toISOString().slice(0, 10)}.csv`;
    return new Response(body, {
      status: 200,
      headers: {
        'content-type': 'text/csv; charset=utf-8',
        'content-disposition': `attachment; filename="${filename}"`,
        'cache-control': 'no-store',
      },
    });
  }

  return new Response(
    JSON.stringify({ ok: true, count: results?.length ?? 0, rows: results }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'no-store',
      },
    }
  );
};
