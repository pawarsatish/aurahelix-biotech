
import { motion } from 'framer-motion';
import { Compass, ShieldCheck, Layers } from 'lucide-react';

export default function Innovation() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <section id="innovation" className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-900/40">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
            <Compass className="w-5 h-5" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Redefining Target Engagement Vectors via Clear Biological Validation
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Legacy discovery structures depend heavily on surrogate indicators. Our unique bio-digital synthesis platform builds complete, transparent live models to ensure clear visibility into molecular distribution properties.
          </p>
          <p className="text-gray-400 leading-relaxed">
            By uniting computational data matrices with structural multi-omics, we verify precise target binding without relying on standard speculative projections.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid sm:grid-cols-2 gap-6">
          {[
            { title: "Empirical Precision", desc: "No proxy variables. We rely directly on native physical cellular responses.", icon: <ShieldCheck className="text-emerald-400" /> },
            { title: "Accelerated Timelines", desc: "Automated structural screening steps eliminate predictive development bottlenecks.", icon: <Layers className="text-cyan-400" /> },
          ].map((card, i) => (
            <motion.div key={i} variants={fadeUp} className="p-6 rounded-2xl bg-gray-900/30 border border-gray-900 hover:border-gray-800 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-gray-950 border border-gray-900 flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}