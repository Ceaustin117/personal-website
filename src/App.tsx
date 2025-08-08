import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Demos from './sections/Demos';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Demos />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
