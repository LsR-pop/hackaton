import { type DefaultSession, type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

declare module 'next-auth' {
	interface Session extends DefaultSession {
		user: {
			id: string
			email: string
			username: string
		}
	}
}

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'john.doe@gmail.com',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				const res = await fetch('http://localhost:3000/api/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						email: credentials?.email,
						password: credentials?.password,
					}),
				})

				const user = await res.json()

				if (user) {
					return user
				} else {
					return null
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user }
		},

		async session({ session, token }) {
			session.user = token as any
			return session
		},
	},
}
