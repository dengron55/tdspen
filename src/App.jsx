import React, { useState } from 'react';
import { 
  BookOpen, 
  ShoppingCart, 
  ChevronRight, 
  Cpu, 
  EyeOff, 
  Brain, 
  Smartphone, 
  Layers, 
  Menu,
  X,
  ExternalLink,
  FileSpreadsheet
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLayer, setActiveLayer] = useState("inner");
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Reader Insights and Reflections",
    message: ""
  });

  const protocolLayers = {
    inner: {
      title: "Inner Layer: Core Self-Cognition",
      color: "from-blue-600/10 to-cyan-600/10 border-cyan-500/30",
      textColor: "text-cyan-400",
      chapters: [
        { 
          num: "Chapter 1", 
          title: "Prisoners of the Pixel", 
          desc: "An in-depth analysis of social media vanity metrics, toxic comparison cultures, and how algorithms systematically dismantle an individual's intrinsic self-worth.",
          badges: ["Self-Worth De-quantization", "Internal Evaluation Reset"]
        },
        { 
          num: "Chapter 2", 
          title: "Puppets of the Algorithm", 
          desc: "Deconstructing the short-form video dopamine loop and quantitative metric slavery. Re-training the prefrontal cortex via actionable boredom-tolerance methods.",
          badges: ["Dopamine Fasting", "Prefrontal Cortex Shielding"]
        }
      ]
    },
    middle: {
      title: "Middle Layer: Authenticity and Privacy Security",
      color: "from-purple-600/10 to-indigo-600/10 border-purple-500/30",
      textColor: "text-purple-400",
      chapters: [
        { 
          num: "Chapter 3", 
          title: "AI Impact and the Reality Crisis", 
          desc: "Navigating the post-truth era. Exploring existential anxieties surrounding deepfakes, synthetic media, and the systemic bankruptcy of digital trust.",
          badges: ["Authenticity Calibration", "Digital Anti-Counterfeit"]
        },
        { 
          num: "Chapter 5", 
          title: "The End of Privacy", 
          desc: "Confronting shadow profiling, data harvesting, and the irreversible monetization of biometric data. Building robust personal counter-tracking systems.",
          badges: ["Hardware Blockers", "Counter-Tracking Strategies"]
        }
      ]
    },
    outer: {
      title: "Outer Layer: Social Interaction and Environmental Order",
      color: "from-amber-600/10 to-red-600/10 border-amber-500/30",
      textColor: "text-amber-400",
      chapters: [
        { 
          num: "Chapter 4", 
          title: "Digital Etiquette and Social Conflict", 
          desc: "Managing read-receipt anxiety, hyper-connectivity pressure, and cancel culture fears by introducing a structured Digital Emotional Buffer.",
          badges: ["Anxiety Interruption", "Emotional Buffering"]
        },
        { 
          num: "Chapter 6", 
          title: "Information Overload", 
          desc: "Deploying a rigorous Brain Bandwidth Protection Strategy to filter out daily data deluges and restore single-task executive focus.",
          badges: ["Bandwidth Protection", "Information Diet"]
        },
        { 
          num: "Chapter 7", 
          title: "Workplace and Cross-Platform Boundaries", 
          desc: "Reclaiming the lost Right to be Offline. Erecting solid structural walls between personal peace and 24/7 cross-platform invisible labor.",
          badges: ["Right to be Offline", "Cross-Platform Boundaries"]
        }
      ]
    }
  };

  {/* 方案 B：真實 Google 表單背景串接核心邏輯 */}
  const handleGoogleFormSubmit = (e) => {
    e.preventDefault();
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeTMnHL-r959itU66sTBYBCapQ83hkO7fjgd3DJuDcoONqrnA/formResponse";
    const formDataBody = new FormData();
    
    formDataBody.append("entry.1422014424", formData.name);
    formDataBody.append("entry.172100959", formData.email);
    formDataBody.append("entry.747442692", formData.type);
    formDataBody.append("entry.2097382726", formData.message);

    fetch(formUrl, { method: "POST", mode: "no-cors", body: formDataBody })
      .then(() => {
        setFeedbackSuccess(true);
        setFormData({ name: "", email: "", type: "Reader Insights and Reflections", message: "" });
        setTimeout(() => setFeedbackSuccess(false), 6000);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 antialiased">
      
      {/* SECTION 1: 導航列 */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-900 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* 修改 3: 左上角 Logo 改造（白色漸層圓點外擴，置中疊加 Logo2.jpg 呈現日全蝕凸顯視覺） */}
            <div className="flex items-center space-x-4 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
              <div className="w-14 h-14 rounded-full relative flex items-center justify-center transition-transform duration-300 hover:scale-105">
                
                {/* 日全蝕白色向外平滑模糊漸層層 */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-white/80 to-transparent opacity-95 blur-[2px]" />
                <div className="absolute inset-[-6px] rounded-full bg-white opacity-25 blur-lg animate-pulse" />
                
                {/* 疊加質感爆棚的立體 Logo2.jpg */}
                <img 
                  src="Logo2.jpg" 
                  alt="RE Seal" 
                  className="w-[88%] h-[88%] object-cover rounded-full relative z-10"
                  onError={(e)=>{
                    e.target.style.display="none";
                  }} 
                />
                <span className="text-slate-950 font-serif font-extrabold text-sm tracking-tighter absolute z-20 hidden [img[style*='display: none']~&]:block">RE</span>
              </div>
              <div>
                <span className="font-serif tracking-wider font-bold text-base text-amber-500 block">RODIN EAST</span>
                <span className="text-[9px] tracking-widest text-slate-400 block uppercase font-mono">Official Author Page</span>
              </div>
            </div>

            {/* 桌面端選單 */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors">About</a>
              <a href="#protocol" className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors">Protocol Map</a>
              <a href="#solutions" className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors">Dual-Track Method</a>
              <a href="#feedback" className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors">Reader Hub</a>
              <a 
                href="https://www.amazon.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold text-sm hover:shadow-lg hover:shadow-amber-500/20 transform hover:-translate-y-0.5 transition-all"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Buy on Amazon</span>
              </a>
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="p-2 text-slate-400 hover:text-slate-100 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* 行動端選單 */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-900 px-4 pt-2 pb-6 space-y-3">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-amber-500">About</a>
            <a href="#protocol" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-amber-500">Protocol Map</a>
            <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-amber-500">Dual-Track Method</a>
            <a href="#feedback" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-amber-500">Reader Hub</a>
            <a 
              href="https://www.amazon.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full text-center inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Buy on Amazon</span>
            </a>
          </div>
        )}
      </nav>

      {/* SECTION 2: Hero 主視覺 */}
      <section className="relative overflow-hidden pt-12 pb-24 md:py-32 border-b border-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative group max-w-[320px] sm:max-w-[360px] w-full px-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-500/20 rounded-2xl blur-2xl group-hover:scale-105 transition-transform duration-500" />
                
                <div className="relative rounded-lg shadow-2xl overflow-hidden border border-slate-800 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="bg-slate-900 p-2 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-[10px] text-amber-500 tracking-widest uppercase font-mono">KDP Best Seller</span>
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    </div>
                  </div>
                  
                  <div className="bg-slate-950 aspect-[3/4] relative flex items-center justify-center">
                    <img 
                      src="TDSPeBookCover3Dmockup2.jpg" 
                      alt="The Digital Stress Protocol Cover" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.className = "bg-gradient-to-b from-slate-900 via-slate-950 to-black p-6 flex flex-col justify-between aspect-[3/4]";
                      }}
                    />
                  </div>
                </div>
                
                {/* 修改 1: "綠色明暗變化的圓點+Kindle and Paperback Available" 等比放大 50% */}
                <div className="absolute -bottom-8 -right-6 bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-2.5 flex items-center space-x-3 backdrop-blur-sm shadow-xl scale-150 origin-bottom-right z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                  <span className="text-[11px] font-mono font-bold text-slate-200 whitespace-nowrap">Kindle and Paperback Available</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-amber-500 text-xs font-medium tracking-wide w-fit mx-auto lg:mx-0 mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Now Available globally on Amazon KDP</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                THE DIGITAL<br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                  STRESS PROTOCOL
                </span>
              </h1>
              
              <p className="mt-4 text-sm sm:text-base lg:text-lg font-medium text-slate-300 max-w-2xl font-serif italic leading-relaxed">
                "Dual-Track Solutions for 100 Modern Digital Disturbances: Overcoming Burnout, Algorithmic Manipulation, and Information Overload"
              </p>

              <p className="mt-6 text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
                Are you feeling suffocated within the borders of your screen? Metric anxiety, endless algorithmic rabbit holes, and continuous invisible labor are stealthily fracturing your prefrontal focus. This guide offers a comprehensive Dual-Track Protocol designed to help you regain mental sovereignty and restore autonomous self-governance.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="https://www.amazon.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-base hover:shadow-xl hover:shadow-amber-500/10 transform hover:-translate-y-0.5 transition-all group"
                >
                  <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Buy on Amazon</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a 
                  href="#protocol" 
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-medium text-base hover:bg-slate-850 hover:border-slate-700 transition-all"
                >
                  <span>Explore the Architecture</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: 現代數位痛點剖析 */}
      <section id="about" className="py-20 bg-slate-950/40 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono tracking-widest text-amber-500 uppercase">Modern Digital Disturbances</h2>
            <p className="mt-3 text-3xl font-serif font-bold text-white">Trapped in the Invisible Digital Loop?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 border border-slate-900 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-6">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 font-serif">Dopamine Hijacking</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Infinite vertical scroll dynamics and algorithmic micro-rewards fracture your cognitive bandwidth, diminishing capacities for deep focus.
              </p>
            </div>
            <div className="bg-slate-900/50 border border-slate-900 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
                <EyeOff className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 font-serif">Algorithmic Profiling</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Persistent shadow data profiling. In an AI-augmented post-truth era, synthetic content and deepfakes threaten baseline digital reality.
              </p>
            </div>
            <div className="bg-slate-900/50 border border-slate-900 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 font-serif">Invisible Labor</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Hyper-connectivity expectations, read-receipt fatigue, and cross-platform spillover continuously override your legal Right to be Offline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: 數位協定互動區塊 */}
      <section id="protocol" className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase">Interactive Map</h2>
            <p className="mt-3 text-3xl font-serif font-bold text-white">Reclaiming Mind Sovereignty</p>
            <p className="mt-4 text-slate-400 text-sm">
              Derived from the master architectural framework inside the book (Preface Chart). Tap the conceptual layers below to dissect the protocol layout:
            </p>
          </div>

          <div className="flex justify-center p-1.5 bg-slate-900 border border-slate-800 rounded-xl max-w-xl mx-auto mb-12">
            <button 
              onClick={() => setActiveLayer("inner")}
              className={`flex-1 py-3 text-xs sm:text-sm font-medium rounded-lg transition-all ${activeLayer === "inner" ? "bg-cyan-500 text-slate-950 font-bold shadow-md" : "text-slate-400 hover:text-slate-200"}`}
            >
              Inner Layer
            </button>
            <button 
              onClick={() => setActiveLayer("middle")}
              className={`flex-1 py-3 text-xs sm:text-sm font-medium rounded-lg transition-all ${activeLayer === "middle" ? "bg-purple-500 text-slate-950 font-bold shadow-md" : "text-slate-400 hover:text-slate-200"}`}
            >
              Middle Layer
            </button>
            <button 
              onClick={() => setActiveLayer("outer")}
              className={`flex-1 py-3 text-xs sm:text-sm font-medium rounded-lg transition-all ${activeLayer === "outer" ? "bg-amber-500 text-slate-950 font-bold shadow-md" : "text-slate-400 hover:text-slate-200"}`}
            >
              Outer Layer
            </button>
          </div>

          {/* 安全單行拼裝字串，根絕 Vite/Oxc 編譯器報錯 */}
          <div className={'p-6 sm:p-10 rounded-2xl bg-gradient-to-br border transition-all duration-300 ' + protocolLayers[activeLayer].color}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-slate-800/60 pb-6 mb-8">
              <div>
                <span className="text-xs font-mono uppercase text-slate-500 tracking-widest">Active System Dimension</span>
                <h3 className={`text-xl font-serif font-bold mt-1 ${protocolLayers[activeLayer].textColor}`}>
                  {protocolLayers[activeLayer].title}
                </h3>
              </div>
              <div className="flex items-center space-x-2 bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800 text-xs text-slate-400 w-fit">
                <Layers className="w-4 h-4" />
                <span>Primary Goal: Autonomy Over Algorithmic Reliance</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {protocolLayers[activeLayer].chapters.map((chap, idx) => (
                <div key={idx} className="bg-slate-950/90 p-6 rounded-xl border border-slate-900 flex flex-col justify-between hover:border-slate-800 transition-colors">
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-500 uppercase block tracking-wider">{chap.num}</span>
                    <h4 className="text-base font-serif font-bold text-slate-100 mt-1">{chap.title}</h4>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">{chap.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-900/60 flex flex-wrap gap-2">
                    {chap.badges.map((b, bIdx) => (
                      <span key={bIdx} className="text-[10px] px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 系統架構圖展示區 */}
          <div className="mt-20 text-center">
            <div className="max-w-[768px] mx-auto px-4 w-full">
              <div className="relative group w-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-500/20 rounded-2xl blur-2xl group-hover:scale-105 transition-transform duration-500" />
                
                <div className="relative rounded-lg shadow-2xl overflow-hidden border border-slate-800 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="bg-slate-900 p-2.5 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-[10px] text-amber-500 tracking-widest uppercase font-mono font-bold">Master Architecture Blueprint</span>
                    <div className="flex space-x-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    </div>
                  </div>
                  
                  <div className="bg-slate-950 p-4 relative flex items-center justify-center min-h-[250px]">
                    <img 
                      src="Preface4.jpg" 
                      alt="Full Protocol Architecture Blueprint" 
                      className="w-full h-auto object-contain rounded" 
                      onError={(e)=>{
                        e.target.style.display="none";
                      }} 
                    />
                  </div>
                </div>
                
                {/* 修改 2: "綠色明暗變化的圓點+Source: Preface Master Chart" 等比放大 50% */}
                <div className="absolute -bottom-8 -right-6 bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-2.5 flex items-center space-x-3 backdrop-blur-sm shadow-xl scale-150 origin-bottom-right z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                  <span className="text-[11px] font-mono font-bold text-slate-200 whitespace-nowrap">Source: Preface Master Chart</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: 雙軌解決方案 */}
      <section id="solutions" className="py-20 bg-slate-950/40 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono tracking-widest text-amber-500 uppercase">The Methodology</h2>
            <p className="mt-3 text-3xl font-serif font-bold text-white">The Dual-Track Architecture</p>
            <p className="mt-4 text-slate-400 text-sm">Merely deleting applications fails. This model combines socio-psychological re-conditioning with active environmental engineering:</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-sans">
            <div className="bg-slate-900/40 border border-slate-900 p-8 rounded-2xl">
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold font-mono mb-6">
                <span>TRACK 01 - Socio-psychological Adjustment</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-100">Cognitive Reconstruction</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Nurturing internal mental fortitude. Guiding individuals through standard psychological de-quantization to disconnect core self-validation from metrics.
              </p>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-start space-x-3 text-sm text-slate-300">
                  <div className="text-blue-400 font-mono text-sm font-bold shrink-0">[✓]</div>
                  <div><span className="font-bold text-slate-100">De-quantization:</span> Uncoupling personal metrics from neural feedback loop nodes.</div>
                </div>
                <div className="flex items-start space-x-3 text-sm text-slate-300">
                  <div className="text-blue-400 font-mono text-sm font-bold shrink-0">[✓]</div>
                  <div><span className="font-bold text-slate-100">Internal Reference Anchor:</span> Systematically rejecting engineered platform comparison states.</div>
                </div>
                <div className="flex items-start space-x-3 text-sm text-slate-300">
                  <div className="text-blue-400 font-mono text-sm font-bold shrink-0">[✓]</div>
                  <div><span className="font-bold text-slate-100">Boredom Calibration:</span> Adapting core focus to low-stimulation raw reality environments.</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-900 p-8 rounded-2xl">
              <div className="inline-flex items-center space-x-2 bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full text-xs font-semibold font-mono mb-6">
                <span>TRACK 02 - Socio-behavioral Intervention</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-100">Physical Intervention</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Deliberate structural defense configuration. Engineering physical barriers and specific device restrictions to enforce boundaries.
              </p>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-start space-x-3 text-sm text-slate-300">
                  <div className="text-amber-400 font-mono text-sm font-bold shrink-0">[✓]</div>
                  <div><span className="font-bold text-slate-100">UI Obfuscation:</span> Disabling real-time visibility of addictive quantitative design elements.</div>
                </div>
                <div className="flex items-start space-x-3 text-sm text-slate-300">
                  <div className="text-amber-400 font-mono text-sm font-bold shrink-0">[✓]</div>
                  <div><span className="font-bold text-slate-100">Strategic Intermissions:</span> Constructing rigid offline time windows to refresh prefrontal capacities.</div>
                </div>
                <div className="flex items-start space-x-3 text-sm text-slate-300">
                  <div className="text-amber-400 font-mono text-sm font-bold shrink-0">[✓]</div>
                  <div><span className="font-bold text-slate-100">Hardware Enclosure:</span> Positioning physical barrier walls to safe-keep target domestic spaces.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: 修改 4 - Reader Hub 精華改造（直連真實 Google 表單，背景無縫發送） */}
      <section id="feedback" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center space-x-2 bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full text-xs font-medium mb-4">
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>Google Form Hub</span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-white">Connect Directly via Google Forms</h2>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                The launch of this volume marks the start of a broader mental reclamation initiative. Share your reading insights or log unique instances of algorithmic interference. Filling out the dynamic portal below directs your data safely into our secure logging workspace.
              </p>
            </div>

            {/* 無流量跳轉、全自訂 UI 數據收集終端 */}
            <div className="lg:col-span-7 bg-slate-900/50 border border-slate-900 p-6 sm:p-8 rounded-2xl relative">
              <form onSubmit={handleGoogleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 uppercase mb-2">Your Name</label>
                    <input 
                      type="text" required value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g., John Doe" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 uppercase mb-2">Email Address</label>
                    <input 
                      type="email" required value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="reader@example.com" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 uppercase mb-2">Inquiry Category</label>
                  <select 
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Reader Insights and Reflections">Reader Insights and Reflections</option>
                    <option value="Reporting New Algorithmic Disturbance Cases">Reporting New Algorithmic Disturbance Cases</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 uppercase mb-2">Message Preview</label>
                  <textarea 
                    rows="4" required value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Provide details regarding your digital stress context or feedback..." 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-amber-500 resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm hover:shadow-lg hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Submit Secure Feedback</span>
                  <ExternalLink className="w-4 h-4" />
                </button>

                {feedbackSuccess && (
                  <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-start space-x-2 text-cyan-400 text-xs mt-2 animate-fadeIn">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 animate-ping shrink-0" />
                    <span><b>Data Securely Transferred!</b> Your response has been securely written directly to the cloud logging server workspace. Thank you for your contribution.</span>
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: 頁尾 */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex items-center space-x-2">
            <span className="text-amber-500 font-serif font-bold">RE</span>
            <span>© 2026 Rodin East. All rights reserved. Published via Amazon KDP.</span>
          </div>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-slate-300">About</a>
            <a href="#protocol" className="hover:text-slate-300">Protocol Blueprint</a>
            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 flex items-center space-x-1">
              <span>Amazon KDP</span> <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}