import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from "../assets/logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Этикет', href: '#etiquette' },
    { label: 'Религии', href: '#religions' },
    { label: 'Иерархия', href: '#hierarchy' },
    { label: 'Звания', href: '#ranks' },
    { label: 'Награды', href: '#awards' },
    { label: 'Состав', href: '#members' },
    { label: 'Чехов Град', href: '#minecraft' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.logoWrapper} href='#hero'>
          <img className={styles.logo} src={logo}></img>
          <div>
            <h1 className={styles.title}>ОРДЕН ЧЕХОВА</h1>
            <p className={styles.subtitle}>ХАЙ ЧЕХОВ!</p>
          </div>
        </a>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
          <button 
            className={styles.joinBtn}
            onClick={() => alert("Свяжитесь с магистром ордена для уточнения этого вопроса")}
          >ВСТУПИТЬ</button>
        </nav>

        <button
          className={styles.menuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className={styles.mobileJoinBtn}>ВСТУПИТЬ</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;