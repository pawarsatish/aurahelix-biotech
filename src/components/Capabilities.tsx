import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Capabilities() : React.JSX.Element {
  const cards = [
    { type: "Nucleic Acids", title: "Programmable mRNA Arrays", text: "Sequence structural designs targeting tailored expression boundaries while suppressing standard inflammatory signatures." },
    { type: "Proteins & Cells", title: "Bispecific Modality Envelopes", text: "Directing distinct surface cell interactions to map tumor sites without incurring typical systemic degradation risks." },
    { type: "Advanced Delivery", title: "Lipid Vector Configurations", text: "Engineering protective structural vector casings built to ensure prolonged circulatory life." }
  ];

  return (
    <section id="capabilities" className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Therapeutic Capabilities</h2>
          <p className="text-gray-400 max-w-lg text-sm">We scale rigorous validation arrays natively designed to support high-impact bio-molecular engineering.</p>
        </div>
        <a href="#cta" className="text-sm font-semibold text-emerald-400 flex items-center gap-1 group hover:text-emerald-300 transition-colors">
          Request Platform DataSheets <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((item, index) => (
          <div key={index} className="p-8 rounded-3xl bg-gradient-to-b from-gray-900/40 to-gray-950 border border-gray-900 hover:border-gray-800/80 transition-all group">
            <span className="text-xs font-mono text-gray-500 tracking-wider block mb-4 uppercase">{item.type}</span>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}