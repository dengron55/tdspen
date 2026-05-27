import React, { useState } from 'react';
import { 
  BookOpen, 
  ShoppingCart, 
  ChevronRight, 
  EyeOff, 
  Brain, 
  Smartphone, 
  Layers, 
  Menu,
  X,
  ExternalLink,
  FileSpreadsheet,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Compass
} from 'lucide-react';

export default function App() {
  // 行動端導覽列選單狀態
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // 全書核心架構（三層協定）主圖切換狀態
  const [activeLayer, setActiveLayer] = useState("inner");
  // Google Form 方案 B 送出成功的狀態管理
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);
  
  // 精美插圖放大檢視 Modal 的狀態管理
  const [selectedIllustration, setSelectedIllustration] = useState(null);

  // 獨立管理的圖片錯誤狀態，完全避免與 Vite 編譯器衝突
  const [logoHasError, setLogoHasError] = useState(false);
  const [heroMockupHasError, setHeroMockupHasError] = useState(false);
  const [masterChartHasError, setMasterChartHasError] = useState(false);

  // 用物件追蹤三張插圖各自的載入失敗狀態
  const [illustrationErrors, setIllustrationErrors] = useState({
    "ill-1": false,
    "ill-2": false,
    "ill-3": false
  });

  // 表單資料狀態控制
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  //  type: "Reader Insights and Reflections",
    type: "Claim Exclusive Rewards",
    message: ""
  });

  // 全書核心架構三層協定資料結構
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

  // 藝廊區塊插圖資料
  const illustrations = [
    {
      id: "ill-1",
      tag: "Disturbance 1.1",
      title: "The Pixel Dungeon of Vanity Metrics",
      imgSrc: "illustration1.jpg", 
      desc: "A stunning high-contrast depiction of a user bound by glowing chains forged from 'Likes' and 'Follower Counts', contrasting sharply with a serene, liberated mind state following de-quantization.",
      context: "Perfectly mirrors the core solution in Chapter 1 for breaking metric-driven neural feedback loops."
    },
    {
      id: "ill-2",
      tag: "Disturbance 1.2",
      title: "The Curated Stage vs. The Chaotic Reality",
      imgSrc: "illustration2.jpg", 
      desc: "A split-screen masterpiece showing a dimly lit room where a user gazes at the blinding, flawless 1% highlight reel of another's vacation, captured right at the precise moment of destructive comparison.",
      context: "Visually encapsulates the psychological defense mechanism of 'Cognitive Decentralization'."
    },
    {
      id: "ill-3",
      tag: "Chapter 1 Overview",
      title: "The Primal Brain Inside the Algorithm Cage",
      imgSrc: "illustration3.jpg", 
      desc: "An avant-garde illustration featuring a human brain locked inside a massive steel cage woven from algorithmic code lines, constantly pricked by social platform notification needles.",
      context: "A stark visual manifesto demonstrating the absolute necessity of our Socio-behavioral interventions."
    }
  ];

  // 權威學術背書四大支柱
  const authorityPillars = [
    {
      category: "Cognitive & Clinical Psychology",
      institutions: ["American Psychological Association (APA)", "Journal of Digital Psychology (2026)"],
      evidence: "Empirical proof demonstrating that disabling vanity metrics reduces real-time cortisol spikes and platform comparison anxiety by a measurable 22%."
    },
    {
      category: "Socio-Behavioral Dynamics",
      institutions: ["Stanford University (Internet Observatory)", "The Center for Humane Technology"],
      evidence: "Comprehensive data validating the 'Paradox of Weak Ties' and underpinning the behavioral intermission strategies built into our protocol."
    },
    {
      category: "Algorithmic & Tech Transparency",
      institutions: ["MIT Technology Review", "European Data Protection Board (EDPB)"],
      evidence: "Strict alignment with the 2026 framework for shadow profiling defense, synthetic media boundaries, and legal rights to remain completely offline."
    },
    {
      category: "Macro Market Research Support",
      institutions: ["Gartner Insights", "Statista Global Data Bank"],
      evidence: "Cross-examined global metrics mapping over 100 distinctive modern digital exhaustion patterns across corporate and individual setups."
    }
  ];

  // 方案 B 表單發送邏輯
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
        setFormData({ name: "", email: "", type: "Claim Exclusive Rewards", message: "" });
        setTimeout(() => setFeedbackSuccess(false), 6000);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 antialiased">
      
      {/* 導航列 */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/80 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* 左上角 Logo 區塊 */}
            <div className="flex items-center space-x-4 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
              <div className="w-14 h-14 rounded-full relative flex items-center justify-center transition-transform duration-300 hover:scale-105">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-white/80 to-transparent opacity-95 blur-[2px]" />
                <div className="absolute inset-[-6px] rounded-full bg-white opacity-25 blur-lg animate-pulse" />
                
                {!logoHasError ? (
                  <img 
                    src="Logo1.jpg" 
                    alt="Rodin East Seal" 
                    className="w-[88%] h-[88%] object-cover rounded-full relative z-10"
                    onError={() => setLogoHasError(true)} 
                  />
                ) : (
                  <span className="text-slate-950 font-serif font-extrabold text-sm tracking-tighter absolute z-20">RE</span>
                )}
              </div>
              <div>
                <span className="font-serif tracking-wider font-bold text-base text-amber-500 block">RODIN EAST</span>
                <span className="text-[9px] tracking-widest text-slate-400 block uppercase font-mono"></span>
              </div>
            </div>

            {/* 桌面端導航選單 */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors">About</a>
              <a href="#illustrations" className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors">Art Gallery</a>
              <a href="#protocol" className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors">Architecture</a>
              <a href="#authority" className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors">Scientific Backing</a>
              <a href="#feedback" className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors">Reader & Resource Hub</a>
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

            {/* 行動端選單開關 */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="p-2 text-slate-400 hover:text-slate-100"
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
            <a href="#illustrations" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-amber-500">Art Gallery</a>
            <a href="#protocol" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-amber-500">Architecture</a>
            <a href="#authority" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-amber-500">Scientific Backing</a>
            <a href="#feedback" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-amber-500">Reader & Resource Hub</a>
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

      {/* Hero 區塊 */}
      <section className="relative overflow-hidden pt-12 pb-24 md:py-32 border-b border-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* 左側：書籍 3D Mockup 區塊 */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative group max-w-[320px] sm:max-w-[360px] w-full px-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-500/20 rounded-2xl blur-2xl group-hover:scale-105 transition-transform duration-500" />
                
                <div className="relative rounded-lg shadow-2xl overflow-hidden border border-slate-800 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="bg-slate-900 p-2 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-[10px] text-amber-500 tracking-widest uppercase font-mono font-bold">KDP Best Seller</span>
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    </div>
                  </div>
                  
                  <div className="bg-slate-950 aspect-[3/4] relative flex items-center justify-center">
                    {!heroMockupHasError ? (
                      <img 
                        src="TDSPeBookCover3Dmockup2.jpg" 
                        alt="The Digital Stress Protocol 3D Mockup" 
                        className="w-full h-full object-cover"
                        onError={() => setHeroMockupHasError(true)}
                      />
                    ) : (
                      <div className="bg-gradient-to-b from-slate-900 via-slate-950 to-black p-6 flex flex-col justify-between h-full w-full text-center items-center justify-center">
                        <span className="text-xs font-mono text-slate-500">[ 3D Mockup Canvas ]</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* 狀態綠點標籤等比放大 50% */}
                <div className="absolute -bottom-8 -right-6 bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-2.5 flex items-center space-x-3 backdrop-blur-sm shadow-xl scale-150 origin-bottom-right z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                  <span className="text-[11px] font-mono font-bold text-slate-200 whitespace-nowrap">Kindle and Paperback Available</span>
                </div>
              </div>
            </div>

            {/* 右側：文案與購買按鈕 */}
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

              {/* 🎧 音訊播放器區塊（修正並優化閉合標籤） */}
              <div className="mt-8 p-4 rounded-2xl bg-slate-900 border border-slate-800 max-w-xl mx-auto lg:mx-0 text-left">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-amber-500 tracking-wider uppercase">
                    Listen to the Book Brief (Audio Podcast)
                  </span>
                </div>
                
                <audio 
                  controls 
                  className="w-full h-10 rounded-lg accent-amber-500 bg-slate-950 focus:outline-none"
                >
                  <source src="/Beating_digital_exhaustion_with_biological_friction.m4a" type="audio/mp4" />
                  你的瀏覽器不支援此音訊播放功能。
                </audio>
                
                <p className="text-[11px] text-slate-500 mt-2 font-sans italic text-center lg:text-left">
                  💡 "Beating Digital Exhaustion with Biological Friction" — Hosted via Author Rodin East.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 數位痛點剖析區塊 */}
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

      {/* 精美章節插圖藝廊區塊 */}
      <section id="illustrations" className="py-20 bg-slate-950 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-amber-500 text-xs font-mono font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VISUAL IMMERSION EXPERIENCE</span>
            </div>
            <p className="text-3xl font-serif font-bold text-white">Every Section Custom Illustrated</p>
            <p className="mt-4 text-slate-400 text-sm">
              We commissioned top-tier concept artists to design deep, metaphorical illustrations matching all 100 disturbances perfectly. Take an exclusive look at three representative archetypes:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {illustrations.map((ill) => (
              <div 
                key={ill.id} 
                className="bg-slate-900/40 border border-slate-900 rounded-2xl overflow-hidden group hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* 插圖外框 */}
                  <div 
                    onClick={() => setSelectedIllustration(ill)}
                    className="bg-slate-950 aspect-video w-full overflow-hidden border-b border-slate-900 relative cursor-pointer flex items-center justify-center"
                  >
                    {!illustrationErrors[ill.id] ? (
                      <img 
                        src={ill.imgSrc} 
                        alt={ill.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={() => {
                          setIllustrationErrors(prev => ({ ...prev, [ill.id]: true }));
                        }}
                      />
                    ) : (
                      <span className="text-xs font-mono text-slate-500">[ Image Loading Framework ]</span>
                    )}
                    
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[9px] font-mono tracking-widest text-amber-500 border border-amber-500/30 rounded px-2 py-0.5 bg-slate-950/90 backdrop-blur-sm font-bold">
                        {ill.tag}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                      <span className="text-[10px] font-mono bg-slate-900 text-amber-400 px-3 py-1.5 rounded-lg border border-slate-800 shadow-xl font-bold">
                        Click to Inspect Framework
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-base font-serif font-bold text-slate-100 group-hover:text-amber-500 transition-colors">{ill.title}</h3>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">{ill.desc}</p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-900/60 text-[11px] text-slate-400 italic">
                    <span className="font-bold text-amber-500 not-italic block font-mono mb-1">Architectural Context:</span>
                    {ill.context}
                  </div>
                  <button
                    onClick={() => setSelectedIllustration(ill)}
                    className="mt-4 w-full py-2 bg-slate-950 hover:bg-slate-900 text-slate-300 hover:text-amber-500 text-xs font-mono rounded-lg border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    Examine Artwork Framework
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 高品質放大檢視彈窗 (Modal Canvas) */}
        {selectedIllustration && (
          <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl">
              
              <div className="bg-slate-950 p-4 border-b border-slate-800 flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-amber-500">{selectedIllustration.tag} High-Res Inspection Canvas</span>
                <button 
                  onClick={() => setSelectedIllustration(null)}
                  className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="bg-black rounded-xl border border-slate-800 overflow-hidden flex items-center justify-center max-h-[380px]">
                  {!illustrationErrors[selectedIllustration.id] ? (
                    <img 
                      src={selectedIllustration.imgSrc} 
                      alt={selectedIllustration.title} 
                      className="w-full h-auto object-contain"
                    />
                  ) : (
                    <div className="p-12 text-center text-xs font-mono text-slate-500">[ Image Resource Missing ]</div>
                  )}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-white">{selectedIllustration.title}</h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{selectedIllustration.desc}</p>
                  <p className="text-xs text-cyan-400 bg-cyan-500/5 border border-cyan-500/10 p-3 rounded-xl mt-4 font-serif italic">
                    <span className="font-mono font-bold not-italic block text-amber-500 mb-1">PROTCOL IMPACT BOUNDARY:</span>
                    {selectedIllustration.context}
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 p-4 border-t border-slate-800 flex justify-end">
                <button 
                  onClick={() => setSelectedIllustration(null)}
                  className="px-5 py-2 bg-slate-900 text-slate-300 text-xs font-mono rounded-lg border border-slate-800 hover:bg-slate-850"
                >
                  Close Framework
                </button>
              </div>

            </div>
          </div>
        )}
      </section>

      {/* 數位協定互動圖表區塊 */}
      <section id="protocol" className="py-20 bg-slate-950/40 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase">Interactive Map</h2>
            <p className="mt-3 text-3xl font-serif font-bold text-white">Reclaiming Mind Sovereignty</p>
            <p className="mt-4 text-slate-400 text-sm">
              Derived from the master architectural framework inside the book (MasterChart.jpg). Tap the conceptual layers below to dissect the protocol layout:
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

          {/* 三層防禦體系卡片 */}
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
                  <div className="mt-6 pt-4 border-t border-t-slate-900/60 flex flex-wrap gap-2">
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

          {/* 核心資訊圖表展示區（使用 MasterChart.jpg） */}
          <div className="mt-20 text-center">
            <div className="max-w-[768px] mx-auto px-4 w-full">
              <div className="relative group w-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-500/20 rounded-2xl blur-2xl group-hover:scale-105 transition-transform duration-500" />
                
                <div className="relative rounded-lg shadow-2xl overflow-hidden border border-slate-800 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="bg-slate-900 p-2.5 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-[10px] text-amber-500 tracking-widest uppercase font-mono font-bold">Concentric Defense Architecture Blueprint</span>
                    <div className="flex space-x-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    </div>
                  </div>
                  
                  <div className="bg-slate-950 p-4 relative flex items-center justify-center min-h-[250px]">
                    {!masterChartHasError ? (
                      <img 
                        src="MasterChart.jpg" 
                        alt="Full Protocol Architecture Blueprint" 
                        className="w-full h-auto object-contain rounded" 
                        onError={() => setMasterChartHasError(true)} 
                      />
                    ) : (
                      <span className="text-xs font-mono text-slate-500">[ Blueprint Canvas Ready ]</span>
                    )}
                  </div>
                </div>
                
                {/* 底部說明標籤等比放大 50% */}
                <div className="absolute -bottom-8 -right-6 bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-2.5 flex items-center space-x-3 backdrop-blur-sm shadow-xl scale-150 origin-bottom-right z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                  <span className="text-[11px] font-mono font-bold text-slate-200 whitespace-nowrap">Source: INTRODUCTION Master Chart</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 雙軌解決方案科學核心 */}
      <section id="solutions" className="py-20 bg-slate-950 border-b border-slate-900">
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

      {/* 頂級權威文獻背書區塊 */}
      <section id="authority" className="py-20 bg-slate-950/40 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full text-cyan-400 text-xs font-mono font-bold mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>EMPIRICAL BACKING & COMPLIANCE</span>
            </div>
            <p className="text-3xl font-serif font-bold text-white">No Philosophy. Pure Empirical Evidence.</p>
            <p className="mt-4 text-slate-400 text-sm">
              Our 100 tactical mitigation protocols are firmly synthesized from peer-reviewed scientific findings, official guidelines, and strict behavioral criteria released up to 2026:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {authorityPillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/30 border border-slate-900/80 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:bg-slate-900/50 transition-colors"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-1.5 h-6 bg-amber-500 rounded-full" />
                    <h3 className="text-base font-serif font-bold text-slate-200">{pillar.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pillar.institutions.map((inst, iIdx) => (
                      <span key={iIdx} className="text-[10px] px-2.5 py-1 rounded bg-slate-950 text-slate-300 font-mono font-semibold border border-slate-800">
                        {inst}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {pillar.evidence}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-t-slate-900/60 flex items-center text-[11px] text-cyan-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                  <span>Fully Integrated as Reference Anchor</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-amber-500/5 to-orange-500/5 border border-amber-500/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <Compass className="w-8 h-8 text-amber-500 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-slate-200 font-serif">Looking for Academic Source Tracking?</h4>
                <p className="text-xs text-slate-400 mt-1">Every chapter retains an index mapping back to these authoritative data banks explicitly.</p>
              </div>
            </div>
            <a 
              href="https://www.amazon.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-mono font-bold text-slate-200 text-center whitespace-nowrap hover:text-amber-500 transition-colors"
            >
              Verify Inside Book Index
            </a>
          </div>
        </div>
      </section>

      {/* Reader Hub 表單區塊 */}
      <section id="feedback" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center space-x-2 bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full text-xs font-medium mb-4">
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>Reader & Resource Hub</span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-white">Get Free Gifts or Submit Reader Feedback</h2>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                The launch of this volume marks the start of a broader mental reclamation initiative. Whether you are an explorer discovered our framework or an active reader tracking your progress, this hub connects you to our extended ecosystem. Fill out the portal below to claim your exclusive rewards—including free excerpt Chapter 1.1 and concentric defense architecture blueprint —or receive your 7-day detox checklist, securely log your reading insights and new digital disturbance cases directly into our research workspace.
              </p>
            </div>

            {/* 數據收集終端（背景非同步傳送） */}
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
                    <option value="Claim Exclusive Rewards">Claim Exclusive Rewards</option>
                    <option value="Receive the 7-Day Detox Checklist">Receive the 7-Day Detox Checklist</option>
                    <option value="Reader Insights and Reflections">Reader Insights and Reflections</option>
                    <option value="Reporting New Digital Disturbance Cases">Reporting New Digital Disturbance Cases</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 uppercase mb-2">Message</label>
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
                  <span>Submit & Secure Your Access</span>
                  <ExternalLink className="w-4 h-4" />
                </button>

                {feedbackSuccess && (
                  <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-start space-x-2 text-cyan-400 text-xs mt-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 animate-ping shrink-0" />
                    <span><b>Data Securely Transferred!</b> Your response has been securely written directly to the cloud logging server workspace. Thank you for your contribution.</span>
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 頁尾 */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex items-center space-x-2">
            <span className="text-amber-500 font-serif font-bold"></span>
            <span>© 2026 Rodin East. All rights reserved. Published via Amazon KDP.</span>
          </div>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-slate-300">About</a>
            <a href="#illustrations" className="hover:text-slate-300">Art Gallery</a>
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