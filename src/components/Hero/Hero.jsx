import React from 'react';
import styles from './Hero.module.css';
import logo from "/src/assets/chehov.png"

import { quote } from '/src/data.json';

const Hero = () => {

  const randomQuote = quote[Math.floor(Math.random() * quote.length)];


  return (
    <section className={styles.hero} id="hero">
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <img className={styles.logo} src={logo}></img>
        <h1 className={styles.title}>ОРДЕН ЧЕХОВА</h1>
        <p className={styles.quote}>«{randomQuote}»</p>
        <p className={styles.subtitle}>Неофициальное объединение учеников 16 школы, призванное сделать школьную жизнь чуть интересней</p>
        <div className={styles.buttons}>
          <a
            className={styles.btnOutline}
            href='#etiquette'
          >Узнать больше</a>
          <button 
            className={styles.btnPrimary}
            onClick={() => alert("Свяжитесь с магистром ордена для уточнения этого вопроса")}
          >ВСТУПИТЬ</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;