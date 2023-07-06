import { getToken } from 'next-auth/jwt'
import { NextMiddleware, NextResponse } from 'next/server'

const middleware: NextMiddleware = async req => {
	const { pathname } = req.nextUrl

	const ignoredRegex =
		/^(?!\/(api|_next\/(static|image)|favicon\.ico|404|signup)).*$/

	if (!ignoredRegex.test(pathname)) {
		return NextResponse.next()
	}

	const token = await getToken({ req })

	const isAuth = Boolean(token)

	if (!isAuth || !token) {
		return NextResponse.redirect(new URL('/api/auth/signin', req.url))
	}

	if (pathname === '/') {
		return NextResponse.redirect(new URL('/dashboard', req.url))
	}

	if (pathname === '/signin') {
		return NextResponse.redirect(new URL('/api/auth/signin', req.url))
	}

	return NextResponse.next()
}

export default middleware
