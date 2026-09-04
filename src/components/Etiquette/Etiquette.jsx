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
              Ритуал приветствия
            </h3>
            <ol className={styles.list}>
              <li>Встать друг перед другом по стойке смирно, пятки и носки вместе</li>
              <li>
                Встать на носки и развести пятки в стороны, одновременно поднимая правую руку и сказать{' '}
                <span className={styles.highlight}>«ХАЙ»</span>
              </li>
              <li>
                Пожать руку, резко свести пятки и встать на полную стопу, сказать{' '}
                <span className={styles.highlight}>«ЧЕХОВ»</span>
              </li>
            </ol>
            <div className={styles.note}>
              <span className={styles.noteLabel}>Неофициально:</span> просто поднять руку и сказать «хай чехов»
            </div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <span className={styles.cardIcon}>👥</span>
              Правила ордена
            </h3>
            <ul className={styles.list}>
              <li>
                <span className={styles.label}>Субординация:</span> подъебывать можно только равных и младших по званию
              </li>
              <li>
                <span className={styles.label}>Культура речи:</span> чем меньше матов и больше джентльменских слов, тем лучше
              </li>
              <li>
                <span className={styles.label}>Щедрость:</span> всегда делись подиком с другим, если у него нечего курить
              </li>
            </ul>
            <div className={styles.warning}>
              ⚠️ Опущенным запрещено жать руку — кик из ордена без суда
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Etiquette;