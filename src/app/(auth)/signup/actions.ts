'use server'

import { prisma } from '@/lib/prisma'
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'

export async function actionSignUp(data: FormData) {
	const user = await prisma.user.findFirst({
		where: {
			email: data.get('email') as string,
		},
	})

	if (!user && data.get('password') === data.get('confirmPassword')) {
		await prisma.user.create({
			data: {
				email: data.get('email') as string,
				password: data.get('password') as string,
				username: await bcrypt.hash(
					data.get('username') as string,
					Number(process.env.SALT_ROUNDS)
				),
				player: { create: {} },
			},
		})
		redirect('/signin')
	}
}
