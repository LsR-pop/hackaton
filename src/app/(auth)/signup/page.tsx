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
import { Metadata } from 'next'
import { actionSignUp } from './actions'

export const metadata: Metadata = {
	title: "Création d'un compte - DJ Du Climat",
}

export default function Signup() {
	return (
		<form action={actionSignUp} className="mx-0 my-auto">
			<Card>
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl">Créer un compte</CardTitle>
					<CardDescription>
						Entrer votre email pour créer un compte
					</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4">
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
						<Label htmlFor="username">Nom d'utilisateur</Label>
						<Input id="username" type="text" name="username" placeholder="m" />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="password">Mot de passe</Label>
						<Input id="password" name="password" type="password" />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="confirmPassword">
							Confirmer votre mot de passe
						</Label>
						<Input
							id="confirmPassword"
							name="confirmPassword"
							type="password"
						/>
					</div>
				</CardContent>
				<CardFooter>
					<Button className="w-full">Créer le compte</Button>
				</CardFooter>
			</Card>
		</form>
	)
}
