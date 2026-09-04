import React from 'react';
import styles from './Ranks.module.css';

import { ranks } from '/src/data.json';

const Ranks = () => {

  return (
    <section id="ranks" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.icon}>🛡️</span>
          <h2 className={styles.sectionTitle}>Звания Ордена</h2>
          <span className={styles.sectionBadge}>Иерархия</span>
        </div>

        <div className={styles.grid}>
          {ranks.map((rank) => (
            <div key={rank.name} className={styles.card}>
              <div className={styles.cardIcon}>{rank.icon}</div>
              <h4 className={styles.cardTitle}>{rank.name}</h4>
              <p className={styles.cardDesc}>{rank.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ranks;