import Link from 'next/link'

import { SubclassDtm } from '@/models'
import { usePathname } from 'next/navigation'

import styles from './subclass-card.module.scss'

type ClassCardProps = {
  subClassData: SubclassDtm
}

export function SubClassCard({ subClassData }: ClassCardProps) {
  const pathname = usePathname()

  const href =
    subClassData.id === 'none'
      ? `/classes/${subClassData.mainId}`
      : `/classes/${subClassData.mainId}/${subClassData.id}`

  const isActive = pathname === href

   return (
    <Link
      href={href}
      className={`${styles.card} ${isActive ? styles.active : ''}`}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{subClassData.title}</h2>
      </div>
    </Link>
  )
}
