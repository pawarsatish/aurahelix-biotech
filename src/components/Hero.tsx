import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Dna, ChevronRight } from 'lucide-react';

export default function Hero() : React.JSX.Element {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 text-center flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-8"
      >
        <Activity className="w-3 h-3 animate-pulse" /> Next-Generation Intracellular Targeting
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.1] mb-8"
      >
        Mapping Molecular Systems with <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">Computational Rigour</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed mb-12"
      >
        We develop multi-scale bio-digital interfaces engineered to guide targeted vectors down to absolute single-cell accuracy, bypassing legacy biological restrictions.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <a href="#technology" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 hover:opacity-95 text-gray-950 font-bold shadow-lg flex items-center justify-center gap-2 group transition-all">
          Explore Engine <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a href="#innovation" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gray-950 border border-gray-800 hover:border-gray-700 text-white font-medium transition-all">
          Read Scientific Methodology
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20 w-full max-w-4xl mx-auto aspect-[2.4/1] rounded-3xl bg-gradient-to-b from-gray-900/60 to-gray-950 border border-gray-800 p-6 flex items-center justify-center relative overflow-hidden shadow-2xl animate-float"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-950/20 via-transparent to-transparent" />
        <div className="flex gap-4 items-center text-left opacity-75">
          <Dna className="w-12 h-12 text-emerald-400/40 animate-spin [animation-duration:20s]" />
          <div>
            <h4 className="text-gray-500 text-xs font-mono uppercase tracking-wider">Dynamic Vector Simulator</h4>
            <p className="text-emerald-400 font-mono text-xs">Active Mapping Coordinate Array v4.0</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}