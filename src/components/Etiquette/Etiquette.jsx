import React from 'react';
import styles from './Etiquette.module.css';

const Etiquette = () => {
  return (
    <section id="etiquette" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.icon}>📜</span>
          <h2 className={styles.sectionTitle}>Этикет ордена</h2>
          <span className={styles.sectionBadge}>Закон Ордена</span>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <span className={styles.cardIcon}>🤝</span>
              Ритуал приветствия «Брежневская любовь»
            </h3>
            <ol className={styles.list}>
              <li>Два человека встают друг напротив друга <span className={styles.highlight}>(стойка свободная)</span></li>
              <li>
                Производится рукопожатие с {' '}
                <span className={styles.highlight}>«братским объятием»</span>
              </li>
              <li>
                Во время рукопожатия производится имитация поцелуя в щеку {' '}
                <span className={styles.highlight}>(обязательно озвучка)</span>
              </li>
            </ol>
            <div className={styles.note}>
              <span className={styles.noteLabel}>Неофициально:</span> рукопожатие с похлопыванием свободной рукой по плечу того, с кем здороваетесь
            </div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <span className={styles.cardIcon}>👥</span>
              Правила ордена
            </h3>
            <ul className={styles.list}>
              <li>
                <span className={styles.label}>Субординация:</span> подкалывать можно только равных и младших по званию
              </li>
              <li>
                <span className={styles.label}>Культура речи:</span> обилие матов не красит, чем меньше матов и больше джентльменских слов, тем лучше
              </li>
              <li>
                <span className={styles.label}>Щедрость:</span> один из главных принципов Ордена, всегда делись с другом
              </li>
            </ul>
            <div className={styles.warning}>
              ⚠️ Зарпещено распространение внутренней информации о планах ордена - возбуждение дела о переведении в ЧСО 3-его уровня
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Etiquette;