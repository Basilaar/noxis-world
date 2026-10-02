import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { RaceDetail } from '@/components/race-detail'
import { getAllRaceIds, getRaceById } from '@/lib/races-data'

type RacePageProps = {
  params: Promise<{
    raceId: string
  }>
}

export async function generateStaticParams() {
  const ids = getAllRaceIds()
  return ids.map((raceId) => ({ raceId }))
}

export async function generateMetadata({ params }: RacePageProps): Promise<Metadata> {
  const { raceId } = await params
  const race = getRaceById(raceId)

  if (!race) {
    return {
      title: 'Раса не найдена',
    }
  }

  return {
    title: race.name,
    description: `${race.name} — раса мира Ноксис (${race.type}). Места обитания: ${race.habitats.join(', ')}.`,
  }
}

export default async function RacePage({ params }: RacePageProps) {
  const { raceId } = await params
  const race = getRaceById(raceId)

  if (!race) {
    notFound()
  }

  return (
    <RaceDetail
      name={race.name}
      type={race.type}
      imageSrc={race.imageSrc}
      imageAlt={race.imageAlt || race.name}
      height={race.height}
      lifespan={race.lifespan}
      habitats={race.habitats}
      galleryUrl={race.galleryUrl}
      description={
        <>
          {race.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </>
      }
      traits={race.traits}
    />
  )
}
