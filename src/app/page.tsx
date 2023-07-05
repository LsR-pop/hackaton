import { LogoutButton } from '@/components'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

export default async function Home() {
	const session = await getServerSession(authOptions)

	if (session === null) redirect('/api/auth/signin')

	return (
		<main>
			<h1>Welcome {session?.user.username}</h1>
			<LogoutButton />
		</main>
	)
}
