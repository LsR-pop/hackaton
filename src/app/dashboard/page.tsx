import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { getUserSession } from '@/utils/functions'
import { Metadata } from 'next'
import { CharacterSwitcher, MainNav, UserNav } from './components'

export const metadata: Metadata = {
	title: 'Tableau de bord - DJ Du Climat',
}

export default async function Home() {
	const user = await getUserSession()

	return (
		<>
			<div className="hidden flex-col md:flex">
				<div className="border-b">
					<div className="flex h-16 items-center px-4">
						<CharacterSwitcher />
						<MainNav className="mx-6" />
						<div className="ml-auto flex items-center space-x-4">
							<UserNav />
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-2 p-5">
					<h1 className="text-2xl">
						Bienvenue <span className="font-bold">{user.username}</span>
					</h1>
					<div className="grid grid-cols-4 items-center gap-4">
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">Age</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">25</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</>
	)
}
