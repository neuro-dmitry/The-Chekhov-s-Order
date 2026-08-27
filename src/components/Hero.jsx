import React from 'react';
import styles from './Hero.module.css';
import logo from "../assets/logo.png"

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <img className={styles.logo} src={logo}></img>
        <h1 className={styles.title}>ОРДЕН ЧЕХОВА</h1>
        <p className={styles.quote}>«А хули нет-то?»</p>
        <p className={styles.subtitle}>Ебланы, стремящиеся сделать потужную школьную жизнь чуть веселее</p>
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