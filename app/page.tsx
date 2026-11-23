import Link from 'next/link'
import {
  Sparkles,
  Scroll,
  Scale,
  Compass,
  Users,
  Sword,
  ArrowRight,
} from 'lucide-react'

import styles from './page.module.scss'

export default function GeneralPage() {
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.eyebrow}>
          <Sparkles size={14} />
          <span>Вселенная</span>
          <span className={styles.eyebrowDot} />
          <span>Ноксис</span>
        </div>
        <h1 className={styles.title}>Мир Ноксис</h1>
        <p className={styles.subtitle}>Хроники тёмного фэнтези, где боги давно умолкли</p>
      </header>

      <section className={styles.mainCard}>
        <div className={styles.quoteBox}>
          «Здесь нет чёрного и белого. Есть только причины и следствия.»
        </div>

        <div className={styles.storyText}>
          <p>
            Мир тёмного фэнтези, в дела которого боги давно не вмешиваются.
            Ты можешь стать героем, который нашёл и наказал грабителя-убийцу.
            Но что после этого тебе скажет его болеющая неизвестной хворью дочь, ради которой он и пошёл на крайние меры?
          </p>
          <p>
            Такие повороты судьбы ожидают тебя в мире <span className={styles.highlight}>Ноксис</span>.
            Каждое принятое решение оставляет неизгладимый след, а цена справедливости порой оказывается непомерно высока.
          </p>
        </div>

        <div className={styles.welcomeBanner}>
          <Scroll size={20} className={styles.welcomeIcon} />
          <span>Добро пожаловать в недетскую сказку.</span>
        </div>
      </section>

      <section className={styles.gridSection}>
        <h2 className={styles.sectionHeading}>Основы мира</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIconWrapper}>
              <Compass size={20} />
            </div>
            <h3 className={styles.featureTitle}>Молчание богов</h3>
            <p className={styles.featureText}>
              Высшие силы покинули этот мир, оставив смертных один на один со своей судьбой и дикой магией.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIconWrapper}>
              <Scale size={20} />
            </div>
            <h3 className={styles.featureTitle}>Серая мораль</h3>
            <p className={styles.featureText}>
              Никаких абсолютных истин — у каждого поступка есть скрытая цена и глубокие мотивы.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIconWrapper}>
              <Sparkles size={20} />
            </div>
            <h3 className={styles.featureTitle}>Древняя магия</h3>
            <p className={styles.featureText}>
              Первородные силы стихий и тайные ритуалы, таящиеся в дебрях Бронта и песках Джанабии.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <h2 className={styles.sectionHeading}>Исследовать Ноксис</h2>
        <div className={styles.navigationGrid}>
          <Link href="/races" className={styles.navCard}>
            <div className={styles.navCardContent}>
              <div className={styles.navCardHeader}>
                <Users size={22} />
                <h3 className={styles.navCardTitle}>Расы мира</h3>
              </div>
              <p className={styles.navCardDesc}>
                Познакомьтесь с обитателями континентов — от лесных вапитианцев и гордых орков до загадочных чейнджлингов.
              </p>
            </div>
            <div className={styles.navCardAction}>
              <span>Смотреть каталог рас</span>
              <ArrowRight size={15} />
            </div>
          </Link>

          <Link href="/classes" className={styles.navCard}>
            <div className={styles.navCardContent}>
              <div className={styles.navCardHeader}>
                <Sword size={22} />
                <h3 className={styles.navCardTitle}>Классы и ремёсла</h3>
              </div>
              <p className={styles.navCardDesc}>
                Выберите свой путь и боевое призвание — от магов и рунических резчиков до несокрушимых воинов.
              </p>
            </div>
            <div className={styles.navCardAction}>
              <span>Смотреть каталог классов</span>
              <ArrowRight size={15} />
            </div>
          </Link>
        </div>
      </section>
    </article>
  )
}

