import type { ReactNode } from 'react'
import styles from './PageSection.module.scss'

type PageSectionProps = {
  eyebrow: string
  title: string
  children: ReactNode
}

// Reusable page layout: an eyebrow label, a display title and a content card.
export function PageSection({ eyebrow, title, children }: PageSectionProps) {
  return (
    <article className={styles.section}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.card}>{children}</div>
    </article>
  )
}
