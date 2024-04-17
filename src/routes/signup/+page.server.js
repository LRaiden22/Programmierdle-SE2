export const actions = {
    signup: async ({request, cookies, locals}) => {
        const data = await request.formData()
        const email = data.get('email')
        const password = data.get('password')
        
        const {user, session, error} = await locals.supabase.auth.signUp({
            email,
            password
        })
        console.log(error)
        if (error) {
            return {
                status: 401,
                body: error.message
            }
        }
    }
}