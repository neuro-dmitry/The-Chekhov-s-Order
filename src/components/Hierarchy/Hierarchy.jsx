import React from 'react';
import styles from './Hierarchy.module.css';

import { levels } from '/src/data.json';

const Hierarchy = () => {

  const getColorClass = (step) => {
    const colors = {
      '-1': styles.red,
      '0': styles.gray,
      '1': styles.stone,
      '2': styles.amber,
      c1: styles.pink,
      '3': styles.blue,
      c2: styles.orange,
      '4': styles.green,
      '5': styles.purple,
      c3: styles.indigo,
      '6': styles.gold,
      '7': styles.red,
      '8': styles.dark,
    };
    return colors[step] || styles.stone;
  };

  return (
    <section id="hierarchy" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.icon}>📈</span>
          <h2 className={styles.sectionTitle}>Иерархия подиков</h2>
          <span className={styles.sectionBadge}>Ступени</span>
        </div>

        <div className={styles.grid}>
          {levels.map((level) => (
            <div key={level.step} className={`${styles.card} ${getColorClass(level.step)}`}>
              <div className={styles.cardHeader}>
                <div>
                  <span className={styles.cardStep}>Ступень {level.step}</span>
                  <h4 className={styles.cardTitle}>{level.title}</h4>
                </div>
                <span className={styles.cardIcon}>{level.icon}</span>
              </div>
              <p className={styles.cardDesc}>{level.desc}</p>
              <p className={styles.cardDesc}>{level.desc2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hierarchy;