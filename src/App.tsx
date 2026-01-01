import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Database, 
  Cloud, 
  Trophy, 
  ChevronRight,
  Terminal,
  Cpu,
  Layers,
  Building2,
  Rocket,
  ShieldCheck,
  User,
  Phone,
  Languages
} from 'lucide-react';
import profilePicUrl from  './profile/rohit.png';

/**
 * Interface for Project items
 */
interface Project {
  title: string;
  company: string;
  description: string;
  tech: string[];
  icon: React.ReactNode;
  highlight: string;
}

/**
 * Interface for Skill Groups
 */
interface SkillGroup {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' }
  ];

  const projects: Project[] = [
    {
      title: "Secure File Transfer (SFT)",
      company: "Thomson Reuters",
      description: "A flagship enterprise SaaS platform for secure multi-tenant document exchange. I personally owned and developed the Document Storage and Message Threading modules.",
      tech: ["TypeScript", ".NET", "C#", "Dapper", "Docker", "Signal-R"],
      icon: <ShieldCheck size={24} />,
      highlight: "Enterprise Scale: Managing secure data for a global user base"
    },
    {
      title: "Data Reconciliation Engine",
      company: "Internal Tool",
      description: "Automated reconciliation tool designed to detect and resolve inconsistencies between billing systems and multi-tenant client data.",
      tech: ["C#", "SQL Server", "Dapper", "Algorithms"],
      icon: <Terminal size={24} />,
      highlight: "Accuracy: 99% improvement in auditing efficiency"
    },
    {
      title: "Global Search Hackathon",
      company: "Internal Award",
      description: "Won 1st Place by building a high-performance multi-tenant search system using document metadata and caching in under 5 hours.",
      tech: ["TypeScript", "Azure Search", "Redis", "C#"],
      icon: <Trophy size={24} />,
      highlight: "Performance: Ranked #1 among internal engineering teams"
    }
  ];

  const skillGroups: SkillGroup[] = [
    {
      title: "Backend & Systems",
      icon: <Database size={24} style={{ color: '#3b82f6' }} />,
      skills: [".NET", "C#", "Dapper", "Microservices", "Signal-R", "SQL Server"]
    },
    {
      title: "Frontend & UI",
      icon: <Code2 size={24} style={{ color: '#10b981' }} />,
      skills: ["React.js", "TypeScript", "Redux Toolkit", "SCSS / CSS3", "Modern UI/UX"]
    },
    {
      title: "Cloud & SaaS DevOps",
      icon: <Cloud size={24} style={{ color: '#0ea5e9' }} />,
      skills: ["Docker", "Azure Cloud", "Azure DevOps", "Git", "CI/CD", "Snyk Security"]
    }
  ];

  const spokenLanguages = [
    { name: "English", level: "Professional" },
    { name: "Kannada", level: "Native" },
    { name: "Hindi", level: "Fluent" }
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="portfolio-wrapper">
      <style>{`
        :root {
          --bg-dark: #020617;
          --bg-card: #0f172a;
          --bg-card-inner: #020617;
          --accent: #3b82f6;
          --accent-hover: #2563eb;
          --text-main: #f8fafc;
          --text-dim: #94a3b8;
          --border: #1e293b;
          --success: #10b981;
          --max-width: 100%;
          --side-padding: 6%;
        }

        @media (max-width: 768px) {
          :root {
            --side-padding: 1.5rem;
          }
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .portfolio-wrapper {
          background-color: var(--bg-dark);
          color: var(--text-main);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          min-height: 100vh;
          line-height: 1.6;
        }

        nav {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 100;
          transition: all 0.3s ease;
          padding: 1.5rem 0;
        }

        nav.scrolled {
          background: rgba(2, 6, 23, 0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          padding: 1rem 0;
        }

        .nav-container {
          max-width: var(--max-width);
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 var(--side-padding);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent);
          font-weight: 700;
          font-size: 1.25rem;
        }

        .nav-links {
          display: none;
        }

        @media (min-width: 768px) {
          .nav-links { display: flex; gap: 2rem; }
        }

        .nav-link {
          background: none;
          border: none;
          color: var(--text-dim);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.2s;
        }

        .nav-link.active, .nav-link:hover { color: var(--text-main); }

        .btn-connect {
          background: var(--accent);
          color: white;
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 600;
          transition: background 0.2s;
          cursor: pointer;
          border: none;
        }

        .btn-connect:hover {
          background: var(--accent-hover);
        }

        /* Hero Section */
        .hero {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 12rem var(--side-padding) 8rem;
          display: grid;
          gap: 4rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .hero { grid-template-columns: 1.2fr 0.8fr; }
        }

        .hero-content {
          order: 2;
        }

        @media (min-width: 1024px) {
          .hero-content { order: 1; }
        }

        .hero-visuals {
          order: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        @media (min-width: 1024px) {
          .hero-visuals { order: 2; align-items: flex-end; }
        }

        .profile-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-pic {
          width: 300px;
          height: 250px;
          border-radius: 1.5rem;
          border: 1px solid var(--border);
          padding: 4px;
          object-fit: cover;
          object-position: top; 
          background: var(--bg-card);
          z-index: 2;
          transition: border-color 0.3s ease;
        }

        .profile-container:hover .profile-pic {
          border-color: var(--accent);
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.2);
          color: var(--accent);
          padding: 0.4rem 1rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 2rem;
        }

        .hero h1 {
          font-size: clamp(3rem, 6vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .hero h1 span {
          color: var(--accent);
        }

        .hero-desc {
          font-size: 1.25rem;
          color: var(--text-dim);
          max-width: 600px;
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .code-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 1.5rem;
          width: 100%;
          max-width: 420px;
          position: relative;
        }

        .code-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .code-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--border); }

        pre {
          font-family: 'Fira Code', 'Courier New', monospace;
          font-size: 0.85rem;
          color: #94a3b8;
        }

        section {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 6rem var(--side-padding);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }

        .underline {
          width: 60px;
          height: 4px;
          background: var(--accent);
          border-radius: 2px;
          margin-bottom: 3.5rem;
        }

        .experience-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 1.5rem;
          padding: 3rem;
        }

        .timeline {
          position: relative;
          padding-left: 2.5rem;
          border-left: 1px solid var(--border);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 4rem;
        }

        .timeline-item:last-child { margin-bottom: 0; }

        .timeline-node {
          position: absolute;
          left: -2.9rem;
          top: 0.25rem;
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          background: var(--accent);
          border: 4px solid var(--bg-card);
        }

        .grid { display: grid; gap: 2.5rem; }
        @media (min-width: 768px) { .grid-3 { grid-template-columns: repeat(3, 1fr); } }

        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 1.25rem;
          padding: 2.25rem;
          transition: border-color 0.3s ease, transform 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          border-color: var(--accent);
          transform: translateY(-4px);
        }

        .project-icon {
          color: var(--accent);
          margin-bottom: 1.5rem;
        }

        .highlight-tag {
          display: inline-flex;
          align-items: center;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--success);
          margin-top: 1.25rem;
        }

        .skill-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 2.5rem;
          border-radius: 1.5rem;
        }

        .skill-pill {
          display: inline-block;
          background: var(--bg-card-inner);
          border: 1px solid var(--border);
          padding: 0.6rem 1.1rem;
          border-radius: 0.6rem;
          font-size: 0.9rem;
          margin: 0.3rem;
          transition: all 0.2s;
        }

        .skill-pill:hover { border-color: var(--accent); color: white; }

        .contact-methods {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .contact-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.2rem 2.5rem;
          border-radius: 0.75rem;
          font-weight: 700;
          transition: all 0.2s ease;
          text-decoration: none;
          font-size: 1rem;
        }

        .contact-btn.primary {
          background: var(--accent);
          color: white;
        }

        .contact-btn.primary:hover {
          background: var(--accent-hover);
        }

        .contact-btn.secondary {
          background: var(--bg-card);
          color: var(--text-main);
          border: 1px solid var(--border);
        }

        .contact-btn.secondary:hover {
          border-color: var(--accent);
        }

        .languages-container {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid var(--border);
        }

        .lang-badge {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          padding: 1.25rem 2rem;
          border-radius: 1rem;
          margin: 0.5rem;
          min-width: 160px;
        }

        footer {
          text-align: center;
          padding: 10rem var(--side-padding) 6rem;
          border-top: 1px solid var(--border);
        }
      `}</style>

      {/* Navigation */}
      <nav className={isScrolled ? 'scrolled' : ''}>
        <div className="nav-container">
          <div className="logo"><Rocket size={24} /> ROHIT.BN</div>
          <div className="nav-links">
            {navLinks.map(link => (
              <button key={link.id} onClick={() => scrollTo(link.id)} className={`nav-link ${activeSection === link.id ? 'active' : ''}`}>
                {link.name}
              </button>
            ))}
          </div>
          <button onClick={() => scrollTo('contact')} className="btn-connect">Connect</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="badge">Available for SaaS Challenges</div>
          <h1>Engineering <span>Enterprise</span> SaaS.</h1>
          <p className="hero-desc">
            Full Stack Engineer at <strong>Thomson Reuters</strong>. Specialist in building high-security, multi-tenant architectures using <strong>TypeScript</strong> and <strong>C# / .NET</strong>.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="https://github.com/rohit97433" style={{ color: 'inherit' }} title="GitHub"><Github size={24} /></a>
            <a href="https://linkedin.com/in/rohit-b-n-132789225" style={{ color: 'inherit' }} title="LinkedIn"><Linkedin size={24} /></a>
            <a href="mailto:rohi97433@gmail.com" style={{ color: 'inherit' }} title="Email"><Mail size={24} /></a>
            <a href="tel:+917483932110" style={{ color: 'inherit' }} title="Call"><Phone size={24} /></a>
          </div>
        </div>
        
        <div className="hero-visuals">
          <div className="profile-container">
            <img 
              src={profilePicUrl} 
              alt="Rohit B N" 
              className="profile-pic"
              onError={(e) => {
                e.currentTarget.src = "https://ui-avatars.com/api/?name=Rohit+BN&background=0f172a&color=3b82f6&size=200";
              }}
            />
          </div>
          
          <div className="code-card">
            <div className="code-header">
              <div className="code-dot"></div>
              <div className="code-dot"></div>
              <div className="code-dot"></div>
              <span style={{ marginLeft: '0.5rem', opacity: 0.5, fontSize: '0.75rem' }}>RohitSaaS.ts</span>
            </div>
            <pre>
              <code>
                <span style={{ color: '#60a5fa' }}>interface</span> <span style={{ color: '#f8fafc' }}>SaaSEngineer</span> {'{\n'}
                {'  '}readonly stack: <span style={{ color: '#fb923c' }}>['TypeScript', 'C#']</span>;{'\n'}
                {'  '}dataAccess: <span style={{ color: '#fb923c' }}>'Dapper'</span>;{'\n'}
                {'  '}architecture: <span style={{ color: '#fb923c' }}>'Multi-tenant'</span>;{'\n'}
                {'  '}isScalable: <span style={{ color: '#60a5fa' }}>true</span>;{'\n'}
                {'}'}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2 className="section-title">The Trajectory</h2>
        <div className="underline"></div>
        <div className="experience-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '2.5rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ background: 'rgba(59,130,246,0.1)', color: 'var(--accent)', padding: '1rem', borderRadius: '1rem' }}><Building2 size={36} /></div>
              <div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Thomson Reuters</h3>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>acquired SafeSend Technologies</p>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontWeight: 800, color: 'var(--accent)', fontSize: '1.1rem' }}>Software Engineer</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', fontWeight: 600 }}>Feb 2023 — Present</p>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-node"></div>
              <h4 style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem' }}>Software Engineer</h4>
              <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1.25rem' }}>June 2024 — Present</p>
              <p style={{ color: 'var(--text-dim)', fontSize: '1.05rem', maxWidth: '850px' }}>
                Driving the full-stack evolution of the SFT platform using <strong>TypeScript</strong> and <strong>C#</strong>. Orchestrated mission-critical storage architectures and real-time synchronization modules for enterprise-grade scalability.
              </p>
            </div>
            <div className="timeline-item">
              <div className="timeline-node" style={{ background: 'var(--success)' }}></div>
              <h4 style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem' }}>Associate Software Engineer</h4>
              <p style={{ color: 'var(--success)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1.25rem' }}>Sept 2023 — June 2024</p>
              <p style={{ color: 'var(--text-dim)', fontSize: '1.05rem', maxWidth: '850px' }}>Architected multi-tenant RESTful APIs using <strong>Dapper</strong> and migrated legacy MVC flows to high-performance React architectures.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-node" style={{ background: '#64748b' }}></div>
              <h4 style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem' }}>Graduate Engineer Trainee</h4>
              <p style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1.25rem' }}>Feb 2023 — Sept 2023</p>
              <p style={{ color: 'var(--text-dim)', fontSize: '1.05rem', maxWidth: '850px', fontStyle: 'italic' }}>Fast-tracked entry into the enterprise product team, delivering critical fixes, automated security scripts, and platform feature MVPs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="section-title">Core Contributions</h2>
        <div className="underline"></div>
        <div className="grid grid-3">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <div className="project-icon">{p.icon}</div>
              <h3 style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem' }}>{p.title}</h3>
              <p style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '1.25rem', opacity: 0.6 }}>{p.company}</p>
              <p style={{ color: 'var(--text-dim)', fontSize: '1rem', flexGrow: 1, marginBottom: '1.5rem', lineHeight: '1.7' }}>{p.description}</p>
              <div className="highlight-tag"><ChevronRight size={16} /> {p.highlight}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '1.5rem' }}>
                {p.tech.map(t => <span key={t} style={{ fontSize: '0.7rem', fontWeight: 700, border: '1px solid var(--border)', padding: '0.3rem 0.7rem', borderRadius: '4px', color: 'var(--text-dim)' }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2 className="section-title">Technical Stack</h2>
        <div className="underline"></div>
        <div className="grid grid-3">
          {skillGroups.map((group, i) => (
            <div key={i} className="skill-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2.25rem' }}>
                {group.icon}
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{group.title}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {group.skills.map(s => <span key={s} className="skill-pill">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact">
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '3.5rem', letterSpacing: '-0.02em' }}>Ready to scale <br/><span style={{ color: 'var(--accent)' }}>Enterprise SaaS.</span></h2>
        
        <div className="contact-methods">
          <a href="mailto:rohi97433@gmail.com" className="contact-btn primary">
            <Mail size={20} /> Email Me
          </a>
          <a href="tel:+917483932110" className="contact-btn secondary">
            <Phone size={20} /> Call Me
          </a>
          <a href="https://linkedin.com/in/rohit-b-n-132789225" target="_blank" rel="noreferrer" className="contact-btn secondary">
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>

        <div className="contact-details">
          <p style={{ fontSize: '1rem' }}>Email: <strong style={{ color: 'white' }}>rohi97433@gmail.com</strong></p>
          <p style={{ fontSize: '1rem' }}>Phone: <strong style={{ color: 'white' }}>+91 7483932110</strong></p>
        </div>

        <div className="languages-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem', color: 'var(--text-dim)' }}>
            <Languages size={22} />
            <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Communication & Proficiency</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {spokenLanguages.map((lang, idx) => (
              <div key={idx} className="lang-badge">
                <span style={{ fontWeight: 700, color: 'white' }}>{lang.name}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent)', textTransform: 'uppercase', marginTop: '0.25rem' }}>{lang.level}</span>
              </div>
            ))}
          </div>
        </div>

        <p style={{ marginTop: '8rem', fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700 }}>
          Engineered by Rohit B N. © 2025
        </p>
      </footer>
    </div>
  );
};

export default App;