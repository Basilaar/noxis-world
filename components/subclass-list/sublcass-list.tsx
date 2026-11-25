'use client'

import styles from './subclass-list.module.scss'

import { SubClassCard } from '../subclass-card'
import { SubclassDtm } from '@/models'

type ClassCardProps = {
    subClassData: SubclassDtm[]
  }

export function SubClassesList({ subClassData }: ClassCardProps) {

  return (
    <>
    <div className={styles.list}>
      {subClassData.map((subClass) => (
        <SubClassCard
          key={subClass.id}
          subClassData={subClass}
        />
      ))}
    </div>
    </>
  )
}
