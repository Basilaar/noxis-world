export interface ClassApi {
  id: string,
  name: string,
  imageSrc: string,
  title: string
}

export type GetClassResponse = {
  data: ClassApi[],
}
