import { authAPI } from "@/api/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from 'next-auth'
export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                },
                password: { label: 'Password', type: 'password' },
            },

            async authorize(credentials, _req){
                try {
                    const res = await authAPI.login({ email: credentials?.email!, password: credentials?.password!})
                    const body = res.data.data.user

                    return {
                        ...body,
                        accessToken: res.data.data.accessToken,
                        refreshToken: res.data.data.refreshToken
                    }

                } catch (error) {
                    console.log(error)
                    return null
                }
            },
            
        })
    ],
    callbacks: {
		async jwt({ token, user }) {
			if (user) {
				Object.assign(token, user)
			}

			return token
		},
		async session({ session, token }) {
           
			if (token) {
				session.user = token
			}
			return session
		},
	},
}