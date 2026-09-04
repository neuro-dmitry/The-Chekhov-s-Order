import React from 'react';
import styles from './BLO.module.css';

const BLO = () => {
  return (
    <section id="BLO" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.icon}>📜</span>
          <h2 className={styles.sectionTitle}>Черный список ордена</h2>
          <span className={styles.sectionBadge}>ЧСО</span>
        </div>

        <p className={styles.description}>
          ЧСО имеет 3 уровня, находясь в 1 и 2 уровне ЧСО есть возможность вернуться/вступить в Орден путем суда и следственных действий, если они потребуются. Находясь же в 3 уровне никаких вариантов для присоединения  {' '}
                <span className={styles.highlight}>нет.</span>
        </p>

        <div className={styles.grid}>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <span className={styles.cardIcon}>🤝</span>
              Правила общения с членами ЧСО
            </h3>
            <ol className={styles.list}>
              <li>Люди, находящиеся в ЧСО <span className={styles.highlight}>(3-й уровень)</span>, никакими путями не могут вступить в Орден, также категорически запрещается им передавать и распространять какую-либо информацию об Ордене.</li>
              <li>
                Старайтесь не контактировать с ЧСОшниками, выбор Ваш, но за ним может последовать нотка осуждения. {' '}
                <span className={styles.highlight}>осуждения.</span>
              </li>
              <li>
                Будьте людьми, орден Чехова создан для развлечения и общения друзей, незачем дезертировать и становиться <span className={styles.highlight}>предателем.</span>
              </li>
            </ol>
          </div>
          
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <span className={styles.cardIcon}>❓</span>
              За что можно попасть в ЧСО
            </h3>
              <ol className={styles.list}>
                <li>⚪ Негативное высказывание об Ордене;</li>
                <li>⚪ Распространение и слив информации об Ордене;</li>
                <li>⚪ Неадекватное поведение;</li>
                <li>⚪ «Двойную жизнь» и дезертирство; </li>
                <li>⚪ Несоблюдение этикета и субординации;</li>
                <li>⚪ Пропаганду запрещенных организаций на территории РФ</li>
              </ol>
          </div>

          
        </div>

      </div>
    </section>
  );
};

export default BLO;