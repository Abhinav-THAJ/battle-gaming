import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImg from './assets/battlestation_logo.png';
import heroVisual from './assets/hero_visual.png';
import './index.css';

// --- CUSTOM CURSOR ---
const CustomCursor = ({ mounted }: { mounted: boolean }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      if (target) {
        setIsPointer(
          window.getComputedStyle(target).cursor === 'pointer' ||
          ['A', 'BUTTON', 'INPUT', 'SELECT'].includes(target.tagName)
        );
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        backgroundColor: isPointer ? 'rgba(0, 242, 254, 0.4)' : 'rgba(0, 242, 254, 0.2)',
        border: '1px solid rgba(0, 242, 254, 0.8)',
        boxShadow: '0 0 15px rgba(0, 242, 254, 0.5)',
        pointerEvents: 'none',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: isPointer ? 1.5 : 1,
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
    >
      <div style={{ width: '4px', height: '4px', background: '#00f2fe', borderRadius: '50%' }} />
    </motion.div>
  );
};

// --- INLINE SVG ICONS ---
const IconMonitor = (props: any) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>;
const IconGamepad = (props: any) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>;
const IconHeadset = (props: any) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>;
const IconChevronRight = (props: any) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>;
const IconMapPin = (props: any) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const IconPhone = (props: any) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const IconMail = (props: any) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const IconUsers = (props: any) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconClock = (props: any) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const IconTrophy = (props: any) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>;
const IconCpu = (props: any) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 15h3"/><path d="M1 9h3"/><path d="M1 15h3"/></svg>;
const IconZap = (props: any) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>;

// --- VISUAL BACKGROUND ---
const VisualBackground = () => (
  <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, background: '#050508', overflow: 'hidden', pointerEvents: 'none' }}>
    <div className="cyber-grid" style={{
      position: 'absolute', width: '200%', height: '200%', top: '-50%', left: '-50%',
      background: 'linear-gradient(rgba(0, 242, 254, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 254, 0.1) 1px, transparent 1px)',
      backgroundSize: '100px 100px',
      transform: 'perspective(500px) rotateX(60deg)',
      animation: 'gridMove 20s linear infinite'
    }} />
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, #050508 90%)' }} />
  </div>
);

