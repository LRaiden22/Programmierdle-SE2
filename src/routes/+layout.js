import { createBrowserClient, isBrowser, parse } from '@supabase/ssr';

const supabaseUrl = 'https://gclnmsblqhvahakeovtx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjbG5tc2JscWh2YWhha2VvdnR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxMDI0NDIsImV4cCI6MjAyNzY3ODQ0Mn0.pVNeBh5BQmxrxNbk6J8yVQc74Q-hpCMSeKZIopBsApg';

export async function load({ fetch, data, depends }) {
    depends('supabase:auth')
    const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey,{
        global:{
            fetch,
        },
        cookies:{
            get:(key) =>{
                if(!isBrowser()){
                    return JSON.stringify(data.session)
                }
            const cookie = parse(document.cookie)
            return cookie[key]
            }
        }
    })
    const {
        data: {session},
    } = await supabase.auth.getSession()
  return { supabase, session}
}