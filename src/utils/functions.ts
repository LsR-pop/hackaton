import { authOptions } from '@/lib/auth'
import { clsx, type ClassValue } from "clsx"
import { Session, getServerSession } from 'next-auth'
import { twMerge } from "tailwind-merge"

export async function getUserSession() {
	const session = await getServerSession(authOptions)

	return (session as Session).user
}
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
