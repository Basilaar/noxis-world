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

import styles from './class-detail.module.scss'

// export type RaceTrait = {
//   title: string
//   description: string
// }

// export type RaceDetailProps = {
//   name: string
//   type?: string
//   imageSrc: string
//   imageAlt?: string
//   height?: string
//   lifespan?: string
//   habitats?: string[]
//   description: ReactNode
//   traits?: RaceTrait[]
//   galleryUrl?: string
// }
export type ClassDetailProps = {
  name : string
}

export function ClassDetail({
  name,
}: ClassDetailProps) {
  return (
    <article className={styles.container}>
      <div>
        <Link href="/classes" className={styles.backLink}>
          <ArrowLeft size={16} />
          <span>Все классы</span>
        </Link>
      </div>
       <span>{name}</span>
    </article>
  )
}
