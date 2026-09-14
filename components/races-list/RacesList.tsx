'use client'

import { useEffect } from 'react'

import { useRacesStore, selectRaces } from '@/store/races'

import { RaceCard } from '../race-card'

export function RacesList() {
  const { fetchRaces } = useRacesStore()
  const races = useRacesStore(selectRaces)

  useEffect(() => {
    fetchRaces()
  }, [])

  return (
    <>
      {races.map((race) => (
        <RaceCard
          key={race.id}
          raceData={race}
        />
      ))}
    </>
  )
}
