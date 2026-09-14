import type { RaceDtm } from '@/models'

import type { RacesStore } from './races.store'

export const selectRaces = (state: RacesStore): RaceDtm[] => state.races