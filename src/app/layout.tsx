import { PropsWithChildren } from 'react'
import './globals.css'
import { Providers } from '@/components'

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<head />
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
