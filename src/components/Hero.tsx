export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Container for Ken Burns effect */}
      <div 
        className="absolute inset-0 z-0 bg-navy-dark"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Placeholder for actual image */}
        <div className="w-full h-full bg-cover bg-center object-cover animate-pulse opacity-50 
             bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop')]" 
        />
      </div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Premium Care.<br/>
          <span className="text-gold">Perfect Smiles.</span>
        </h1>
        <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-2xl mx-auto text-balance">
          Experience world-class dentistry in a calming, sophisticated environment.
        </p>

        {/* Glassmorphism Quick Contact Card */}
        <div className="glass mx-auto max-w-3xl rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-800">
          <div className="flex flex-col items-center sm:items-start text-left">
            <span className="text-sm uppercase tracking-wider font-bold text-navy mb-1">Call Us Directly</span>
            <a href="tel:+15551234567" className="text-2xl font-bold hover:text-gold transition-colors">(555) 123-4567</a>
          </div>
          <div className="hidden sm:block w-px h-12 bg-slate-200" />
          <div className="flex flex-col items-center sm:items-start text-left">
            <span className="text-sm uppercase tracking-wider font-bold text-navy mb-1">Location</span>
            <span className="text-lg font-medium">123 Wellness Way, City</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-slate-200" />
          <button className="bg-navy hover:bg-navy-dark text-white px-8 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg w-full sm:w-auto">
            Request Visit
          </button>
        </div>
      </div>
    </section>
  );
}
