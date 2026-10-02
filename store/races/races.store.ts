import { create } from 'zustand'

import { getRacesListClient } from '@/api/races'
import type { RaceDtm } from '@/models'

// ─── Types ───────────────────────────────────────────────────────────────────

type RacesState = {
  races: RaceDtm[]
  selectedRaceId: string | null
}

type RacesActions = {
  fetchRaces: () => Promise<void>
}

export type RacesStore = RacesState & RacesActions


// ─── Store ───────────────────────────────────────────────────────────────────

export const useRacesStore = create<RacesStore>((set) => ({
  races: [],
  selectedRaceId: null,

  fetchRaces: async () => {
    const raceResponse = await getRacesListClient()

    set({ races: raceResponse })
  },
}))
