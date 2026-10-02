import { RaceDtm } from '@/models'

import { RaceApi } from './races.contracts'
import Races from './races.json'

export const getRacesListClient = async (): Promise<RaceDtm[]> => {
  return Races.data.map((raceApiData: RaceApi): RaceDtm => ({
    id: raceApiData.id,
    name: raceApiData.name,
    imageSrc: raceApiData.imageSrc,
  }))
}