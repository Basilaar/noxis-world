import { create } from 'zustand'

import { ClassDtm } from '@/models'

import classesDataJson from './classes.json'

// ─── Types ───────────────────────────────────────────────────────────────────

type ClassesState = {
  classes: ClassDtm[]
}

type ClassesActions = {
  fetchClasses: () => Promise<void>
}

export type ClassesStore = ClassesState & ClassesActions

// ─── Store ───────────────────────────────────────────────────────────────────

export const useClassesStore = create<ClassesStore>((set) => ({
  classes: [],

  fetchClasses: async () => {
    set({classes: classesDataJson.data})
  }
}))
