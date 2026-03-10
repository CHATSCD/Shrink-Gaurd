const SUPABASE_URL = 'https://vyfitlqyligxvzlojqvm.supabase.co'; // your Supabase URL const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export default async function handler(req, res) { if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }

const { email, password, email_confirm } = req.body || {}; if (!email || !password) { res.status(400).json({ error: 'email and password required' }); return; }

try { const r = await fetch(${SUPABASE_URL}/auth/v1/admin/users, { method: 'POST', headers: { 'Content-Type': 'application/json', apikey: SERVICE_KEY, Authorization: Bearer ${SERVICE_KEY}, }, body: JSON.stringify({ email, password, email_confirm: !!email_confirm, }), });

const data = await r.json(); if (!r.ok) { return res.status(r.status).json({ error: data }); }

SQL QUERY



return res.status(201).json({ user: data });

} catch (err) { console.error('create-user error', err); return res.status(500).json({ error: 'Internal error' }); } }
