import type { Metadata } from 'next'

import { RaceDetail } from '@/components/race-detail'

export const metadata: Metadata = {
  title: 'Алькаварид',
  description: 'Алькаварид — лёгкие и быстрые антропоморфные грызуны мира Ноксис.',
}

export default function AlkavaridPage() {
  return (
    <RaceDetail
      name="Алькаварид"
      type="Гуманоид"
      imageSrc="/images/races/alkavarid.jpg"
      imageAlt="Раса Алькаварид"
      height="100 см (до 130 см)"
      lifespan="55 лет (до 90 лет)"
      habitats={['Миренор', 'Бронт', 'Этрия']}
      galleryUrl="https://www.pinterest.com/deeraayv/%D0%B0%D0%BB%D1%8C%D0%BA%D0%B0%D0%B2%D0%B0%D1%80%D0%B8%D0%B4%D1%8B/"
      description={
        <>
          <p>
            Лёгкие, быстрые антропоморфные грызуны. Средний рост составляет около 1 метра, а
            максимальный достигает 130 см.
          </p>
          <p>
            Пугаются первыми, но соображают быстрее большинства. В Миреноре их особенно много среди
            курьеров, разведчиков и мелких торговцев.
          </p>
        </>
      }
      traits={[
        {
          title: 'Молниеносная реакция',
          description:
            'Пугливый темперамент компенсируется высочайшей скоростью мысли и проворностью.',
        },
        {
          title: 'Ремесло и торговля',
          description:
            'Ценятся в крупных городах как надёжные и неуловимые посыльные, а также сообразительные лавочники.',
        },
      ]}
    />
  )
}
