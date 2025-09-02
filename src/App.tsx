import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './sections/Hero';
import { Chat } from './components/Chat';
import About from './sections/About';
import Demos from './sections/Demos';
import { Dashboard } from './components/Dashboard';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <section className="chat-section">
          <Chat />
        </section>
        <Dashboard />
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
