

export default function CTA() {
  return (
    <section id="cta" className="max-w-4xl mx-auto px-6 py-24 text-center">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
        Accelerate Structural Discovery Targets
      </h2>
      <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
        Partner alongside AuraHelix to secure unified whole-body molecular tracking profiles and clear computational synthesis gridlocks.
      </p>
      
      <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 items-center mb-16">
        <input 
          type="email" 
          placeholder="Institutional email address" 
          required
          className="w-full px-5 py-3.5 rounded-full bg-gray-900 border border-gray-800 focus:border-emerald-500 focus:outline-none text-white placeholder-gray-500 text-sm transition-colors"
        />
        <button 
          type="submit" 
          className="w-full sm:w-auto shrink-0 px-8 py-3.5 rounded-full bg-white hover:bg-gray-100 text-gray-950 font-bold text-sm transition-colors"
        >
          Initiate Pipeline
        </button>
      </form>

      <footer className="border-t border-gray-900 pt-12 text-gray-600 text-xs flex flex-col sm:flex-row justify-between items-center gap-4 text-left">
        <p>© 2026 AuraHelix Inc. High-fidelity structural sequencing infrastructure. All rights reserved.</p>
        <div className="flex gap-6 text-gray-400">
          <a href="#" className="hover:text-emerald-400">Terms of Modality</a>
          <a href="#" className="hover:text-emerald-400">Bioinformatics Privacy</a>
        </div>
      </footer>
    </section>
  );
}
