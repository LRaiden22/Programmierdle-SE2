import { supabase } from "$lib/supabaseclient.server";

export async function load(){
    const{data}= await supabase.from("programmingLanguages").select("*")
    return{
        programmingLanguages:data ?? []
    }
}

