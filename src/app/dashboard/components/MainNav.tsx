import Link from 'next/link'

import { cn } from '@/utils/functions'

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn('flex items-center space-x-4 lg:space-x-6', className)}
			{...props}
		>
			<Link
				href="/dashboard"
				className="hover:text-primary text-sm font-medium transition-colors"
			>
				Tableau de bord
			</Link>
			<Link
				href="#"
				className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
			>
				Paramètres
			</Link>
		</nav>
	)
}
