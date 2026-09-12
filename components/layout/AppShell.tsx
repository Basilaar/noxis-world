import type { ReactNode } from 'react'
import { Background } from './Background'
import { Navbar } from './Navbar'
import { MobileNav } from './MobileNav'
import styles from './AppShell.module.scss'

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
