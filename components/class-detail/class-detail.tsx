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
import {
  SubClasses,
  ClassLevelData,
  ClassDescription
} from '../../lib/classes-data'

import { SubClassesList } from '../subclass-list'
import { ClassLevelsTable } from '../class-levels-table'
import { ClassFeatures } from '../class-features'


import styles from './class-detail.module.scss'

export type ClassDetailProps = {
  name : string,
  title: string,
  subclasses: SubClasses[];
  levels: Record<number, ClassLevelData>;
  features: ClassDescription[];
}

export function ClassDetail({
  name,
  title,
  subclasses,
  levels,
  features
}: ClassDetailProps) {

  return (
    <article className={styles.container}>
      <div>
        <Link href="/classes" className={styles.backLink}>
          <ArrowLeft size={16} />
          <span>Все классы</span>
        </Link>
      </div>

       <header className={styles.header}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          <span>{title}</span>
        </div>
        <h1 className={styles.title}>{name}</h1>
      </header>
      <SubClassesList subClassData={subclasses} />

      <ClassLevelsTable levels={levels} />

      <ClassFeatures features={features} />

    </article>
  )
}
