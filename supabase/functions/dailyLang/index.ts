// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { createClient } from 'npm:@supabase/supabase-js'
const supabase = createClient(Deno.env.get('SUPABASE_URL')??'', Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '')
Deno.serve(async (req) => {
  const pls = await supabase.from('programmingLanguages').select('*')

  let randomint = Math.floor(Math.random() * (pls.data?.length ?? 0));
  let id = pls.data?.[randomint]?.id
  const yesterdayId = await supabase.from('dailyLang').select('langId').eq('date', new Date(new Date().getTime()- 24*60*60*1000).toISOString().slice(0, 10))
  while(id === yesterdayId.data?.[0]?.langId) {
    randomint = Math.floor(Math.random() * (pls.data?.length ?? 0));
    id = pls.data?.[randomint]?.id
  }

  const response = await supabase.from('dailyLang').upsert({ langId: id })
  console.log(response)
  console.log("hi")
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
