import type { Metadata } from 'next'
import { GridPage } from '@/components/grid-page'
import { RacesList } from '@/components/races-list'

export const metadata: Metadata = {
  title: 'Races',
}

export default function Races() {
  return (
    <GridPage title="Расы">
      <RacesList />
    </GridPage>
  )
}
