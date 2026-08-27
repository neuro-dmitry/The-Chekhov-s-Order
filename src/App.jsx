import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Etiquette from './components/Etiquette';
import Religions from './components/Religions';
import Hierarchy from './components/Hierarchy';
import Ranks from './components/Ranks';
import Awards from './components/Awards';
import Members from './components/Members';
import Minecraft from './components/Minecraft';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Etiquette />
        <Religions />
        <Hierarchy />
        <Ranks />
        <Awards />
        <Members />
        <Minecraft />
        <Footer />
      </main>
    </div>
  );
};

export default App;