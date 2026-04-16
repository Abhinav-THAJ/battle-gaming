import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import heroImg from './assets/hero.png';
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
const IconMonitor = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>;
const IconGamepad = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>;
const IconHeadset = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>;
const IconChevronRight = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;
const IconMapPin = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const IconPhone = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const IconMail = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const IconUsers = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconClock = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const IconTrophy = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>;
const IconCpu = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 15h3"/><path d="M1 9h3"/><path d="M1 15h3"/></svg>;
const IconZap = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>;

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
    const rates: Record<string, number> = { pc: 15, console: 12, vr: 25 };
    const h = parseInt(hours) || 1;
    const p = parseInt(players) || 1;
    setPrice(rates[gameType] * h * p);
  }, [gameType, hours, players]);

  if (!mounted) return (
    <div style={{ background: '#050508', width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: 'var(--cyan)', fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '4px' }}>INITIALIZING ARENA...</div>
    </div>
  );

  return (
    <div className="app-container" style={{ position: 'relative', color: '#fff', background: '#050508', cursor: 'none' }}>
      <CustomCursor mounted={mounted} />
      <VisualBackground />

      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
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
      <section id="home" className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <motion.img 
              src={heroImg} 
              alt="Battlestation Logo" 
              style={{ width: '250px', filter: 'drop-shadow(0 0 20px var(--cyan))', mixBlendMode: 'screen' }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <h1 className="hero-title text-glow" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginTop: '30px' }}>The Ultimate Gaming Arena</h1>
          <p className="hero-subtitle" style={{ fontSize: '1.2rem', opacity: 0.8, color: 'var(--cyan)', marginTop: '10px' }}>PRO EQUIPMENT • NO LAG • ELITE COMMUNITY</p>
          <div className="hero-buttons">
            <a href="#booking" className="btn btn-primary">Book Now <IconChevronRight /></a>
            <a href="#zones" className="btn btn-secondary">Explore Zone</a>
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
              { icon: <IconMonitor />, title: 'Esports PCs', desc: 'RTX 4090 builds • 240Hz' },
              { icon: <IconGamepad />, title: '4K Consoles', desc: 'PS5 & Xbox Series X' },
              { icon: <IconHeadset />, title: 'VR Zones', desc: 'Full motion immersion' },
              { icon: <IconCpu />, title: 'Liquid Cooling', desc: 'Maximum performance' }
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
                <div className="pricing-price">${item.price}<span>/hr</span></div>
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
            <p style={{ color: 'var(--text-muted)', marginBottom: '25px' }}>Our premier monthly LAN event featuring a $5,000 prize pool.</p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>12</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>TEAMS LEFT</div>
              </div>
              <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>$5K</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>POOL</div>
              </div>
            </div>
            <button className="btn btn-primary" style={{ marginTop: '30px' }}>Register Squad</button>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <h2 className="section-title text-gradient">Instant Booking</h2>
        <div className="booking-container glass-panel" style={{ padding: '50px', maxWidth: '900px', margin: '0 auto' }}>
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
              <div className="total-price" style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--cyan)', textShadow: '0 0 15px rgba(0,242,254,0.5)' }}>${price}</div>
            </div>
          </div>
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '50px', padding: '25px', fontSize: '1.2rem', fontWeight: 700 }}>RESERVE MY SESSION</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 0', background: '#050508' }}>
        <div style={{ textAlign: 'center' }}>
          <img src={heroImg} alt="logo" style={{ height: '40px', mixBlendMode: 'screen', filter: 'grayscale(1) brightness(2)' }} />
          <p style={{ marginTop: '20px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>The Premier Destination for Elite Gamers.</p>
          <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px', color: 'var(--text-muted)' }}>
            <IconMapPin /> <IconPhone /> <IconMail />
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
    </div>
  );
}

export default App;
