export interface ClassApi {
  id: string,
  name: string,
  imageSrc: string
}

export type GetClassResponse = {
  data: ClassApi[],
}
