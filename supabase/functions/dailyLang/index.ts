// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { createClient } from 'npm:@supabase/supabase-js'
const supabase = createClient("https://gclnmsblqhvahakeovtx.supabase.co/", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjbG5tc2JscWh2YWhha2VvdnR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxMDI0NDIsImV4cCI6MjAyNzY3ODQ0Mn0.pVNeBh5BQmxrxNbk6J8yVQc74Q-hpCMSeKZIopBsApg")

Deno.serve(async (req) => {
  const pls = await supabase.from('programmingLanguages').select('*')

  let randomint = Math.floor(Math.random() * (pls.data?.length ?? 0));
  let id = pls.data?.[randomint]?.id
  const yesterdayId = await supabase.from('dailyLang').select('langId').eq('date', new Date().toISOString())
  while(id === yesterdayId.data?.[0]?.langId) {
    randomint = Math.floor(Math.random() * (pls.data?.length ?? 0));
    id = pls.data?.[randomint]?.id
  }

  await supabase.from('dailyLang').upsert({ langId: id })
  return new Response(
    JSON.stringify(id),
    { headers: { "Content-Type": "application/json" } },
  )
})

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/dailyLang' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
