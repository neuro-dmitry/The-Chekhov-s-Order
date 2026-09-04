import React from 'react';
import styles from './Minecraft.module.css';

import { minecraft_info } from '/src/data.json';

const Minecraft = () => {

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
              <h3 className={styles.serverName}>{minecraft_info.serverName}</h3>
              <p className={styles.serverDescription}>{minecraft_info.description}</p>
            </div>
          </div>

          <div className={styles.serverInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>IP-адрес:</span>
              <span className={styles.infoValue}>{minecraft_info.ip}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Версия:</span>
              <span className={styles.infoValue}>{minecraft_info.version}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Режим:</span>
              <span className={styles.infoValue}>{minecraft_info.mode}</span>
            </div>
          </div>

          <div className={styles.features}>
            <h4 className={styles.featuresTitle}>🌟 Особенности сервера</h4>
            <ul className={styles.featuresList}>
              {minecraft_info.features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className={styles.rules}>
            <h4 className={styles.rulesTitle}>📋 Правила сервера</h4>
            <ul className={styles.rulesList}>
              {minecraft_info.rules.map((rule, index) => (
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