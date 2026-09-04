import React from 'react';
import styles from './Religions.module.css';

import {religions} from "/src/data.json";

const Religions = () => {
  return (
    <section id="religions" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.icon}>⛪</span>
          <h2 className={styles.sectionTitle}>Религии Ордена</h2>
          <span className={styles.sectionBadge}>Две веры</span>
        </div>
        <p className={styles.description}>
          Каждый член может выбирать и менять религию по своему желанию.
          Статус и права не меняются — это отражение характера.
        </p>

        <div className={styles.grid}>
           {religions.map((religion) => (
        <div key={religion.id} className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon}>{religion.icon}</span>
            <h3 className={styles.cardTitle}>{religion.title}</h3>
          </div>
          <p className={styles.cardDesc}>{religion.desc}</p>
          <div className={styles.prayer}>
            <p className={styles.prayerLabel}>{religion.prayerLabel}</p>
            <p className={styles.prayerText}>
              {religion.prayerText.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < religion.prayerText.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
          <button 
            className={styles.acceptBtn}
            onClick={() => alert("Свяжитесь с магистром ордена для уточнения этого вопроса")}
          >
            ПРИНЯТЬ ВЕРУ
          </button>
        </div>
      ))}

        </div>
      </div>
    </section>
  );
};

export default Religions;