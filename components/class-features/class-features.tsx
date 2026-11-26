
import { ClassDescription } from '../../lib/classes-data'

import styles from './class-features.module.scss'

type ClassFeaturesProps = {
  features: ClassDescription[]
}

export function ClassFeatures({ features }: ClassFeaturesProps) {
  const sortedFeatures = [...features].sort(
    (a, b) => a.level - b.level
  )

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Особенности класса
      </h2>

      <div className={styles.list}>
        {sortedFeatures.map((feature) => (
          <article
            key={feature.id}
            id={feature.id}
            className={styles.card}
          >
            <header className={styles.cardHeader}>
              <div className={styles.titleWrapper}>
                <span className={styles.level}>
                  Уровень {feature.level}
                </span>

                <h3 className={styles.title}>
                  {feature.name}
                </h3>
              </div>
            </header>

            <div className={styles.description}>
              {feature.description}
            </div>

            {feature.details && feature.details.length > 0 && (
              <div className={styles.details}>
                {feature.details.map((detail, index) => (
                  <div
                    key={`${feature.id}-${index}`}
                    className={styles.detail}
                  >
                    <h4 className={styles.detailTitle}>
                      {detail.title}
                    </h4>

                    <p className={styles.detailDescription}>
                      {detail.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {feature.spells && feature.spells.length > 0 && (
              <div className={styles.spells}>
                <h4 className={styles.spellsHeading}>
                  Список заклинаний
                </h4>

                {feature.spells.map((spellGroup) => (
                  <div
                    key={`${feature.id}-${spellGroup.level}`}
                    className={styles.spellGroup}
                  >
                    <span className={styles.spellLevel}>
                      {spellGroup.level} уровень
                    </span>

                    <div className={styles.spellList}>
                      {spellGroup.spells.map((spell) => (
                        <span
                          key={spell}
                          className={styles.spell}
                        >
                          {spell}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {(feature.uses || feature.recharge) && (
              <div className={styles.additional}>
                {feature.uses && (
                  <p>
                    <strong>Использования:</strong> {feature.uses}
                  </p>
                )}

                {feature.recharge && (
                  <p>
                    <strong>Восстановление:</strong> {feature.recharge}
                  </p>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
