import type { ReactNode } from 'react'
import styles from './gridPage.module.scss'

type GridPageProps = {
  title: string
  children: ReactNode
}

// Reusable page layout: an eyebrow label, a display title and a content card.
export function GridPage({ eyebrow, title, children }: GridPageProps) {
  return (
    <article className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.grid}>{children}</div>
    </article>
  )
}
