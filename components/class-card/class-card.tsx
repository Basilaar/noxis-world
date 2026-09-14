import Image from 'next/image'

import { ClassDtm } from '@/models'

import styles from './class-card.module.scss'

type ClassCardProps = {
  classData: ClassDtm
}

export function ClassCard({ classData }: ClassCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={classData.imageSrc}
          alt={classData.title}
          fill
          className={styles.image}
          sizes="160px"
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{classData.title}</h2>
        <p className={styles.description}>{classData.subTitle}</p>
      </div>
    </div>
  )
}
