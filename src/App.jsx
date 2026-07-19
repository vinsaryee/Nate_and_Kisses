import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- STICKY PLAYFUL NAVBAR ---
function Navbar() {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-sky-100 text-slate-800 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold tracking-tighter text-sky-400 group flex items-center gap-1">
          Nate & <span className="text-pink-400 group-hover:scale-110 transition-transform duration-300">Kisses</span> 
          <span className="text-2xl">🍬</span>
        </Link>
        <div className="flex gap-8 text-sm font-bold tracking-wide uppercase text-slate-600">
          <Link to="/" className="hover:text-pink-400 transition-colors duration-200">Home</Link>
          <Link to="/services" className="hover:text-pink-400 transition-colors duration-200">Services</Link>
          <Link to="/about" className="hover:text-pink-400 transition-colors duration-200">About Us</Link>
        </div>
      </div>
    </nav>
  );
}

// --- HOME PAGE COMPONENT ---
// --- HOME PAGE COMPONENT ---
function Home() {
  const [selectedService, setSelectedService] = useState('All');
  // State to track the currently active image object for the lightbox
  const [lightboxImage, setLightboxImage] = useState(null);

  const galleryItems = [
    { type: 'Backdrops', title: 'Butterfly Theme with ad ons bears', desc: 'Pink butterfly theme with additional bear decorations.', img: '/backdrop/butterfly.jpg' },
    { type: 'Candy Corner', title: 'Candy Buffet', desc: 'Curated tablescapes featuring premium sweet treats in your table.', img: '/candy_corner/candy_corner_1.jpg' },
    { type: 'Balloons', title: 'Decoration, Archs and centerpieces', desc: 'Balloon decoration options for your special event.', img: '/balloons/centerpiece1.jpg' },
    { type: 'Other Services', title: 'Clowns for Kiddie Parties', desc: 'Magicians, comedians, and other entertainers for your event.', img: '/other_services/clown1.jpg' },
    { type: 'Backdrops', title: 'Dinosaur Theme', desc: 'Premium dinosaur-themed backdrop for your special occasion.', img: '/backdrop/dinosaur.jpg' },
    { type: 'Backdrops', title: 'Disney Princess Theme', desc: 'Premium Disney princess-themed backdrop for your special occasion.', img: '/backdrop/disney.jpg' },
    { type: 'Backdrops', title: 'Unicorn Theme', desc: 'Premium unicorn-themed backdrop for your special occasion.', img: '/backdrop/unicorn.jpg' },
    { type: 'Backdrops', title: 'Single Panel Custom Theme', desc: 'Premium custom-themed backdrop for your special occasion.', img: '/backdrop/single1.jpg' },
    { type: 'Other Services', title: 'Photobooth - Standee', desc: 'Photo booth with Dinosaur Layout for your special event.', img: '/other_services/photobooth1.jpg' },
    { type: 'Other Services', title: 'Photobooth - Magnetic back', desc: 'Photo booth strip style for your special event.', img: '/other_services/photobooth2.jpg' },
    { type: 'Other Services', title: 'Photobooth - Customizable Layout', desc: 'Photo booth services for your special event.', img: '/other_services/photobooth3.jpg' },
    { type: 'Other Services', title: 'Photographer', desc: 'Professional photography services for your special event.', img: '/other_services/photography1.jpg' },
    { type: 'Balloons', title: 'Decoration, Archs and centerpieces', desc: 'Balloon decoration options for your special event.', img: '/balloons/arch1.jpg' },
    { type: 'Candy Corner', title: 'Barbie Theme', desc: 'Curated tablescapes featuring premium sweet treats in your table.', img: '/candy_corner/disney.jpg' },
  ];

  const filteredItems = selectedService === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === selectedService);

  return (
    <div className="space-y-24 pb-20 bg-pink-50/50">
      
      {/* 1. SWEET HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-20 px-6 text-center bg-white border-b border-pink-100">
        <div className="absolute top-10 left-10 w-24 h-24 bg-sky-100/70 rounded-full blur-xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-100/70 rounded-full blur-xl pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-600 border border-sky-200 tracking-wide uppercase">
            🍥 Candy Dessert Buffet + Styling 🍭
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-none">
            Sweetening Up Your{' '}
            <span className="text-pink-400">
              Big Day
            </span>
          </h1>
          
          <p className="text-slate-600 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Welcome to <strong className="text-sky-500">Nate & Kisses</strong>. We create handcrafted custom backdrops, complete venue designs, and whimsical balloon installations tailored for magical, sweet celebrations.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">

            <Link 
              to="/services" 
              className="w-full sm:w-auto px-8 py-4 bg-pink-400 hover:bg-pink-500 active:scale-98 text-white font-bold rounded-full shadow-lg shadow-pink-500/10 transition-all duration-200 text-lg text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC WORK SHOWCASE WITH FILTERS */}
      <section className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-baseline border-b-2 border-pink-100 pb-6 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Our Signature Sweetness</h2>
            <p className="text-sm text-slate-500">Real installations crafted by the Nate & Kisses crew.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider">
            {['All', 'Backdrops', 'Candy Corner', 'Balloons', 'Other Services'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedService(tab)}
                className={`px-4 py-2.5 rounded-full border-2 transition-all duration-200 ${
                  selectedService === tab 
                    ? 'bg-sky-400 border-sky-400 text-white shadow-md shadow-sky-500/10' 
                    : 'bg-white border-sky-100 text-sky-700 hover:border-sky-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => setLightboxImage(item)}
              className="bg-white rounded-3xl overflow-hidden border border-sky-100 hover:border-pink-200/60 transition-all duration-300 group shadow-lg shadow-sky-500/5 cursor-pointer"
            >
              <div className="h-52 bg-slate-100 relative overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                {/* Visual indicator overlay when hovering over the card */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="bg-white/90 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm backdrop-blur-sm">
                    View Photo 🔍
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[10px] font-extrabold tracking-widest text-pink-500 uppercase bg-pink-100 px-2 py-1 rounded-md border border-pink-200">{item.type}</span>
                <h3 className="font-bold text-slate-900 text-lg tracking-tight">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LIGHTBOX INTERACTIVE OVERLAY */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxImage(null)} // Closes if background is clicked
        >
          {/* Close button top right */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-light transition-colors bg-white/10 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm"
            onClick={() => setLightboxImage(null)}
          >
            ✕
          </button>

          {/* Lightbox Modal Content Box */}
          <div 
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/20 max-h-[90vh] md:max-h-[80vh]"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the content box
          >
            {/* Image side */}
            <div className="flex-1 bg-slate-900 flex items-center justify-center overflow-hidden min-h-[40vh] md:min-h-0">
              <img 
                src={lightboxImage.img} 
                alt={lightboxImage.title} 
                className="w-full h-full object-contain max-h-[50vh] md:max-h-[80vh]"
              />
            </div>

            {/* Content Sidebar / Bottom drawer */}
            <div className="w-full md:w-80 p-8 flex flex-col justify-center bg-white space-y-4">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-pink-500 uppercase bg-pink-100 px-2 py-1 rounded-md border border-pink-200">
                  {lightboxImage.type}
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                {lightboxImage.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {lightboxImage.desc}
              </p>
              <div className="pt-4 border-t border-slate-100">
                <button 
                  onClick={() => setLightboxImage(null)}
                  className="w-full py-3 bg-sky-400 hover:bg-sky-500 text-white font-bold text-sm rounded-full transition-colors"
                >
                  Back to Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}

// --- CURATED SERVICES SUBPAGE ---
function Services() {
  return (
    <div className="py-20 px-6 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Our Sweet Ecosystem</h2>
        <p className="text-slate-500 max-w-xl mx-auto">We engineer structures and styling elements specifically customized for magical party environments.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 pt-4">
        <div className="bg-white p-8 rounded-3xl border border-pink-100 space-y-4 shadow-xl shadow-pink-500/5">
          <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-500 text-2xl font-bold">🔨</div>
          <h3 className="text-xl font-bold text-slate-900">Custom Backdrops</h3>
          <p className="text-sm text-slate-600 leading-relaxed">Built mainly 1 to 3 panels with customized or prebuilt elements made to ensure your space is uniquely enchanting.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-sky-100 space-y-4 shadow-xl shadow-sky-500/5">
          <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-500 text-2xl font-bold">🎈</div>
          <h3 className="text-xl font-bold text-slate-900">Balloon Architecture</h3>
          <p className="text-sm text-slate-600 leading-relaxed">Crafted from premium materials, our balloon installations create stunning focal points that elevate any celebration.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-pink-100 space-y-4 shadow-xl shadow-pink-500/5">
          <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-500 text-2xl font-bold">🍭</div>
          <h3 className="text-xl font-bold text-slate-900">Venue Curation</h3>
          <p className="text-sm text-slate-600 leading-relaxed">Services we offer will surely elevate your event to a whole new level of enchantment.</p>
        </div>
      </div>
    </div>
  );
}

// --- PROFILE / ABOUT SUBPAGE ---
function About() {
  return (
    <div className="py-20 px-6 max-w-3xl mx-auto space-y-6 text-center">
      <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Sprinkled with Love</h2>
      <p className="text-slate-600 text-lg leading-relaxed">
        At Nate & Kisses, we believe every milestone should taste as good as it looks. We transform ordinary event spaces into immersive, whimsical environments by applying custom scale, playful textures, organic balloon lines, and of course, a touch of pure sweetness prioritizing your satisfaction above all.
      </p>
    </div>
  );
}

// --- WIDGET LOGIC ---
function InteractiveEstimator() {
  const [partyScale, setPartyScale] = useState('petite');
  const [hasSweetBar, setHasSweetBar] = useState(true);
  const [decorScope, setDecorScope] = useState('partial');

  const runCalculation = () => {
    let cost = 0;
    if (partyScale === 'petite') cost += 250;
    if (partyScale === 'petite') cost += 450;
    if (partyScale === 'classic') cost += 450;
    if (partyScale === 'grand') cost += 850;
    if (partyScale === 'petite') cost += 250;
    if (partyScale === 'classic') cost += 450;
    if (partyScale === 'grand') cost += 850;
    
    if (hasSweetBar) cost += 300;
    
    if (decorScope === 'complete') cost += 950;
    if (decorScope === 'petite') cost += 250;
    if (decorScope === 'classic') cost += 450;
    if (decorScope === 'grand') cost += 850;
    if (decorScope === 'none') cost += 0;
    if (decorScope === 'partial') cost += 450;
    if (decorScope === 'complete') cost += 950;
    
    return { min: cost, max: Math.round(cost * 1.25) };
  };

  const totals = runCalculation();

  return (
    <div className="space-y-6 text-slate-700">
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">1. Celebration Scale</label>
        <select 
          value={partyScale} 
          onChange={(e) => setPartyScale(e.target.value)}
          className="w-full p-4 rounded-full bg-pink-50/50 border-2 border-pink-100 text-sm font-bold text-slate-800 focus:outline-none focus:border-pink-300"
        >
          <option value="none">No Structural Elements</option>
          <option value="petite">Petite Bash (Single Backdrop)</option>
          <option value="classic">Classic Soirée (Backdrop + Donut Wall)</option>
          <option value="grand">Grand Gala (Full Scale structural build)</option>
        </select>
      </div>

      <div className="flex items-center justify-between p-5 bg-sky-50 rounded-2xl border border-sky-100">
        <div className="space-y-0.5">
          <label className="text-sm font-bold text-slate-900">Curated Candy & Treat Buffet</label>
          <p className="text-xs text-slate-600">Premium thematic treats, personalized favor bags, and table decor.</p>
        </div>
        <input 
          type="checkbox" 
          checked={hasSweetBar}
          onChange={(e) => setHasSweetBar(e.target.checked)}
          className="w-6 h-6 accent-pink-400 cursor-pointer"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">2. Venue Curation Scope</label>
        <div className="grid grid-cols-3 gap-3 text-center text-xs font-bold tracking-wide">
          {['none', 'partial', 'complete'].map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setDecorScope(level)}
              className={`p-4 border-2 rounded-full capitalize transition-all duration-200 ${
                decorScope === level 
                  ? 'bg-sky-400 border-sky-400 text-white shadow-md shadow-sky-500/10' 
                  : 'bg-white border-sky-100 text-sky-700 hover:border-sky-300'
              }`}
            >
              {level === 'none' ? 'Focal Only' : `${level} styling`}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-white rounded-3xl border-2 border-pink-100 text-center space-y-1 relative">
        <div className="absolute top-0 right-1/2 -translate-y-1/2 translate-x-1/2 w-16 h-16 bg-sky-100rounded-full blur-xl pointer-events-none" />
        
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 relative z-10">Baseline Party Valuation</p>
        <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-sky-400 relative z-10">
          ${totals.min} – ${totals.max}
        </p>
        <p className="text-[10px] text-slate-400 pt-2 relative z-10">Rough estimate framework for custom site planning options.</p>
      </div>
    </div>
  );
}

// --- APP CORE CONTAINER ---
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-pink-100 selection:text-pink-700">
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