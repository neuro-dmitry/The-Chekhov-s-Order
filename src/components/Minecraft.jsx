import React from 'react';
import styles from './Minecraft.module.css';

const Minecraft = () => {
  const info = {
    serverName: 'Чехов град',
    ip: '***************',
    version: '1.20.4',
    mode: 'Выживание',
    description: 'Сервер ордена. Строим, выживаем, творим хуйню и проводим суды',
    features: [
      '🏰 Суды над провинившимися',
      '⚔️ Покер',
      '🎮 Моды ванила+',
      '⛏️ Заходи когда хочешь',
    ],
    rules: [
      'Не гриферить чужие постройки (пока тебя видят)',
      'Не помогать новичкам',
      'Соблюдать этикет Ордена',
      'Участвовать в завозах'
    ]
  };

  return (
    <section id="minecraft" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.icon}>⛏️</span>
          <h2 className={styles.sectionTitle}>Minecraft Сервер</h2>
          <span className={styles.sectionBadge}>Орденский мир</span>
        </div>

        <div className={styles.serverCard}>
          <div className={styles.serverHeader}>
            <div className={styles.serverIcon}>
              <span>⛏️</span>
            </div>
            <div>
              <h3 className={styles.serverName}>{info.serverName}</h3>
              <p className={styles.serverDescription}>{info.description}</p>
            </div>
          </div>

          <div className={styles.serverInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>IP-адрес:</span>
              <span className={styles.infoValue}>{info.ip}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Версия:</span>
              <span className={styles.infoValue}>{info.version}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Режим:</span>
              <span className={styles.infoValue}>{info.mode}</span>
            </div>
          </div>

          <div className={styles.features}>
            <h4 className={styles.featuresTitle}>🌟 Особенности сервера</h4>
            <ul className={styles.featuresList}>
              {info.features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className={styles.rules}>
            <h4 className={styles.rulesTitle}>📋 Правила сервера</h4>
            <ul className={styles.rulesList}>
              {info.rules.map((rule, index) => (
                <li key={index} className={styles.ruleItem}>{rule}</li>
              ))}
            </ul>
          </div>

          <button className={styles.joinBtn}
            onClick={() => alert("Свяжитесь с магистром ордена для уточнения этого вопроса")}
          >▶ Присоединиться к серверу</button>
        </div>

        <div className={styles.statusBar}>
          <div className={styles.statusItem}>
            <span className={styles.statusDot}></span>
            <span>Сервер активен?</span>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.playersIcon}>👥</span>
            <span>?? / 100 игроков</span>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.tpsIcon}>⚡</span>
            <span>TPS: ??.0</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Minecraft;