import { PropsWithChildren } from 'react'
import { Providers } from './components'
import './globals.css'

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
