import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownToLine, ArrowUpRight, AtSign, BriefcaseBusiness, CalendarDays, MapPin, Phone, Sparkles, Instagram, Facebook, Send, WalletCards, Globe } from 'lucide-react';
import './styles.css';

const skills = ['Tally', 'HTML', 'Java', 'Coding', 'Communication', 'Problem solving', 'Team collaboration', 'Adaptability', 'Organization', 'Attention to detail'];

function SectionTitle({ children, number }) {
  return <div className="section-title"><span>{number}</span><h2>{children}</h2><i /></div>;
}

function App() {
  return (
    <main className="site-shell">
      <nav className="topbar"><a className="wordmark" href="#top"><span className="mark">U</span> UPASANA YADAV <span className="wordmark-dot">/</span> RESUME</a><button className="download" onClick={() => window.print()}><ArrowDownToLine size={16} /> Save as PDF</button></nav>

      <article className="resume" id="top">
        <header className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={14} /> OPEN TO NEW OPPORTUNITIES</p>
            <h1>Upasana<br /><em>Yadav.</em></h1>
            <p className="intro">A curious, motivated professional who brings care, clarity, and a can-do spirit to every opportunity.</p>
          <div className="hero-links"><a href="mailto:hello@example.com"><AtSign size={15} /> hello@example.com</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a></div>
          </div>
          <div className="hero-art" aria-label="Decorative abstract portrait illustration">
            <div className="sun" /><div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="portrait"><div className="hair" /><div className="face"><span className="eye eye-one" /><span className="eye eye-two" /><span className="nose" /><span className="smile" /></div><div className="neck" /><div className="body" /></div>
            <div className="art-caption">A LITTLE ABOUT ME <span>✳</span></div>
          </div>
        </header>

        <section className="contact-strip"><div><MapPin size={16} /><span>India</span></div><div><Phone size={16} /><span>+91 00000 00000</span></div><div><AtSign size={16} /><span>hello@example.com</span></div></section>

        <section className="social-strip" aria-label="Social profiles and payment handle"><a href="https://example.com" target="_blank" rel="noreferrer"><Globe size={15} /> Website <ArrowUpRight size={12} /></a><a href="https://instagram.com/" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram <ArrowUpRight size={12} /></a><a href="https://facebook.com/" target="_blank" rel="noreferrer"><Facebook size={15} /> Facebook <ArrowUpRight size={12} /></a><a href="https://wa.me/" target="_blank" rel="noreferrer"><Phone size={15} /> WhatsApp <ArrowUpRight size={12} /></a><a href="https://t.me/" target="_blank" rel="noreferrer"><Send size={15} /> Telegram <ArrowUpRight size={12} /></a><a href="https://www.phonepe.com/" target="_blank" rel="noreferrer"><WalletCards size={15} /> PhonePe <ArrowUpRight size={12} /></a></section>

        <div className="content-grid">
          <div className="main-column">
            <section className="resume-section"><SectionTitle number="01">Profile</SectionTitle><p className="body-copy">I’m an enthusiastic and dependable individual eager to contribute, learn, and grow. I enjoy working with people, taking ownership of my work, and finding thoughtful solutions to everyday challenges. I’m looking for a role where I can bring a positive attitude and build meaningful experience.</p></section>
            <section className="resume-section"><SectionTitle number="02">Experience</SectionTitle><div className="empty-card"><div className="empty-icon"><BriefcaseBusiness size={20} /></div><div><h3>Coding &amp; Java</h3><p>Programming experience / personal projects</p></div></div><div className="experience-placeholder"><div className="timeline-dot" /><div><div className="entry-top"><h3>Java coding projects <span>— Personal / Academic</span></h3><span className="date"><CalendarDays size={13} /> 20XX — Present</span></div><p className="muted">Add the Java programs or coding projects you’ve worked on, the tools you used, and what you learned.</p></div></div></section>
            <section className="resume-section"><SectionTitle number="03">Education</SectionTitle><div className="entry-top education"><div><h3>Degree or qualification</h3><p className="muted">School / University · City</p></div><span className="date">20XX — 20XX</span></div><p className="education-note">Add your field of study, relevant coursework, or an academic achievement.</p></section>
          </div>
          <aside className="side-column">
            <section className="resume-section"><SectionTitle number="04">What I bring</SectionTitle><div className="skill-list">{skills.map((skill, i) => <div className="skill" key={skill}><span className="skill-index">0{i + 1}</span><span>{skill}</span><span className="skill-star">✳</span></div>)}</div></section>
            <section className="resume-section languages"><SectionTitle number="05">Languages</SectionTitle><div className="language"><span>Hindi</span><span className="level">Native</span></div><div className="language"><span>English</span><span className="level">Professional</span></div><p className="hint">Edit these to reflect your languages.</p></section>
            <div className="note-card"><span className="note-star">✳</span><p>“Small steps every day lead to meaningful growth.”</p><span className="note-by">A NOTE TO MYSELF</span></div>
          </aside>
        </div>
        <footer><span>UPASANA YADAV</span><span>THANK YOU FOR YOUR TIME <span className="footer-star">✳</span></span></footer>
      </article>
      <p className="edit-note">Personalize the placeholder details in <code>src/main.jsx</code> to make this resume your own.</p>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
