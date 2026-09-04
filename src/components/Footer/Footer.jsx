import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.divider}>
          <span className={styles.line}></span>
          <span className={styles.motto}>Орден Чехова</span>
          <span className={styles.line}></span>
        </div>
        <p className={styles.text}>
          Основан в 2025г • 16 школа • г. Екатеринбург
        </p>
        <p className={styles.copy}>
          © {new Date().getFullYear()}-{new Date().getFullYear()+1} • Все права защищены • Ачех...
        </p>
      </div>
    </footer>
  );
};

export default Footer;