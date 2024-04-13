// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { createClient } from 'npm:@supabase/supabase-js'
const supabase = createClient(Deno.env.get('SUPABASE_URL')??'', Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '')

Deno.serve(async (req) => {
  const {url} = req
  const taskPattern = new URLPattern({ pathname: "/checkLang/:id" })
  const matchingPath = taskPattern.exec(url)
  const id = matchingPath ? matchingPath.pathname.groups.id : null
  const selectedLang = await supabase.from('programmingLanguages').select('*').eq('id', id)
  const correctLangId = await supabase.from('dailyLang').select('langId').eq('date', new Date().toDateString())
  const correctLang = await supabase.from('programmingLanguages').select('*').eq('id', correctLangId.data?.[0]?.langId)
  const data = {
    correct: selectedLang.data?.[0]?.id === correctLang.data?.[0]?.id,
    paradigm: compare(selectedLang.data?.[0]?.paradigm, correctLang.data?.[0]?.paradigm),
    platform: compare(selectedLang.data?.[0]?.platform, correctLang.data?.[0]?.platform),
    typesystem: compare(selectedLang.data?.[0]?.typesystem, correctLang.data?.[0]?.typesystem),
    purpose: compare(selectedLang.data?.[0]?.purpose, correctLang.data?.[0]?.purpose),
    easyness: compare(selectedLang.data?.[0]?.easyness, correctLang.data?.[0]?.easyness),
    community: compare(selectedLang.data?.[0]?.community, correctLang.data?.[0]?.community),
    releaseyear:compareYears(selectedLang.data?.[0]?.releaseyear, correctLang.data?.[0]?.releaseyear)
  }
  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
})
function compare(correctLangAttribute: string, guessLangAttribute: string){
  if(!correctLangAttribute || !guessLangAttribute){
    return 0
  }
  if(correctLangAttribute === guessLangAttribute){
    return 2
  }
  if(isSubSet(correctLangAttribute, guessLangAttribute)){
    return 1
  }
  return 0
}
function isSubSet(str1: string, str2: string){
  const words = str1.split(", ").map((word: string) => word.trim())
  for(const word of words){
    if(str2.includes(word)){
      return true
    }
  }
  return false
}
function compareYears(releaseYear: number, correctReleaseYear: number){
  const difference = releaseYear - correctReleaseYear
  if(difference === 0){
    return 1
  }
  if(difference<0){
   return 2
  }
  if(difference>0){
    return 0
  }
}
/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/checkLang' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
