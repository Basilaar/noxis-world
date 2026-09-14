import type { ReactNode } from 'react'
import { Background } from './background'
import { Navbar } from './navbar'
import { MobileNav } from './mobile-nav'
import styles from './app-shell.module.scss'

// App-wide chrome: background, desktop navbar, page slot and mobile nav.
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className={styles.shell}>
      <Background />
      <Navbar />
      <main className={styles.main}>{children}</main>
      <MobileNav />
    </div>
  )
}
