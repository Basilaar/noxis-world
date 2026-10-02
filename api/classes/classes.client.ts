import { RaceDtm } from '@/models'

import { ClassApi } from './classes.contracts'
import Classes from './classes.json'

export const getClassListClient = async (): Promise<RaceDtm[]> => {
  return Classes.data.map((classApiData: ClassApi): RaceDtm => ({
    id: classApiData.id,
    name: classApiData.name,
    imageSrc: classApiData.imageSrc,
  }))
}