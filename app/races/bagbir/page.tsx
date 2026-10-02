import type { Metadata } from 'next'

import { RaceDetail } from '@/components/race-detail'

export const metadata: Metadata = {
  title: 'Багбир',
  description: 'Багбир — крупные и выносливые косматые гуманоиды мира Ноксис.',
}

export default function BagbirPage() {
  return (
    <RaceDetail
      name="Багбир"
      type="Гуманоид"
      imageSrc="/images/races/bagbir.jpg"
      imageAlt="Раса Багбир"
      height="200 см — 240 см"
      lifespan="72 года (до 115 лет)"
      habitats={['Вольгард', "Зу'ул", 'Миренор', 'Сиз']}
      galleryUrl="https://www.pinterest.com/deeraayv/%D0%B1%D0%B0%D0%B3%D0%B1%D0%B8%D1%80/"
      description={
        <>
          <p>
            Крупные, косматые гуманоиды, часто похожие на антропоморфных медведей.
          </p>
          <p>
            Багбиры работящие и выносливые, охотно берутся за тяжёлый труд, хорошо показывают себя в армии и страже. В Вольгарде их особенно уважают за стойкость и преданность долгу.
          </p>
        </>
      }
      traits={[
        {
          title: 'Могучее телосложение',
          description: 'Врождённая сила и физическая выносливость позволяют справляться с тяжелейшими нагрузками.',
        },
        {
          title: 'Воинская дисциплина',
          description: 'Превосходные бойцы авангарда, часовые и стражи порядка.',
        },
      ]}
    />
  )
}