// --- LOADING PAGE COMPONENT ---
const LoadingPage = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000); // Give it a moment at 100%
          return 100;
        }
        return prev + Math.random() * 8; // Faster and more dynamic
      });
    }, 100);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="loading-overlay"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 1, ease: "easeInOut" }
      }}
    >
      <div className="loading-glitch" />
      <div className="loading-content">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            src={heroImg} 
            alt="Logo" 
            className="loading-logo"
            animate={{ 
              filter: [
                'drop-shadow(0 0 10px var(--cyan))',
                'drop-shadow(0 0 30px var(--cyan))',
                'drop-shadow(0 0 10px var(--cyan))'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        
        <div style={{ width: '100%', textAlign: 'center' }}>
          <div className="loading-bar-container">
            <motion.div 
              className="loading-bar" 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", bounce: 0, duration: 0.1 }}
            />
          </div>
          
          <div className="loading-status" style={{ marginTop: '15px' }}>
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              INITIALIZING ARENA...
            </motion.span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
      <div className="scanline" />
    </motion.div>
  );
};

// --- MAIN APP COMPONENT ---
function App() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [gameType, setGameType] = useState('pc');
  const [hours, setHours] = useState('1');
  const [players, setPlayers] = useState('1');
  const [price, setPrice] = useState(15);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const rates: Record<string, number> = { pc: 120, console: 100, vr: 250 };
    const h = parseInt(hours) || 1;
    const p = parseInt(players) || 1;
    setPrice(rates[gameType] * h * p);
  }, [gameType, hours, players]);

  return (
    <AnimatePresence mode="wait">
      {!mounted ? (
        <LoadingPage key="loader" onComplete={() => setMounted(true)} />
      ) : (
        <motion.div 
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="app-container" 
          style={{ position: 'relative', color: '#fff', background: '#050508', cursor: 'none' }}
        >
      <CustomCursor mounted={mounted} />
      <VisualBackground />

      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img 
              src={heroImg} 
              alt="logo" 
              style={{ 
                height: '40px', 
                filter: 'drop-shadow(0 0 10px var(--cyan))',
                mixBlendMode: 'screen' 
              }} 
            />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.4rem', color: 'white', letterSpacing: '2px' }}>BATTLESTATION</span>
          </div>

          <div style={{ padding: '4px 12px', background: 'rgba(0, 255, 0, 0.1)', border: '1px solid rgba(0, 255, 0, 0.2)', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: 6, height: 6, background: '#00ff00', borderRadius: '50%', boxShadow: '0 0 8px #00ff00' }} />
            <span style={{ fontSize: '0.7rem', color: '#00ff00', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Arena Live: 42/50 Available</span>
          </div>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Arena</a></li>
          <li><a href="#zones">Zones</a></li>
          <li><a href="#titles">Titles</a></li>
          <li><a href="#tournaments">Tournaments</a></li>
          <li><a href="#booking">Booking</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-grid">
          <motion.div 
            className="hero-content-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-tag">
              <div className="tag-dot" />
              <span>Now open in downtown</span>
            </div>
            <h1 className="hero-title">
              Level up your <br />
              <span className="text-gradient text-glow">Gaming</span> <br />
              Experience
            </h1>
            <p className="hero-subtitle">
              Enter the elite realm where peak performance meets community. 
              Powered by the latest RTX hardware and ultra-low latency fiber internet.
            </p>
            <div className="hero-buttons">
              <a href="#booking" className="btn btn-primary">Book Now <IconChevronRight /></a>
              <a href="#zones" className="btn btn-secondary">Explore Zone</a>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-value">50+</span>
                <span className="stat-label">Pro Rigs</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-value">10Gbps</span>
                <span className="stat-label">Internet</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-value">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual-right"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="visual-wrapper">
              <img src={heroVisual} alt="Gaming Setup" className="main-visual" />
              <div className="visual-overlay" />
              
              {/* Floating Feature Tags */}
              <motion.div 
                className="floating-tag tag-1 glass-panel"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <IconCpu style={{ width: 14, height: 14 }} /> RTX 4090 POWERED
              </motion.div>
              
              <motion.div 
                className="floating-tag tag-2 glass-panel"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <IconZap style={{ width: 14, height: 14 }} /> 240HZ DISPLAYS
              </motion.div>
              
              <motion.div 
                className="floating-tag tag-3 glass-panel"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <IconMonitor style={{ width: 14, height: 14 }} /> ELITE ERGONOMICS
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Partner Logos */}
        <div style={{ position: 'absolute', bottom: '100px', width: '100%', left: 0, padding: '0 40px', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '60px', opacity: 0.4, filter: 'grayscale(1) brightness(2)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem' }}>ROG</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem' }}>LOGITECH G</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem' }}>RAZER</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem' }}>CORSAIR</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem' }}>NVIDIA</span>
          </div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="mouse">
            <div className="wheel" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2 className="section-title text-gradient">The Pro Destination</h2>
        <div className="about-grid">
          <motion.div className="glass-panel" style={{ padding: '40px' }} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <p className="about-text" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              <strong className="text-glow" style={{ color: 'white' }}>Battlestation</strong> is a next-gen gaming arena designed for competitive and casual gamers. Equipped with high-end PCs, consoles, and immersive environments, we provide the ultimate venue for your gaming sessions and tournaments.
            </p>
            <p style={{ marginTop: '20px', color: 'var(--text-muted)' }}>
              Founded in 2024, our mission is to provide every gamer with access to the highest-performance hardware in an environment that fosters community and competition.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
              <div className="glass-panel" style={{ padding: '20px', border: 'none', background: 'rgba(255,255,255,0.03)' }}>
                <h4 style={{ color: 'var(--cyan)' }}>50+</h4>
                <p style={{ fontSize: '0.8rem' }}>High-End Rigs</p>
              </div>
              <div className="glass-panel" style={{ padding: '20px', border: 'none', background: 'rgba(255,255,255,0.03)' }}>
                <h4 style={{ color: 'var(--cyan)' }}>10Gbps</h4>
                <p style={{ fontSize: '0.8rem' }}>Fiber Internet</p>
              </div>
            </div>
          </motion.div>
          <div className="features-grid">
            {[
              { icon: <IconMonitor />, title: 'Esports PCs', desc: 'RTX 4090 builds • 240Hz • 0.5ms' },
              { icon: <IconGamepad />, title: '4K Consoles', desc: 'PS5 & Xbox Series X • 120Hz' },
              { icon: <IconHeadset />, title: 'VR Zones', desc: 'Valve Index • Full motion' },
              { icon: <IconCpu />, title: 'Liquid Cooling', desc: 'Sustained peak performance' },
              { icon: <IconZap />, title: 'Ultra Bandwidth', desc: '10Gbps dedicated fiber' },
              { icon: <IconUsers />, title: 'Pro Coaching', desc: 'Improve with elite players' }
            ].map((f, i) => (
              <div key={i} className="feature-card glass-panel" style={{ padding: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div className="feature-icon" style={{ marginBottom: '15px', color: 'var(--cyan)' }}>{f.icon}</div>
                <h3 className="feature-title" style={{ fontSize: '1.2rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{ padding: '100px 20px' }}>
        <h2 className="section-title text-gradient">Gamer Feedback</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            { name: 'Marcus R.', role: 'Competitive Player', text: 'The 240Hz monitors are a game changer. Lowest ping I have ever experienced in the city.' },
            { name: 'Sarah K.', role: 'Streamer', text: 'Love the VIP suites! The lighting and atmosphere are perfect for my late-night streams.' },
            { name: 'Alex T.', role: 'Casual Gamer', text: 'Best place to hang out with friends. The equipment is top-tier and the staff are super helpful.' }
          ].map((t, i) => (
            <div key={i} className="glass-panel" style={{ padding: '30px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 20, right: 30, color: 'rgba(0, 242, 254, 0.2)', fontSize: '4rem', fontFamily: 'serif', lineHeight: 1 }}>"</div>
              <p style={{ fontStyle: 'italic', marginBottom: '20px', color: 'var(--text-muted)' }}>{t.text}</p>
              <div style={{ fontWeight: 700, color: 'white' }}>{t.name}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--cyan)' }}>{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={{ padding: '100px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title text-gradient">Common Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {[
              { q: 'Is there an age limit?', a: 'Gamers under 16 need to be accompanied by an adult after 8:00 PM.' },
              { q: 'Can I bring my own gear?', a: 'Yes! Our rigs have easily accessible USB ports for your mice, keyboards, and headsets.' },
              { q: 'Do you serve food?', a: 'We have a dedicated cafe serving snacks, energy drinks, and hot meals delivered to your station.' }
            ].map((item, i) => (
              <div key={i} className="glass-panel" style={{ padding: '20px 30px' }}>
                <div style={{ fontWeight: 700, color: 'var(--cyan)', marginBottom: '5px' }}>{item.q}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones Section */}
      <section id="zones">
        <h2 className="section-title text-gradient">Gaming Zones</h2>
        <div className="pricing-grid">
          {[
            { 
              type: 'Console Zone', 
              price: 12, 
              desc: 'Next-gen console play with PS5 and Xbox Series X on 65" 4K OLED screens.',
              specs: ['DualSense Edge available', 'Surround Sound', 'Luxury Recliners']
            },
            { 
              type: 'Esports Zone', 
              price: 15, 
              desc: 'Professional grade hardware designed for tournament competitive play.', 
              popular: true,
              specs: ['RTX 4090 / i9-14900K', 'Zowie 240Hz Monitors', 'Logitech Pro Gear']
            },
            { 
              type: 'VR Universe', 
              price: 25, 
              desc: 'Step inside the game with high-fidelity VR and full range of motion.',
              specs: ['Valve Index Systems', 'Full Body Tracking', 'Immersive Spatial Audio']
            },
            { 
              type: 'VIP Private Suite', 
              price: 45, 
              desc: 'For teams and parties who want total privacy and premium amenities.',
              specs: ['5x Pro Rigs + 85" Screen', 'Private Minibar', 'Noise-controlled room']
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className={`pricing-card glass-panel ${item.popular ? 'pricing-card-popular' : ''}`}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              {item.popular && <div className="badge-popular">Elite Choice</div>}
              <div className="pricing-header">
                <h3 className="pricing-type">{item.type}</h3>
                <div className="pricing-price">₹{item.price}<span>/hr</span></div>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '0.9rem' }}>{item.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', textAlign: 'left' }}>
                {item.specs.map((s, idx) => (
                  <li key={idx} style={{ fontSize: '0.85rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '6px', height: '6px', background: 'var(--cyan)', borderRadius: '50%' }} /> {s}
                  </li>
                ))}
              </ul>
              <button className={`btn ${item.popular ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }}>Select Zone</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Game Titles Section (New Content) */}
      <section id="titles">
        <h2 className="section-title text-gradient">Top Titles</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {[
            { 
              genre: 'Competitive FPS', 
              games: ['Valorant', 'Counter-Strike 2', 'Apex Legends', 'Overwatch 2'],
              icon: <IconZap />
            },
            { 
              genre: 'Sports & Racing', 
              games: ['FC 24', 'F1 23', 'NBA 2K24', 'Rocket League'],
              icon: <IconGamepad />
            },
            { 
              genre: 'MOBA & Strategy', 
              games: ['League of Legends', 'Dota 2', 'StarCraft II', 'Teamfight Tactics'],
              icon: <IconCpu />
            },
            { 
              genre: 'Immersive VR', 
              games: ['Half-Life: Alyx', 'Beat Saber', 'Superhot VR', 'Pavlov VR'],
              icon: <IconHeadset />
            },
            { 
              genre: 'Battle Royale', 
              games: ['Warzone 3', 'Fortnite', 'PUBG', 'Naraka: Bladepoint'],
              icon: <IconZap />
            },
            { 
              genre: 'Fighting Games', 
              games: ['Tekken 8', 'Street Fighter 6', 'Mortal Kombat 1'],
              icon: <IconGamepad />
            }
          ].map((cat, i) => (
            <motion.div 
              key={i} 
              className="glass-panel" 
              style={{ padding: '30px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ color: 'var(--cyan)' }}>{cat.icon}</div>
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{cat.genre}</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {cat.games.map((game, idx) => (
                  <li key={idx} style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.03)', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                    {game}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tournaments Section */}
      <section id="tournaments">
        <h2 className="section-title text-gradient">Active Tournaments</h2>
        <div className="about-grid" style={{ gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr' }}>
          <div className="glass-panel" style={{ padding: '30px' }}>
            <h3 style={{ color: 'var(--cyan)', marginBottom: '20px' }}><IconTrophy style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Daily Challenges</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ color: 'white', fontWeight: 600 }}>Valorant 1v1 Arena</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Starts Daily @ 6:00 PM</div>
              </li>
              <li style={{ padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ color: 'white', fontWeight: 600 }}>FC 24 Single Elim</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Saturdays @ 2:00 PM</div>
              </li>
              <li style={{ padding: '15px 0' }}>
                <div style={{ color: 'white', fontWeight: 600 }}>Warzone Kill Race</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Sundays @ 5:00 PM</div>
              </li>
            </ul>
          </div>
          <div className="glass-panel" style={{ padding: '40px', background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.1) 0%, transparent 100%)' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>BATTLESTATION MASTERS</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '25px' }}>Our premier monthly LAN event featuring a $5,000 prize pool and professional sponsorship opportunities.</p>
            <div style={{ display: 'flex', gap: '30px', marginBottom: '30px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--cyan)' }}>12</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>TEAMS LEFT</div>
              </div>
              <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--cyan)' }}>$5K</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>PRIZE POOL</div>
              </div>
              <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--cyan)' }}>MAY 24</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>GRAND FINALE</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <button className="btn btn-primary">Register Squad</button>
              <button className="btn btn-secondary">Watch Streams</button>
            </div>
          </div>
        </div>

        {/* Hall of Fame Section */}
        <div style={{ marginTop: '60px' }}>
          <h3 className="section-title text-gradient" style={{ fontSize: '2rem', marginBottom: '40px' }}>Hall of Fame</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { name: 'SlayerX', game: 'Valorant', score: '382 Wins' },
              { name: 'Ghost99', game: 'Counter-Strike 2', score: '24 MVPs' },
              { name: 'NovaQueen', game: 'LoL', score: 'Diamond I' },
              { name: 'Nitro', game: 'Rocket League', score: 'Grand Champ' }
            ].map((hero, i) => (
              <div key={i} className="glass-panel" style={{ padding: '20px', textAlign: 'center', border: '1px solid rgba(0, 242, 254, 0.1)' }}>
                <div style={{ color: 'var(--cyan)', fontSize: '1.2rem', fontWeight: 800 }}>{hero.name}</div>
                <div style={{ color: 'white', fontSize: '0.8rem', margin: '5px 0' }}>{hero.game}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>{hero.score}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <h2 className="section-title text-gradient">Instant Booking</h2>
        
        <div className="booking-container glass-panel" style={{ padding: '50px', maxWidth: '1000px', margin: '0 auto' }}>
          {/* Bundle Offers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '50px' }}>
            {[
              { title: 'Squad Night', desc: '5 PCs for 4 hours + Drinks', price: '₹1500', color: 'var(--cyan)' },
              { title: 'All-Nighter', desc: '10 PM - 6 AM Extreme Play', price: '₹500', color: 'var(--purple)' }
            ].map((b, i) => (
              <div key={i} style={{ padding: '20px', borderRadius: '12px', border: `1px solid ${b.color}`, background: `${b.color}05`, position: 'relative' }}>
                <div style={{ position: 'absolute', top: -10, right: 10, background: b.color, color: '#000', fontSize: '0.7rem', fontWeight: 800, padding: '2px 10px', borderRadius: '10px' }}>POPULAR</div>
                <h4 style={{ color: b.color, marginBottom: '5px' }}>{b.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '10px' }}>{b.desc}</p>
                <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>{b.price}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
            <div className="form-group">
              <label className="form-label"><IconGamepad /> Gaming Zone</label>
              <select className="form-control" value={gameType} onChange={(e) => setGameType(e.target.value)}>
                <option value="pc">Elite Esports PC</option>
                <option value="console">Next-Gen Console</option>
                <option value="vr">VR Universe</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label"><IconUsers /> Squad Size</label>
              <input type="number" className="form-control" min="1" max="10" value={players} onChange={(e) => setPlayers(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label"><IconClock /> Session Time (Hrs)</label>
              <input type="number" className="form-control" min="1" max="12" value={hours} onChange={(e) => setHours(e.target.value)} />
            </div>
            <div style={{ alignSelf: 'center', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>TOTAL DUE</div>
              <div className="total-price" style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--cyan)', textShadow: '0 0 15px rgba(0,242,254,0.5)' }}>₹{price}</div>
            </div>
          </div>
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '50px', padding: '25px', fontSize: '1.2rem', fontWeight: 700 }}>RESERVE MY SESSION</button>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="footer-premium">
        <div className="footer-glow-overlay" />
        <div className="footer-main-container">
          <div className="footer-grid-layout">
            <div className="footer-brand-hub">
              <img src={heroImg} alt="logo" className="footer-brand-logo" />
              <p className="footer-brand-text">The world's most advanced gaming arena. Experience zero-lag gaming on enterprise-grade hardware in the heart of the city.</p>
              <div className="footer-social-links">
                <a href="#" className="social-icon-btn"><IconGamepad /></a>
                <a href="#" className="social-icon-btn"><IconTrophy /></a>
                <a href="#" className="social-icon-btn"><IconZap /></a>
              </div>
            </div>
            
            <div className="footer-nav-hub">
              <h4 className="footer-hub-title">NAVIGATE</h4>
              <ul className="footer-hub-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Our Arena</a></li>
                <li><a href="#zones">Gaming Zones</a></li>
                <li><a href="#titles">Game Titles</a></li>
                <li><a href="#tournaments">Tournaments</a></li>
              </ul>
            </div>

            <div className="footer-nav-hub">
              <h4 className="footer-hub-title">SUPPORT</h4>
              <ul className="footer-hub-list">
                <li><a href="#faq">FAQs</a></li>
                <li><a href="#booking">Booking Guide</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Play</a></li>
              </ul>
            </div>
            
            <div className="footer-contact-hub">
              <h4 className="footer-hub-title">VISIT US</h4>
              <ul className="footer-contact-list">
                <li><IconMapPin style={{ color: 'var(--cyan)' }} /> <span>Cyber City, Phase II, Bengaluru</span></li>
                <li><IconPhone style={{ color: 'var(--cyan)' }} /> <span>+91 99887 76655</span></li>
                <li><IconMail style={{ color: 'var(--cyan)' }} /> <span>arena@battlestation.in</span></li>
              </ul>
              <div className="footer-newsletter">
                <input type="email" placeholder="Get Arena Updates" className="newsletter-input" />
                <button className="newsletter-btn">JOIN</button>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom-bar">
            <div className="copyright-text">&copy; 2024 BATTLESTATION ARENA. ALL RIGHTS RESERVED.</div>
            <div className="footer-tech-meta">SYSTEM STATUS: <span style={{ color: '#00ff00' }}>ONLINE</span> • PING: 2MS</div>
          </div>
        </div>
      </footer>
      
      <style>{`
        @keyframes gridMove {
          from { transform: perspective(500px) rotateX(60deg) translateY(0); }
          to { transform: perspective(500px) rotateX(60deg) translateY(100px); }
        }
        body { cursor: none !important; }
        a, button, select, input { cursor: none !important; }
      `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
