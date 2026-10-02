export interface RaceApi {
  id: string,
  name: string,
  imageSrc: string
}

export type GetRacesResponse = {
  data: RaceApi[],
}
