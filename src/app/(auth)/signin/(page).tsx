import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Input,
	Label,
} from '@/components/ui'
import {} from 'next-auth/react'

export default async function Signup() {
	const csrfToken = await getCsrfToken()
	return (
		<form
			action="/api/auth/callback/credentials"
			method="POST"
			className="mx-0 my-auto"
		>
			<Card>
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl">Connexion à un compte</CardTitle>
					<CardDescription>
						Entrer votre email pour vous connecter à votre compte
					</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4">
					<input name="csrfToken" type="hidden" defaultValue={csrfToken} />
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							name="email"
							placeholder="m@example.com"
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="password">Mot de passe</Label>
						<Input id="password" name="password" type="password" />
					</div>
				</CardContent>
				<CardFooter>
					<Button className="w-full">Connexion</Button>
				</CardFooter>
			</Card>
		</form>
	)
}
