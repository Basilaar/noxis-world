import type { ReactNode } from 'react'

import styles from './simple-page.module.scss'

type SimplePageProps = {
  title: string
  children: ReactNode
}

// Reusable page layout: an eyebrow label, a display title and a content card.
export function SimplePage({ title, children }: SimplePageProps) {
  return (
    <article className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.card}>{children}</div>
    </article>
  )
}
