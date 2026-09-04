import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Etiquette from './components/Etiquette/Etiquette';
import Religions from './components/Religions/Religions';
import Hierarchy from './components/Hierarchy/Hierarchy';
import Ranks from './components/Ranks/Ranks';
import Awards from './components/Awards/Awards';
import Members from './components/Members/Members';
import Minecraft from './components/Minecraft/Minecraft';
import BLO from './components/BLO/BLO';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Etiquette />
        <Ranks />
        <Hierarchy />
        <Religions />
        <Awards />
        {/* <Members /> */}
        {/* <Minecraft /> */}
        <BLO />
        <Footer />
      </main>
    </div>
  );
};

export default App;