import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dna, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = ['Innovation', 'Technology', 'Capabilities', 'Impact'];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-950/70 border-b border-gray-900/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 bg-gradient-to-tr from-emerald-500 to-cyan-400 rounded-xl shadow-md">
            <Dna className="w-5 h-5 text-gray-950 transform group-hover:rotate-180 transition-transform duration-700" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            Aura<span className="text-emerald-400">Helix</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          {menuItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-emerald-400 transition-colors duration-200">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2 rounded-full border border-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-900 transition-all">
            Portal Log
          </button>
          <a href="#cta" className="px-5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-gray-950 text-sm font-semibold shadow-md transition-all">
            Partner Architecture
          </a>
        </div>

        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-50 bg-gray-950 p-6 flex flex-col justify-between md:hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-bold text-xl text-white">AuraHelix</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-gray-400"><X className="w-6 h-6" /></button>
              </div>
              <nav className="flex flex-col gap-6 text-xl font-medium">
                {menuItems.map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-emerald-400">
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-3">
              <button className="w-full py-3 rounded-xl border border-gray-800 font-medium text-gray-300">Portal Log</button>
              <a href="#cta" onClick={() => setMobileMenuOpen(false)} className="w-full py-3 rounded-xl bg-emerald-500 text-center font-semibold text-gray-950">Partner Architecture</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}