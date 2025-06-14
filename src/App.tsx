import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Philosophy from './components/Philosophy/Philosophy';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Process from './components/Process/Process';
import Team from './components/Team/Team';
import Quiz from './components/Quiz/Quiz';
import Blog from './components/Blog/Blog';
import Consultation from './components/Consultation/Consultation';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Navigation />
      <Hero />
      <Philosophy />
      <Services />
      <Portfolio />
      <Process />
      <Team />
      <Quiz />
      <Blog />
      <Consultation />
      <Footer />
    </div>
  );
}

export default App;