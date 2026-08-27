import React from 'react';
import styles from './Awards.module.css';

const Awards = () => {
  const medals = [
    {
      name: 'Медаль «Вандалеева» 1 ст.',
      desc: 'Выдается за принятие участия в завозах',
      icon: '🥉',
      class: 'bronze'
    },
    {
      name: 'Медаль «Вандалеева» 2 ст.',
      desc: 'Выдается за активное принятие участия в завозах',
      icon: '🥈',
      class: 'silver'
    },
    {
      name: 'Медаль «Вандалеева» 3 ст.',
      desc: 'Выдается за проведение завозов',
      icon: '🥇',
      class: 'gold'
    },
    {
      name: 'Медаль «Укратитель штаба»',
      desc: 'Выдается за украшение штаба',
      icon: '🏠',
      class: 'purple'
    },
    {
      name: 'Медаль «Azov»',
      desc: 'Выдается за какой-то личный крутой завоз',
      icon: '🌟',
      class: 'red'
    },
    {
      name: 'Медаль «Ебать ты тип»',
      desc: 'Выдается за какой-то ебанутейший личный завоз',
      icon: '🔥',
      class: 'orange'
    },
  ];

  const orders = [
    {
      name: 'Герой Ордена',
      desc: 'Выдается за поступок, прославивший орден',
      icon: '⚜️',
      class: 'hero'
    },
  ];

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