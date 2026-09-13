import Image from 'next/image'
import styles from './card.module.scss'

type CardProps = {
  title: string
  imageSrc: string
  description: string
}

export function Card({ description, imageSrc, title }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={styles.image}
          sizes="160px"
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
