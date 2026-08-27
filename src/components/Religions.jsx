import React from 'react';
import styles from './Religions.module.css';

const Religions = () => {
  return (
    <section id="religions" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.icon}>⛪</span>
          <h2 className={styles.sectionTitle}>Религии Ордена</h2>
          <span className={styles.sectionBadge}>Две веры</span>
        </div>
        <p className={styles.description}>
          Каждый член может выбирать и менять религию по своему желанию.
          Статус и права не меняются — это отражение характера и просто завоз.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>👑</span>
              <h3 className={styles.cardTitle}>Кониянство</h3>
            </div>
            <p className={styles.cardDesc}>
              Активные и смешные участники, любят подъебывать друзей, но при этом очень их уважают.
            </p>
            <div className={styles.prayer}>
              <p className={styles.prayerLabel}>Молитва Коню:</p>
              <p className={styles.prayerText}>
                О, Конь мой светлый<br />
                Да выйди ты со мной в поле<br />
                О, дай мне.<br />
                О, прости мои грехи людские<br />
                О, восхвали за воровские.<br />
                Молю, не сри так много, как букв «О» в этом намазе<br />
                Да вознеси ты свою гриву над нашими головами да укрой от угроз мирских.
              </p>
            </div>
            <button 
              className={styles.acceptBtn}
              onClick={() => alert("Свяжитесь с магистром ордена для уточнения этого вопроса")}
            >ПРИНЯТЬ ВЕРУ</button>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>🪶</span>
              <h3 className={styles.cardTitle}>Чеховианство</h3>
            </div>
            <p className={styles.cardDesc}>
              Рядовые участники, могут принимать участие в завозах, но не любят их придумывать.
              Сдержанны, но приятны в общении.
            </p>
            <div className={styles.prayer}>
              <p className={styles.prayerLabel}>Молитва Чехову:</p>
              <p className={styles.prayerText}>
                Чехов, храни z<br />
                Сохрани z<br />
                Прости душу мою z<br />
                И быт наш насущный вознеси<br />
                На бравую вершину z<br />
                Спаси и сохрани z<br />
                И z во веки веков
              </p>
            </div>
            <button 
              className={styles.acceptBtn}
              onClick={() => alert("Свяжитесь с магистром ордена для уточнения этого вопроса")}
            >ПРИНЯТЬ ВЕРУ</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Religions;