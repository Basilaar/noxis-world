import type { Metadata } from 'next'

import { GridPage } from '@/components/grid-page'
import { ClassesList } from '@/components/classes-list'

export const metadata: Metadata = {
  title: 'Classes',
}

export default function Races() {
  return (
    <GridPage title="Классы">
      <ClassesList />
    </GridPage>
  )
}
