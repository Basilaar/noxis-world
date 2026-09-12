export type NavItem = {
  label: string
  href: string
}

// Single source of truth for the app routes.
// Both the desktop navbar and the mobile menu render from this list.
export const NAV_ITEMS: NavItem[] = [
  { label: 'General', href: '/' },
  { label: 'Page 1', href: '/page-1' },
  { label: 'Page 2', href: '/page-2' },
]
