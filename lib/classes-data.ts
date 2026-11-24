export type ClassTrait = {
  title: string
  description: string
}

export type ClassDetailData = {
  id: string
  name: string
  type: string
  imageSrc: string
  imageAlt?: string
  height?: string
  lifespan?: string
  habitats: string[]
  description: string[]
  traits: ClassTrait[]
  galleryUrl?: string
}

export const CLASSES_DATA: Record<string, ClassDetailData> = {
    //todo
}

export function getClassById(id: string): ClassDetailData | undefined {
  return CLASSES_DATA[id]
}

export function getAllClassesIds(): string[] {
  return Object.keys(CLASSES_DATA)
}
