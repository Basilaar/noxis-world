import styles from './background.module.scss'

// Fixed, decorative D&D valley backdrop shared by every page.
export function Background() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.image} />
      <div className={styles.overlay} />
      <div className={styles.vignette} />
    </div>
  )
}
