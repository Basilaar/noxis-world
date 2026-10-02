import { ClassDtm } from '@/models'

import { ClassApi } from './classes.contracts'
import Classes from './classes.json'

export const getClassListClient = async (): Promise<ClassDtm[]> => {
  return Classes.data.map((classApiData: ClassApi): ClassDtm => ({
    id: classApiData.id,
    title: classApiData.name,
    imageSrc: classApiData.imageSrc,
    subTitle: classApiData.title,
  }))
}