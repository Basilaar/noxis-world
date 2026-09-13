export type NavItem = {
  label: string
  href: string
}

// Single source of truth for the app routes.
// Both the desktop navbar and the mobile menu render from this list.
export const NAV_ITEMS: NavItem[] = [
  { label: 'Мир', href: '/' },
  { label: 'Классы', href: '/classes' },
  { label: 'Рассы', href: '/races' },
]
