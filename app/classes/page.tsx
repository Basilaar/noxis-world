import type { Metadata } from 'next'

import { GridPage } from '@/components/grid-page'
import { Card } from '@/components/card'

export const metadata: Metadata = {
  title: 'Classes',
}

export default function Races() {
  return (
    <GridPage title="Классы">
      <Card
        title='Тестовый класс'
        imageSrc='alala'
        description='Тестовое описание класса'
      />
    </GridPage>
  )
}
