'use client'

import { useRacesStore, selectRaces, selectSelectedRace, selectSelectedRaceId } from '@/store/races'
import styles from './RacesList.module.scss'

export function RacesList() {
  const races = useRacesStore(selectRaces)
  const selectedRaceId = useRacesStore(selectSelectedRaceId)
  const selectedRace = useRacesStore(selectSelectedRace)
  const selectRace = useRacesStore((s) => s.selectRace)

  return (
    <div className={styles.wrapper}>
      {/* ── Grid of race cards ── */}
      <ul className={styles.grid}>
        {races.map((race) => (
          <li
            key={race.id}
            className={`${styles.card} ${selectedRaceId === race.id ? styles.cardActive : ''}`}
            onClick={() => selectRace(selectedRaceId === race.id ? null : race.id)}
          >
            <span className={styles.cardName}>{race.name}</span>
            <span className={styles.cardOrigin}>{race.origin}</span>
          </li>
        ))}
      </ul>

      {/* ── Detail panel ── */}
      {selectedRace && (
        <div className={styles.detail}>
          <h2 className={styles.detailName}>{selectedRace.name}</h2>
          <p className={styles.detailOrigin}>Родина: {selectedRace.origin}</p>
          <p className={styles.detailDescription}>{selectedRace.description}</p>

          <div className={styles.traits}>
            <span className={styles.traitsLabel}>Особенности:</span>
            <ul className={styles.traitsList}>
              {selectedRace.traits.map((trait) => (
                <li key={trait} className={styles.trait}>
                  {trait}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
