import React, { useState, useEffect } from 'react';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Collection from './components/Collection';
import Craft from './components/Craft';
import Architect from './components/Architect';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh');
  const [loading, setLoading] = useState(true);

  // Lock scroll when loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 selection:bg-zinc-700 selection:text-white">
      {/* Loading Screen Overlay */}
      <LoadingScreen onComplete={() => setLoading(false)} />

      {/* 
        Pass setLang to Navbar to integrate language switching inside the sidebar.
      */}
      <Navbar lang={lang} setLang={setLang} />
      
      {/* 
        Main Layout Adjustment: 
        Added 'md:pl-24' (approx 96px) to create a dedicated gutter for the content.
        This ensures the fixed Navbar never overlaps with the text on desktop screens.
      */}
      <main className="md:pl-24 transition-all duration-500 ease-out w-full">
        <Hero lang={lang} />
        <Philosophy lang={lang} />
        <Collection lang={lang} />
        <Craft lang={lang} />
        <Architect lang={lang} />
        <Footer lang={lang} />
      </main>
      
    </div>
  );
};

export default App;