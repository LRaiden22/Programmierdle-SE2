import { supabase } from "$lib/supabaseclient";

export async function load(){
    const{data}= await supabase.from("programmingLanguages").select("*")
    return{
        programmingLanguages:data ?? []
    }
}

