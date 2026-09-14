import type { ReactNode } from 'react'
import styles from './grid-page.module.scss'

type GridPageProps = {
  title: string
  children: ReactNode
}

// Reusable page layout: an eyebrow label, a display title and a content card.
export function GridPage({ title, children }: GridPageProps) {
  return (
    <article className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.grid}>{children}</div>
    </article>
  )
}
