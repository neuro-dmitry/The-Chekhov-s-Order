import React from 'react';
import styles from './Ranks.module.css';

const Ranks = () => {
  const ranks = [
    { name: 'Дырявая ложка', desc: 'Опущенный ордена. Зашкваренный уебок.', icon: '🥄' },
    { name: 'Шланг', desc: 'Новичок. Не прошел испытание хуем.', icon: '💧' },
    { name: 'Рыцарь', desc: 'Полноправный член ордена.', icon: '⚔️' },
    { name: 'Магистр', desc: 'Доверенное лицо ордена.', icon: '📜' },
    { name: 'Великий магистр', desc: 'Герой ордена или основатель.', icon: '👑' },
    { name: 'Арханел', desc: 'Бывшие великие магистры, ушедшие на небеса универа.', icon: '✨' },
  ];

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