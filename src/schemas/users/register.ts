import { z } from 'zod'

const password = z
	.string()
	.regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{12,}$/g)

export const userRegister = z.object({
	username: z.string().min(4),
	email: z.string().email(),
	password: password,
	confirmPassword: password,
})

export type UserRegister = z.infer<typeof userRegister>
