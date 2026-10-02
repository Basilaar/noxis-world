import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  Ruler,
  Hourglass,
  MapPin,
  Sparkles,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react'

import styles from './race-detail.module.scss'

export type RaceTrait = {
  title: string
  description: string
}

export type RaceDetailProps = {
  name: string
  type?: string
  imageSrc: string
  imageAlt?: string
  height?: string
  lifespan?: string
  habitats?: string[]
  description: ReactNode
  traits?: RaceTrait[]
  galleryUrl?: string
}

export function RaceDetail({
  name,
  type = 'Гуманоид',
  imageSrc,
  imageAlt,
  height,
  lifespan,
  habitats = [],
  description,
  traits = [],
  galleryUrl,
}: RaceDetailProps) {
  return (
    <article className={styles.container}>
      <div>
        <Link href="/races" className={styles.backLink}>
          <ArrowLeft size={16} />
          <span>Все расы</span>
        </Link>
      </div>

      <header className={styles.header}>
        <div className={styles.eyebrow}>
          <Sparkles size={14} />
          <span>Раса</span>
          <span className={styles.eyebrowDot} />
          <span>{type}</span>
        </div>
        <h1 className={styles.title}>{name}</h1>
      </header>

      <div className={styles.mainCard}>
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <Image
              src={imageSrc}
              alt={imageAlt || name}
              width={600}
              height={800}
              sizes="(max-width: 768px) 100vw, 320px"
              priority
              className={styles.image}
            />
          </div>

          {galleryUrl && (
            <a
              href={galleryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.galleryButton}
            >
              <span>Галерея референсов</span>
              <ExternalLink size={15} />
            </a>
          )}
        </div>

        <div className={styles.contentSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <ShieldCheck size={20} className={styles.statIcon} />
              <div className={styles.statInfo}>
                <span className={styles.statLabel}>Тип</span>
                <span className={styles.statValue}>{type}</span>
              </div>
            </div>

            {height && (
              <div className={styles.statCard}>
                <Ruler size={20} className={styles.statIcon} />
                <div className={styles.statInfo}>
                  <span className={styles.statLabel}>Рост</span>
                  <span className={styles.statValue}>{height}</span>
                </div>
              </div>
            )}

            {lifespan && (
              <div className={styles.statCard}>
                <Hourglass size={20} className={styles.statIcon} />
                <div className={styles.statInfo}>
                  <span className={styles.statLabel}>Возраст</span>
                  <span className={styles.statValue}>{lifespan}</span>
                </div>
              </div>
            )}

            {habitats.length > 0 && (
              <div className={styles.statCard}>
                <MapPin size={20} className={styles.statIcon} />
                <div className={styles.statInfo}>
                  <span className={styles.statLabel}>Места обитания</span>
                  <div className={styles.habitatTags}>
                    {habitats.map((place) => (
                      <span key={place} className={styles.habitatTag}>
                        {place}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Описание</h2>
            <div className={styles.descriptionText}>
              {typeof description === 'string' ? <p>{description}</p> : description}
            </div>
          </section>

          {traits.length > 0 && (
            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>Особенности</h2>
              <div className={styles.traitsList}>
                {traits.map((trait) => (
                  <div key={trait.title} className={styles.traitItem}>
                    <strong>{trait.title}:</strong>
                    <span>{trait.description}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </article>
  )
}
