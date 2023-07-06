import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const main = async () => {
	await prisma.user.create({
		data: {
			email: 'des@gmail.com',
			password: await bcrypt.hash('aZdes58Dokpk', 12),
			username: 'desssss',
			player: {
				create: {},
			},
		},
	})
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		await prisma.$disconnect()
		throw e
	})
