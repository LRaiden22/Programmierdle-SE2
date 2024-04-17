export async function load({locals}){
    const {data} = locals.supabase.from("programmingLanguages").select("*")
    return{
        programmingLanguages:data ?? []
    }
}

