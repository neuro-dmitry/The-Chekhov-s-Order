import React from 'react';
import styles from './Hierarchy.module.css';

const Hierarchy = () => {
  const levels = [
    { step: -1, 
      title: 'Фотеев (Дохляк)', 
      desc: 'Наркотики', 
      desc2: 'Че в его никченной жизни произошло, что он уже нюхает, хз, но обладатель наркоты хуже подсоса', 
      icon: '💀' 
    },
    { step: 0, 
      title: 'Рекрут (Подсос)', 
      desc: 'Подика нет', 
      desc2: 'Эту ступень занимают дебилы, которые сосут больше месяца',
      icon: '🫁' 
    },
    { step: 1, 
      title: 'Рядовой (Натурал)', 
      desc: 'Дешевые ашки (до 3к тяг), чарики, хросы 3 и ниже.', 
      desc2: 'Ими пользуются низшие сословия туалета — натуралы',
      icon: '💨' 
    },
    { step: 2, 
      title: 'Прапор (Долбоёб)', 
      desc: 'Хрос 4, ватрушка, пасито мини, ашки от ноу неймов.', 
      desc2: 'Обладатели этих подиков выебываются больше всего и гонят на подики классом выше, ведь они настоящие долбоёбы',
      icon: '😤' 
    },
    { step: 'c1', 
      title: 'Старший прапор (Губошлеп)', 
      desc: 'Снюс, луп', 
      desc2: 'Сделал себе накачку губ за 400 рублей, ебать четко, правда блюет много, ну пох',
      icon: '💋' 
    },
    { step: 3, 
      title: 'Лейтенант (Бисексуал)', 
      desc: 'Хорошие маломощные подики до 30 ватт', 
      desc2: 'Обладатели этих подиков уже имеют право залетать в туалет и раздавать (или принимать) в жопу, но они пока ещё общаются с девочками',
      icon: '⚡' 
    },
    { step: 'c2', 
      title: 'Стралей (Уголек)', 
      desc: 'Ява, камель, честер и прочие сиги', 
      desc2: 'Казалось, он подсос, но как только калитка школы за спиной, его пачка мгновенно кончается.',
      icon: '🔥' 
    },
    { step: 4, 
      title: 'Капитан (Презик)', 
      desc: 'Ашки от проверенных брендов от 15к тяг',
      desc2: 'Это верх иерархии у обладателей ашек, они меняют свои девайсы как презики, ведь их одноразки сосут чаще, чем хросы', 
      icon: '💪' 
    },
    { step: 5, 
      title: 'Майор (Гей)', 
      desc: 'Среднемощные подики до 50 ватт', 
      desc2: 'Обладатели данных подиков являются замами смотрящих по хате, у них сосут также много как их бывшая, почему бывшая, да потому, что в хате чалятся настоящие геи',
      icon: '🌈' 
    },
    { step: 'c3', 
      title: 'Подполковник (Пепельница)', 
      desc: 'Дорогие сиги: чапа, мальборо аромо, винстон', 
      desc2: 'Пользуются аромой своих сиг как духами, подсосов чутка меньше, чем у угольков, потому что ебать сиги дорогие, идите нахуй',
      icon: '🚬' 
    },
    { step: 6, 
      title: 'Полковник (Дилдочет)', 
      desc: 'Мощные подмоды до 100 ватт', 
      desc2: 'Это элита туалета, надежда на утренний вьеб для долбоебов и бисексуалов. Эти красавчики считают количество подсосов так же, как *** своих ёбырей',
      icon: '💥' 
    },
    { step: 7, 
      title: 'Генерал (Смотрящий)', 
      desc: 'Боксмоды 100+ ватт', 
      desc2: 'Ходят слухи, что обладатели боксов имеют маленкий хуй, вот и выебываются, но это пиздеж (не точно). если генерал появляется в хате, то даже дилдо четы прикрывают еблеты и сосут его боксмод и подыхают с полу-тяги',
      icon: '👑' 
    },
    { step: 8, 
      title: 'Маршал (C4)', 
      desc: 'Заебатые мехмоды', 
      desc2: 'Эти челы, как ходячие С4, но их эстетику нужно просто понять',
      icon: '💣' 
    },
  ];

  const getColorClass = (step) => {
    const colors = {
      '-1': styles.red,
      '0': styles.gray,
      '1': styles.stone,
      '2': styles.amber,
      c1: styles.pink,
      '3': styles.blue,
      c2: styles.orange,
      '4': styles.green,
      '5': styles.purple,
      c3: styles.indigo,
      '6': styles.gold,
      '7': styles.red,
      '8': styles.dark,
    };
    return colors[step] || styles.stone;
  };

  return (
    <section id="hierarchy" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.icon}>📈</span>
          <h2 className={styles.sectionTitle}>Иерархия подиков</h2>
          <span className={styles.sectionBadge}>Ступени</span>
        </div>

        <div className={styles.grid}>
          {levels.map((level) => (
            <div key={level.step} className={`${styles.card} ${getColorClass(level.step)}`}>
              <div className={styles.cardHeader}>
                <div>
                  <span className={styles.cardStep}>Ступень {level.step}</span>
                  <h4 className={styles.cardTitle}>{level.title}</h4>
                </div>
                <span className={styles.cardIcon}>{level.icon}</span>
              </div>
              <p className={styles.cardDesc}>{level.desc}</p>
              <p className={styles.cardDesc}>{level.desc2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hierarchy;