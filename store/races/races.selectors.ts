import type { RacesStore, Race } from './races.store'

export const selectRaces = (state: RacesStore): Race[] => state.races

export const selectSelectedRaceId = (state: RacesStore): string | null =>
  state.selectedRaceId

export const selectSelectedRace = (state: RacesStore): Race | undefined =>
  state.races.find((r) => r.id === state.selectedRaceId)
