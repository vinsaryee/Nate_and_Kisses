import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- STICKY GLASSMORPHIC NAVBAR ---
function Navbar() {
  return (
    <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-900 text-slate-100 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter bg-gradient-to-r from-pink-400 via-rose-400 to-purple-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity">
          Nate & Kisses
        </Link>
        <div className="flex gap-8 text-sm font-semibold tracking-wide uppercase">
          <Link to="/" className="hover:text-pink-400 text-slate-300 transition-colors duration-200">Home</Link>
          <Link to="/services" className="hover:text-pink-400 text-slate-300 transition-colors duration-200">Services</Link>
          <Link to="/about" className="hover:text-pink-400 text-slate-300 transition-colors duration-200">Our Story</Link>
        </div>
      </div>
    </nav>
  );
}

// --- HOME PAGE / LANDING PAGE COMPONENT ---
function Home() {
  const [selectedService, setSelectedService] = useState('all');

  const portfolioItems = [
    { type: 'backdrops', title: 'Geometric Panel Arch', desc: 'Layered matte wood backdrops with integrated custom neon signage.', img: 'https://images.unsplash.com/photo-1507504038482-762143833857?auto=format&fit=crop&w=600&q=80' },
    { type: 'balloons', title: 'Metallic Organic Garland', desc: 'Premium chrome gold, rose, and black double-stuffed balloon cascade.', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80' },
    { type: 'venue', title: 'VIP Lounge Curation', desc: 'Complete floor-to-ceiling venue design featuring custom structural builds.', img: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=600&q=80' },
    { type: 'backdrops', title: 'Shimmer Sequin Experience', desc: 'High-gloss active reflective wall panels optimized for photography.', img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80' },
  ];

  const filteredItems = selectedService === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.type === selectedService);

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. GLAMOROUS DARK HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-20 px-6">
        {/* Colorful glowing ambient backdrops */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-400 border border-pink-500/20 tracking-wide uppercase">
            ✨ Premium Event Production Studio
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none">
            We Design Atmosphere.{' '}
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-500 bg-clip-text text-transparent">
              You Make Memories.
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Welcome to <strong className="text-slate-200">Nate & Kisses</strong>. We specialize in building handcrafted custom backdrops, stunning venue designs, and ultra-premium organic balloon styling tailored for elite celebrations.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#booking-calculator"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:opacity-95 active:scale-98 text-white font-bold rounded-2xl shadow-xl shadow-pink-500/20 transition-all duration-200 text-lg text-center"
            >
              Estimate Your Production
            </a>
            <Link 
              to="/services" 
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold rounded-2xl transition-all text-center text-lg"
            >
              Explore Our Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC WORK SHOWCASE WITH FILTERS */}
      <section className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-slate-900 pb-6 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Signature Installations</h2>
            <p className="text-sm text-slate-400">Real designs built on-site by the Nate & Kisses crew.</p>
          </div>
          
          {/* Custom Filter Controls */}
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wider">
            {['all', 'backdrops', 'balloons', 'venue'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedService(tab)}
                className={`px-4 py-2 rounded-xl border transition-all duration-200 ${
                  selectedService === tab 
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 border-transparent text-white shadow-md shadow-pink-500/10' 
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-900 hover:border-slate-800/60 transition-all duration-300 group shadow-xl">
              <div className="h-48 bg-slate-950 relative overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[10px] font-black tracking-widest text-pink-400 uppercase bg-pink-500/10 px-2 py-0.5 rounded-md border border-pink-500/10">{item.type}</span>
                <h3 className="font-bold text-slate-200 text-lg tracking-tight">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EXPERIENCE CALCULATOR PANEL */}
      <section id="booking-calculator" className="max-w-3xl mx-auto px-6">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-900 rounded-3xl p-8 shadow-2xl space-y-6 relative">
          <div className="absolute top-0 right-12 -translate-y-1/2 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-extrabold text-white tracking-tight">Event Curation Budget Planner</h2>
            <p className="text-sm text-slate-400">Configure your parameters to calculate a raw baseline estimate for your project.</p>
          </div>
          <InteractiveEstimator />
        </div>
      </section>

    </div>
  );
}

// --- CURATED SERVICES SUBPAGE ---
function Services() {
  return (
    <div className="py-20 px-6 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-extrabold text-white tracking-tight">Our Production Ecosystem</h2>
        <p className="text-slate-400 max-w-xl mx-auto">We engineer structures and styling elements specifically customized for high-impact visual presence.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 pt-4">
        <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-900 space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 text-xl font-bold">🔨</div>
          <h3 className="text-xl font-bold text-slate-200">Bespoke Backdrops</h3>
          <p className="text-sm text-slate-400 leading-relaxed">Custom wood arch fabrication, texture panelling, name cutout decals, and heavy-duty shimmer wall systems built from scratch.</p>
        </div>

        <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-900 space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-xl font-bold">🎈</div>
          <h3 className="text-xl font-bold text-slate-200">Balloon Architecture</h3>
          <p className="text-sm text-slate-400 leading-relaxed">Precision-engineered organic garlands utilizing premium, double-stuffed custom matte and metallic palettes for long-lasting volume.</p>
        </div>

        <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-900 space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-400 text-xl font-bold">👑</div>
          <h3 className="text-xl font-bold text-slate-200">Venue Curation</h3>
          <p className="text-sm text-slate-400 leading-relaxed">Comprehensive spatial configuration, stylized sweet tables, uplighting networks, and thematic styling details across your entire room layout.</p>
        </div>
      </div>
    </div>
  );
}

// --- PROFILE / ABOUT SUBPAGE ---
function About() {
  return (
    <div className="py-20 px-6 max-w-3xl mx-auto space-y-6 text-center">
      <h2 className="text-4xl font-extrabold text-white tracking-tight">Behind the Scenery</h2>
      <p className="text-slate-400 text-lg leading-relaxed">
        At Nate & Kisses, we reject cookie-cutter party setups. We view venues as empty blank canvases, applying custom scale, texturing, dynamic typography, and high-impact organic balloon lines to give every event an individual signature identity.
      </p>
    </div>
  );
}

// --- WIDGET LOGIC ---
function InteractiveEstimator() {
  const [backdropType, setBackdropType] = useState('standard');
  const [hasBalloons, setHasBalloons] = useState(true);
  const [venueScope, setVenueScope] = useState('none');

  const runCalculation = () => {
    let cost = 0;
    if (backdropType === 'standard') cost += 350;
    if (backdropType === 'premium') cost += 650;
    if (backdropType === 'luxury') cost += 1000;
    
    if (hasBalloons) cost += 300;
    
    if (venueScope === 'partial') cost += 450;
    if (venueScope === 'complete') cost += 950;
    
    return { min: cost, max: Math.round(cost * 1.25) };
  };

  const totals = runCalculation();

  return (
    <div className="space-y-6 text-slate-300">
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">1. Select Backdrop Profile</label>
        <select 
          value={backdropType} 
          onChange={(e) => setBackdropType(e.target.value)}
          className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-sm font-medium text-slate-200 focus:outline-none focus:border-pink-500"
        >
          <option value="none">No Backdrop Element</option>
          <option value="standard">Standard Single Board Setup (+ Single Custom Decal)</option>
          <option value="premium">Multi-Layered 3D Panels & Structural Arches</option>
          <option value="luxury">Grand Shimmer / Heavy Flower Wall Installation</option>
        </select>
      </div>

      <div className="flex items-center justify-between p-4 bg-slate-950 rounded-xl border border-slate-900">
        <div className="space-y-0.5">
          <label className="text-sm font-bold text-slate-200">Organic Balloon Architectures</label>
          <p className="text-xs text-slate-400">Multi-diameter luxury balloon clusters integrated seamlessly onto framing structures.</p>
        </div>
        <input 
          type="checkbox" 
          checked={hasBalloons}
          onChange={(e) => setHasBalloons(e.target.checked)}
          className="w-5 h-5 accent-pink-500 cursor-pointer"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">2. Venue Curation Scale</label>
        <div className="grid grid-cols-3 gap-3 text-center text-xs font-bold tracking-wide">
          {['none', 'partial', 'complete'].map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setVenueScope(level)}
              className={`p-3.5 border rounded-xl capitalize transition-all duration-200 ${
                venueScope === level 
                  ? 'bg-pink-500/10 border-pink-500 text-pink-400' 
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              {level === 'none' ? 'Focal Point Only' : `${level} styling`}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-2xl border border-slate-800 text-center space-y-1">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Project Baseline Valuation</p>
        <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400">
          ${totals.min} – ${totals.max}
        </p>
        <p className="text-[10px] text-slate-500 pt-2">Rough estimate framework for custom site planning options.</p>
      </div>
    </div>
  );
}

// --- APP CORE CONTAINER ---
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-pink-500/30 selection:text-pink-300 antialiased font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}