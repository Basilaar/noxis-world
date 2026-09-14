import Image from 'next/image'

import { RaceDtm } from '@/models'

import styles from './race-card.module.scss'

type RaceCardProps = {
  raceData: RaceDtm
}

export function RaceCard({ raceData }: RaceCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={raceData.imageSrc}
          alt={raceData.name}
          fill
          className={styles.image}
          sizes="160px"
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{raceData.name}</h2>
      </div>
    </div>
  )
}
