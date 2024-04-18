import { createServerClient } from '@supabase/ssr';

export async function handle({ event, resolve }) {
  const supabaseUrl = 'https://gclnmsblqhvahakeovtx.supabase.co';
  const supabaseServiceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjbG5tc2JscWh2YWhha2VvdnR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxMDI0NDIsImV4cCI6MjAyNzY3ODQ0Mn0.pVNeBh5BQmxrxNbk6J8yVQc74Q-hpCMSeKZIopBsApg';
  // @ts-ignore
  event.locals.supabase = createServerClient(supabaseUrl, supabaseServiceRoleKey, {
    cookies: {
      get: (key) => event.cookies.get(key),
      set: (key, value, options) => {
        event.cookies.set(key, value, { ...options, path: '/',sameSite: 'none',
      secure: true });
      },
      remove: (key, options) => {
        event.cookies.delete(key, { ...options, path: '/',sameSite: 'none',
      secure: true });
      }
    },
    cookieOptions:{
      sameSite: 'none',
      secure: true,
      domain: 'https://www.codle.de'
    }
  });
  // @ts-ignore
  event.locals.safeGetSession = async () => {
    const {
      data: { user },
      error,
    } = await event.locals.supabase.auth.getUser()
    if (error) {
      return { session: null, user: null }
    }

    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()
    return { session, user }
  }
  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range'
    }
  })
}