import React, { useEffect } from 'react';
import styles from './Awards.module.css';

import {medals, orders} from '/src/data.json';

const Awards = () => {

  return (
    <section id="awards" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.icon}>🏅</span>
          <h2 className={styles.sectionTitle}>Награды Ордена</h2>
          <span className={styles.sectionBadge}>За заслуги</span>
        </div>

        <div className={styles.block}>
          <h3 className={styles.blockTitle}>
            <span className={styles.blockIcon}>🎖️</span>
            Медали
          </h3>
          <div className={styles.medalsGrid}>
            {medals.map((medal, index) => (
              <div key={index} className={`${styles.medalCard} ${styles[medal.class]}`}>
                <div className={styles.medalIcon}>{medal.icon}</div>
                <div className={styles.medalInfo}>
                  <h4 className={styles.medalName}>{medal.name}</h4>
                  <p className={styles.medalDesc}>{medal.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.block}>
          <h3 className={styles.blockTitle}>
            <span className={styles.blockIcon}>⚜️</span>
            Ордена
          </h3>
          <div className={styles.ordersGrid}>
            {orders.map((order, index) => (
              <div key={index} className={`${styles.orderCard} ${styles[order.class]}`}>
                <div className={styles.orderIcon}>{order.icon}</div>
                <div className={styles.orderInfo}>
                  <h4 className={styles.orderName}>{order.name}</h4>
                  <p className={styles.orderDesc}>{order.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;