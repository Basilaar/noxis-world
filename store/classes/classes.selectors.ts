import type { ClassDtm } from '@/models'

import type { ClassesStore } from './classes.store'

export const selectClasses = (state: ClassesStore): ClassDtm[] => state.classes
