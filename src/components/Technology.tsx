import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dna, Cpu, Database } from 'lucide-react';

export default function Technology() : React.JSX.Element {
  const [activeTechTab, setActiveTechTab] = useState(0);

  const techTabs = [
    { title: "Molecular Synthesis", icon: <Dna className="w-6 h-6 text-emerald-400" />, desc: "Programmable nano-architectures engineered to navigate intracellular environments.", spec: "Precision: 99.8% | Bioreactor Native Scaling" },
    { title: "Neural Path AI", icon: <Cpu className="w-6 h-6 text-cyan-400" />, desc: "Predictive structural models tracing dynamic live-cell mutation spaces.", spec: "Throughput: 4.2B calculations/sec | High-Fidelity Target" },
    { title: "Spatial Multi-Omics", icon: <Database className="w-6 h-6 text-purple-400" />, desc: "Volumetric micro-scanning sequences tracking precise drug delivery pathways.", spec: "Resolution: Single-cell absolute | Robotic Tissue Extraction" }
  ];

  return (
    <section id="technology" className="max-w-7xl mx-auto px-6 py-24 bg-gray-900/10 rounded-3xl border border-gray-900/40 relative overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">The Multi-Scale Engine</h2>
        <p className="text-gray-400 text-sm">Interact with our architectural sequence layers optimized to secure deep molecular distribution feedback.</p>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-4 flex flex-col gap-3">
          {techTabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTechTab(idx)}
              className={`w-full p-5 rounded-2xl text-left border flex items-center gap-4 transition-all ${
                activeTechTab === idx ? 'bg-gray-900 border-gray-800 text-white shadow-lg' : 'bg-transparent border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              <div className={`p-2.5 rounded-xl ${activeTechTab === idx ? 'bg-gray-950' : 'bg-gray-900/40'}`}>
                {tab.icon}
              </div>
              <h3 className="font-semibold text-sm md:text-base">{tab.title}</h3>
            </button>
          ))}
        </div>

        <div className="md:col-span-8 bg-gray-900/40 border border-gray-800 rounded-3xl p-8 min-h-[260px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTechTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">Active Parameter Set 0{activeTechTab + 1}</span>
              <h3 className="text-2xl font-bold text-white mb-4">{techTabs[activeTechTab].title}</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-6">{techTabs[activeTechTab].desc}</p>
            </motion.div>
          </AnimatePresence>

          <div className="pt-6 border-t border-gray-800/40 flex flex-wrap items-center justify-between text-xs font-mono text-gray-500 gap-4">
            <span>{techTabs[activeTechTab].spec}</span>
            <span className="text-emerald-400 flex items-center gap-1.5">Systems Functional <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" /></span>
          </div>
        </div>
      </div>
    </section>
  );
}