'use client'

import {
	Avatar,
	AvatarFallback,
	Button,
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Input,
	Label,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui'
import { cn } from '@/utils/functions'
import { CheckIcon } from 'lucide-react'
import { useState } from 'react'

type CharactersSwitcherType = {
	characters: {
		label: string
		value: string
	}[]
	className?: string
}

export function CharacterSwitcher({
	characters,
	className,
}: CharactersSwitcherType) {
	const [open, setOpen] = useState(false)
	const [showNewTeamDialog, setShowNewTeamDialog] = useState(false)
	const [selectedTeam, setSelectedTeam] = useState<Team>(groups[0].teams[0])

	return (
		<Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open}
						aria-label="Select a team"
						className={cn('w-[200px] justify-between', className)}
					>
						<Avatar className="mr-2 h-5 w-5">
							<AvatarFallback>SC</AvatarFallback>
						</Avatar>
						{selectedTeam.label}
						<CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-[200px] p-0">
					<Command>
						<CommandList>
							<CommandInput placeholder="Search team..." />
							<CommandEmpty>Pas de personnages trouvés.</CommandEmpty>
							{groups.map(group => (
								<CommandGroup key={group.label} heading={group.label}>
									{group.teams.map(team => (
										<CommandItem
											key={team.value}
											onSelect={() => {
												setSelectedTeam(team)
												setOpen(false)
											}}
											className="text-sm"
										>
											<Avatar className="mr-2 h-5 w-5">
												<AvatarFallback>SC</AvatarFallback>
											</Avatar>
											{team.label}
											<CheckIcon
												className={cn(
													'ml-auto h-4 w-4',
													selectedTeam.value === team.value
														? 'opacity-100'
														: 'opacity-0'
												)}
											/>
										</CommandItem>
									))}
								</CommandGroup>
							))}
						</CommandList>
						<CommandSeparator />
						<CommandList>
							<CommandGroup>
								<DialogTrigger asChild>
									<CommandItem
										onSelect={() => {
											setOpen(false)
											setShowNewTeamDialog(true)
										}}
									>
										<PlusCircledIcon className="mr-2 h-5 w-5" />
										Create Team
									</CommandItem>
								</DialogTrigger>
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create team</DialogTitle>
					<DialogDescription>
						Add a new team to manage products and customers.
					</DialogDescription>
				</DialogHeader>
				<div>
					<div className="space-y-4 py-2 pb-4">
						<div className="space-y-2">
							<Label htmlFor="name">Team name</Label>
							<Input id="name" placeholder="Acme Inc." />
						</div>
						<div className="space-y-2">
							<Label htmlFor="plan">Subscription plan</Label>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="Select a plan" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="free">
										<span className="font-medium">Free</span> -{' '}
										<span className="text-muted-foreground">
											Trial for two weeks
										</span>
									</SelectItem>
									<SelectItem value="pro">
										<span className="font-medium">Pro</span> -{' '}
										<span className="text-muted-foreground">
											$9/month per user
										</span>
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>
				<DialogFooter>
					<Button variant="outline" onClick={() => setShowNewTeamDialog(false)}>
						Cancel
					</Button>
					<Button type="submit">Continue</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
