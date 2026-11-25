
import Link from 'next/link'

import { ClassLevelData } from '../../lib/classes-data'

import styles from './class-levels-table.module.scss'

type ClassLevelsTableProps = {
  levels: Record<number, ClassLevelData>
}

export function ClassLevelsTable({ levels }: ClassLevelsTableProps) {
  const levelEntries = Object.entries(levels).sort(
    ([a], [b]) => Number(a) - Number(b)
  )

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Прогрессия класса</h2>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Уровень</th>
              <th>Бонус мастерства</th>
              <th>Умения</th>
              <th>Схемы</th>
              <th>Маг. предметы</th>
              <th>Заговоры</th>
              <th>Заклинания</th>
              <th>Ячейки заклинаний</th>
            </tr>
          </thead>

          <tbody>
            {levelEntries.map(([level, data]) => (
              <tr key={level}>
                <td className={styles.level}>
                  {level}
                </td>

                <td>
                  +{data.proficiencyBonus}
                </td>

                <td className={styles.features}>
                  {data.features.length > 0 ? (
                    data.features.map((feature) => (
                      <Link
                        key={feature.linking}
                        href={`#${feature.linking}`}
                        className={styles.featureLink}
                      >
                        {feature.name}
                      </Link>
                    ))
                  ) : (
                    <span className={styles.empty}>—</span>
                  )}
                </td>

                <td>
                  {data.knownSchematics ?? '—'}
                </td>

                <td>
                  {data.magicItems ?? '—'}
                </td>

                <td>
                  {data.cantrips}
                </td>

                <td>
                  {data.preparedSpells}
                </td>

                <td className={styles.spellSlots}>
                  {data.spellSlots.map((slot, index) => (
                    <span key={index} title={`${index + 1} круг`}>
                      {slot > 0 ? slot : '—'}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
