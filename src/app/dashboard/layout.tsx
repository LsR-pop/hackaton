import { PropsWithChildren } from 'react'
import { NavbarDashboard } from './components'

export default function DashboardLayout({ children }: PropsWithChildren) {
	return (
		<>
			<NavbarDashboard />
			<main>{children}</main>
		</>
	)
}
