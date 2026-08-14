import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Innovation from './components/Innovation';
import Technology from './components/Technology';
import Capabilities from './components/Capabilities';
import Impact from './components/Impact';
import CTA from './components/CTA';

export default function App() : React.JSX.Element {
  return (
    <div className="min-h-screen bg-gray-950 font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* STATIC BIOLUMINESCENT AMBIENT CANVAS */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-500/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-600/10 blur-[140px] animate-pulse-slow" />
      </div>

      {/* COMPONENT INTERACTION TRACKS */}
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Innovation />
        <Technology />
        <Capabilities />
        <Impact />
        <CTA />
      </main>
      
    </div>
  );
}
