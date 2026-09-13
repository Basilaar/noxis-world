import { create } from 'zustand'

// ─── Types ───────────────────────────────────────────────────────────────────

export type Race = {
  id: string
  name: string
  origin: string
  description: string
  traits: string[]
}

type RacesState = {
  races: Race[]
  selectedRaceId: string | null
}

type RacesActions = {
  selectRace: (id: string | null) => void
}

export type RacesStore = RacesState & RacesActions

// ─── Seed data ───────────────────────────────────────────────────────────────

const INITIAL_RACES: Race[] = [
  {
    id: 'human',
    name: 'Человек',
    origin: 'Равнины Нокзиса',
    description:
      'Самая многочисленная раса мира. Люди отличаются невероятной адаптивностью и быстро осваивают любые навыки.',
    traits: ['Адаптивность', 'Дипломатия', 'Торговля'],
  },
  {
    id: 'elf',
    name: 'Эльф',
    origin: 'Серебряные леса',
    description:
      'Древний народ, хранящий знания тысячелетий. Эльфы обладают обострёнными чувствами и природной магической склонностью.',
    traits: ['Острое зрение', 'Магический дар', 'Долголетие'],
  },
  {
    id: 'dwarf',
    name: 'Дварф',
    origin: 'Горы Стального Хребта',
    description:
      'Непоколебимые мастера камня и металла. Дварфы строят крепости в глубинах земли и куют легендарное оружие.',
    traits: ['Стойкость', 'Кузнечное дело', 'Темновидение'],
  },
  {
    id: 'orc',
    name: 'Орк',
    origin: 'Пустоши Красного Пепла',
    description:
      'Воинственный и гордый народ. Орки ценят силу, честь в бою и верность клану превыше всего.',
    traits: ['Берсеркерство', 'Сила', 'Выносливость'],
  },
  {
    id: 'undead',
    name: 'Нежить',
    origin: 'Некрополь Вечной Тени',
    description:
      'Те, кого смерть не смогла удержать. Нежить существует между мирами, питаясь тёмной энергией и старыми воспоминаниями.',
    traits: ['Иммунитет к ядам', 'Некромантия', 'Ночное зрение'],
  },
]

// ─── Store ───────────────────────────────────────────────────────────────────

export const useRacesStore = create<RacesStore>((set) => ({
  races: INITIAL_RACES,
  selectedRaceId: null,

  selectRace: (id) => set({ selectedRaceId: id }),
}))
