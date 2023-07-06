'use client'

import { signOut } from 'next-auth/react'
import { Button } from '../../../components/ui'

export function LogoutButton() {
	return <Button onClick={() => signOut()}>Déconnexion</Button>
}
