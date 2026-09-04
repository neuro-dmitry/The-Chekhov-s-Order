import React, { useState } from 'react';
import styles from './Members.module.css';

import { members } from '/src/data.json';

const Members = () => {
  const [showAll, setShowAll] = useState(false);

  // Порядок званий для сортировки
  const rankOrder = {
    'Великий магистр': 0,
    'Магистр': 1,
    'Рыцарь': 2,
    'Шланг': 3,
  };

  // Сортировка по званиям
  const sortedMembers = [...members].sort((a, b) => {
    return rankOrder[a.rank] - rankOrder[b.rank];
  });

  // Отображаемые участники (первые 12 или все)
  const displayedMembers = showAll ? sortedMembers : sortedMembers.slice(0, 12);

  // Подсчет ролей
  const rankCount = sortedMembers.reduce((acc, member) => {
    acc[member.rank] = (acc[member.rank] || 0) + 1;
    return acc;
  }, {});

  const getRankClass = (rank) => {
    const classes = {
      'Великий магистр': styles.rankGrandMaster,
      'Магистр': styles.rankMaster,
      'Рыцарь': styles.rankKnight,
      'Шланг': styles.rankShlang,
    };
    return classes[rank] || styles.rankDefault;
  };

  const getReligionIcon = (religion) => {
    return religion === 'Кониянство' ? '👑' : '🪶';
  };

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="members" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.icon}>⚔️</span>
          <h2 className={styles.sectionTitle}>Братство Ордена</h2>
          <span className={styles.sectionBadge}>Личный состав</span>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>{sortedMembers.length}</span>
            <span className={styles.statLabel}>Всего рыцарей</span>
          </div>
          <div className={styles.line}/>
          {Object.entries(rankCount).map(([rank, count]) => (
            <div key={rank} className={styles.stat}>
              <span className={styles.statValue}>{count}</span>
              <span className={styles.statLabel}>{rank}</span>
            </div>
          ))}
        </div>

        <div className={styles.membersGrid}>
          {displayedMembers.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              <div className={styles.memberAvatar}>
                <span className={styles.memberInitial}>{member.name[0]}</span>
              </div>
              <div className={styles.memberInfo}>
                <h4 className={styles.memberName}>{member.name}</h4>
                <span className={`${styles.memberRank} ${getRankClass(member.rank)}`}>
                  {member.rank}
                </span>
                <div className={styles.memberReligion}>
                  <span className={styles.religionIcon}>{getReligionIcon(member.religion)}</span>
                  <span className={styles.religionName}>{member.religion}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedMembers.length > 12 && (
          <div className={styles.showMoreWrapper}>
            <button className={styles.showMoreBtn} onClick={handleToggle}>
              {showAll ? 'Показать меньше' : `Показать всех (${sortedMembers.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Members;