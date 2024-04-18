import { redirect, fail } from '@sveltejs/kit'
import Cookies from 'js-cookie'

export const actions = {
    login: async ({request, cookies, locals}) => {
        const formdata = await request.formData()
        const email = formdata.get('email')
        const password = formdata.get('password')
        
        const {data, error} = await locals.supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            Cookies.set('supabase-auth-token', data?.session.access_token);
            return fail(401, {
                error: error.message
        })
        }else{
            redirect(303, '/')
        }
    }
}