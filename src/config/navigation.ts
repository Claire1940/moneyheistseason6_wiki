import type { LucideIcon } from 'lucide-react'
import { CalendarClock, BadgeCheck, Clapperboard, Newspaper, ListVideo, Users } from 'lucide-react'

export interface NavigationItem {
	key: string
	path: string
	icon: LucideIcon
	isContentType: boolean
}

export const NAVIGATION_CONFIG: NavigationItem[] = [
	{ key: 'release', path: '/release', icon: CalendarClock, isContentType: true },
	{ key: 'confirmed', path: '/confirmed', icon: BadgeCheck, isContentType: true },
	{ key: 'trailer', path: '/trailer', icon: Clapperboard, isContentType: true },
	{ key: 'news', path: '/news', icon: Newspaper, isContentType: true },
	{ key: 'episodes', path: '/episodes', icon: ListVideo, isContentType: true },
	{ key: 'cast', path: '/cast', icon: Users, isContentType: true },
]

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
	(item) => item.path.slice(1),
)

export type ContentType = (typeof CONTENT_TYPES)[number]

export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}
