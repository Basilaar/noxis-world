import type { Metadata } from 'next'

import { RaceDetail } from '@/components/race-detail'

export const metadata: Metadata = {
  title: 'Вапитианец',
  description: 'Вапитианец — лесные гуманоиды с оленьими рогами, хранители леса Бронт.',
}

export default function VapitianetsPage() {
  return (
    <RaceDetail
      name="Вапитианец"
      type="Гуманоид"
      imageSrc="/images/races/vapitianets.jpg"
      imageAlt="Раса Вапитианец"
      height="190 см — 220 см"
      lifespan="85 лет (до 135 лет)"
      habitats={['Бронт']}
      galleryUrl="https://www.pinterest.com/deeraayv/%D0%B2%D0%B0%D0%BF%D0%B8%D1%82%D0%B8%D0%B0%D0%BD%D0%B5%D1%86/"
      description={
        <>
          <p>
            Высокие антропоморфные существа с оленьими рогами и чуткими ушами, реже с оленьими мордами — коренные жители древнего леса Бронт.
          </p>
          <p>
            Глубоко связаны с природой, многие из них — друиды или следопыты. За пределами Бронта встречаются редко: как правило, это странники в поисках сокрытых тайн.
          </p>
        </>
      }
      traits={[
        {
          title: 'Единение с лесом',
          description: 'Лес Бронт защищает вапитианцев и наделяет их обострённым восприятием и природной магией.',
        },
        {
          title: 'Хранители безвременья',
          description: 'Относятся к времени как к бесценному дару, презирая искусственное разделение эпох.',
        },
      ]}
    />
  )
}
