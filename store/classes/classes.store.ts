import { create } from 'zustand'

import { getClassListClient } from '@/api/classes'
import { ClassDtm } from '@/models'

// ─── Types ───────────────────────────────────────────────────────────────────

type ClassesState = {
  classes: ClassDtm[]
  selectedClassId: string | null
}

type ClassesActions = {
  fetchClasses: () => Promise<void>
}

export type ClassesStore = ClassesState & ClassesActions


// ─── Store ───────────────────────────────────────────────────────────────────

export const useClassesStore = create<ClassesStore>((set) => ({
  classes: [],
  selectedClassId: null,

  fetchClasses: async () => {
    const classResponse = await getClassListClient()
    // TODO: добавить обработку ошибки
  
    set({ classes: classResponse })
  },
}))
