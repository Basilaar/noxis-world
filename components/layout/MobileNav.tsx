'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/navigation'
import styles from './MobileNav.module.scss'

// Mobile-only navigation:
// - a floating burger toggle pinned to the bottom-right
// - a menu panel that slides up from the bottom of the screen
export function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close the sheet whenever we navigate to a new route.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Lock body scroll while the sheet is open.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  // Allow closing with Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className={styles.root}>
      <div
        className={open ? `${styles.backdrop} ${styles.backdropOpen}` : styles.backdrop}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="mobile-menu"
        className={open ? `${styles.sheet} ${styles.sheetOpen}` : styles.sheet}
        aria-label="Mobile"
        aria-hidden={!open}
      >
        <span className={styles.sheetHandle} aria-hidden="true" />
        <p className={styles.sheetTitle}>Navigation</p>
        <ul className={styles.list}>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isActive ? `${styles.item} ${styles.active}` : styles.item}
                  aria-current={isActive ? 'page' : undefined}
                  tabIndex={open ? 0 : -1}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <button
        type="button"
        className={styles.toggle}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
      </button>
    </div>
  )
}
