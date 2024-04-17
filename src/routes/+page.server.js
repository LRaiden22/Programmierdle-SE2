
export async function load({locals}){
    const {data} = await locals.supabase.from("programmingLanguages").select("*")
    return{
        programmingLanguages:data ?? []
    }
}

