/* Quiet Luxury Studio: editorial salon composition with asymmetric chapters, ivory surfaces, plum ink, and copper-rose actions. */
import { useState } from "react";
import { ArrowUpRight, Clock3, MapPin, Menu, MessageCircle, Phone, Scissors, Star, X } from "lucide-react";

const phone = "084258 26242";
const tel = "tel:+918425826242";
const whatsapp = "https://wa.me/918425826242?text=Hello%20The%20Studio%20Hub%20Family%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment.";
const mapUrl = "https://www.google.com/maps/search/?api=1&query=The+Studio+Hub+Family+Salon%2C+Sankalp+Siddhi+CHS%2C+Karanjade%2C+Panvel";

const femaleServices = [
  ["Hair Cut & Wash", "₹600"], ["Basic Hair Cut", "₹400"], ["Advance Hair Cut", "₹500"], ["Child Hair Cut", "₹250"], ["Hair Wash", "₹300"], ["Hair Wash + Blow Dry", "₹500"], ["Straightening", "₹600–₹1,000"], ["Tong Curls", "₹700–₹1,000"],
];
const menServices = [
  ["Hair Cut", "₹150"], ["Clean Shaving", "₹100"], ["Child Hair Cut", "₹150"], ["Beard Cut", "₹150"], ["Godrej Hair Colour", "₹350"], ["Beard Colour", "₹200"], ["L'Oréal INOA Colour", "₹700"], ["L'Oréal Majirel Colour", "₹500"], ["Highlights", "₹1,000"],
];
const colourServices = [
  ["Godrej · Touch Up", "₹750"], ["Godrej · Global Colour", "₹1,500–₹2,500"], ["Godrej · Global + Highlights", "₹3,000–₹4,000"], ["L'Oréal · Touch Up", "₹1,100"], ["L'Oréal · Global Colour", "₹3,000"], ["L'Oréal · Global + Highlights", "₹5,400"], ["L'Oréal · Balayage Colour", "₹2,500"], ["L'Oréal INOA · Touch Up", "₹1,500"], ["L'Oréal INOA · Global Colour", "₹4,000"], ["L'Oréal INOA · Global + Highlights", "₹6,000"],
];
const spaServices = [["L'Oréal Hair Spa", "₹600"], ["Moroccan Hair Spa", "₹800"], ["Keratin Spa", "₹700"], ["Head Massage · 20 min", "₹250"], ["Foot Massage · 20 min", "₹200"], ["Female Head Massage · 20 min", "₹350"]];
const treatmentServices = [["Keratin / Protein Treatment", "₹4,000–₹6,000"], ["Botox Treatment", "₹6,500–₹12,000"], ["Nanoplastia Treatment", "₹6,000–₹11,500"], ["Smoothing Treatment", "₹6,000–₹11,500"], ["Perming Treatment", "₹6,000–₹11,500"]];
const nailServices = [["Nail Cut & File", "₹150"], ["Basic", "₹500"], ["Sara", "₹700"], ["Raga", "₹1,000"], ["O3+", "₹1,200"], ["Ice-Cream", "₹1,500"]];

function PriceList({ items }: { items: string[][] }) {
  return <div className="price-list">{items.map(([name, price]) => <div className="price-row" key={name}><span>{name}</span><strong>{price}</strong></div>)}</div>;
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("women");
  const tabs = [{ id: "women", label: "Women’s hair" }, { id: "men", label: "Men’s grooming" }, { id: "colour", label: "Colour studio" }];
  const activeItems = activeTab === "women" ? femaleServices : activeTab === "men" ? menServices : colourServices;

  return <div className="site-shell">
    <div className="topline"><span><span className="status-dot" /> Open today · closes 10 pm</span><span className="topline-location">Karanjade · Panvel</span><a href={tel}>Call {phone}</a></div>
    <header className="nav-wrap">
      <a className="brand" href="#top" aria-label="The Studio Hub Family Salon home"><img src="/manus-storage/studio-hub-logo_73ecc0cb.png" alt="" /><span><b>The Studio Hub</b><small>FAMILY SALON · UNISEX</small></span></a>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#story" onClick={() => setMenuOpen(false)}>Our approach</a><a href="#visit" onClick={() => setMenuOpen(false)}>Visit us</a>
        <a className="nav-book" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp us</a>
      </nav>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow">A considered beauty ritual, close to home</p><h1>Your everyday look,<br /><em>considered beautifully.</em></h1><p className="hero-description">Professional hair, colour, spa, grooming, manicure and pedicure care for every member of your family.</p><div className="hero-actions"><a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Reserve your chair <ArrowUpRight size={18} /></a><a className="text-link" href="#services">Explore services <span>↓</span></a></div><div className="hero-note"><span className="rating"><Star size={15} fill="currentColor" /> 5.0</span><span>26 local reviews</span><span className="rule" /><span>Unisex · Karanjade</span></div></div>
        <div className="hero-visual"><img src="/manus-storage/studio-hub-hero_480f3458.jpg" alt="Woman with softly styled hair in a warm salon setting" /><div className="hero-stamp"><span>THE</span><b>SH</b><span>STUDIO HUB</span></div><div className="hero-caption">Hair · Beauty · Grooming</div></div>
      </section>

      <section className="intro-band" id="story"><div className="intro-mark">✦</div><div><SectionLabel number="01">The studio feeling</SectionLabel><h2>Good hair days<br /><em>start here.</em></h2></div><div className="intro-text"><p>At The Studio Hub, we believe a salon visit should feel personal, unrushed and worth looking forward to. Our team pairs quality products with thoughtful technique, so you leave feeling like yourself—just a little more polished.</p><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Talk to our team <ArrowUpRight size={16} /></a></div></section>

      <section className="services-section" id="services"><div className="section-heading"><div><SectionLabel number="02">The menu</SectionLabel><h2>Make time<br /><em>for you.</em></h2></div><p>From a precise cut to a full colour transformation, find your next ritual below. Prices are transparent, and our team is happy to guide you.</p></div><div className="service-tabs">{tabs.map(tab => <button key={tab.id} className={activeTab === tab.id ? "active" : ""} onClick={() => setActiveTab(tab.id)}>{tab.label}<ArrowUpRight size={15} /></button>)}</div><div className="service-feature"><div className="service-image"><img src={activeTab === "colour" ? "/manus-storage/studio-hub-colour_ca8bf630.jpg" : "/manus-storage/studio-hub-detail_e2957826.jpg"} alt="Salon beauty detail" /></div><div className="service-prices"><div className="price-heading"><span>01 / 03</span><h3>{tabs.find(t => t.id === activeTab)?.label}</h3><p>{activeTab === "women" ? "Cuts, washes and styling that move with you." : activeTab === "men" ? "Clean cuts and considered grooming for every day." : "Dimensional colour, expert finishes, beautiful results."}</p></div><PriceList items={activeItems} /></div></div></section>

      <section className="rituals-section"><div className="rituals-image"><img src="/manus-storage/studio-hub-spa_08a05a22.jpg" alt="Hair spa ritual with warm towels and salon products" /><span className="vertical-note">SLOW DOWN · RESET · SHINE</span></div><div className="rituals-content"><SectionLabel number="03">The rituals</SectionLabel><h2>More than<br /><em>a service.</em></h2><div className="ritual-block"><h3>Hair spa & massage <span>02</span></h3><PriceList items={spaServices} /></div><div className="ritual-block"><h3>Hair treatments <span>03</span></h3><PriceList items={treatmentServices} /></div></div></section>

      <section className="nails-section"><div className="nails-copy"><SectionLabel number="04">The finishing touch</SectionLabel><h2>Hands that<br /><em>say hello.</em></h2><p>Complete your visit with a considered manicure or pedicure, from clean and classic to an indulgent ice-cream ritual.</p><a className="button button-outline" href={whatsapp} target="_blank" rel="noreferrer">Book a nail ritual <ArrowUpRight size={17} /></a></div><div className="nails-cards"><div className="nail-card"><img src="/manus-storage/studio-hub-detail_e2957826.jpg" alt="Natural manicure detail" /><h3>Manicure</h3><PriceList items={nailServices.map(([name, price]) => [name + " Manicure", price])} /></div><div className="nail-card nail-card-offset"><div className="nail-number">05</div><h3>Pedicure</h3><PriceList items={nailServices.map(([name, price]) => [name + " Pedicure", price])} /></div></div></section>

      <section className="visit-section" id="visit"><div className="visit-copy"><SectionLabel number="05">Come by</SectionLabel><h2>See you<br /><em>at the studio.</em></h2><p>Find us near Sunrise Hospital in Karanjade. Walk in when you can, or reserve your preferred time over WhatsApp.</p><div className="visit-actions"><a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp us</a><a className="button button-ghost" href={tel}><Phone size={17} /> {phone}</a></div></div><div className="visit-card"><div className="visit-card-top"><MapPin size={21} /><span>Our address</span></div><address>Sankalp Siddhi CHS,<br />Sector 5A, Plot No. 59,<br />Near Sunrise Hospital,<br />Karanjade, Panvel<br />Maharashtra 410206</address><a className="directions" href={mapUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16} /></a><div className="hours"><Clock3 size={18} /><div><b>Open today</b><span>Until 10:00 pm</span></div></div></div></section>
    </main>

    <footer><div className="footer-brand"><img src="/manus-storage/studio-hub-logo_73ecc0cb.png" alt="" /><span><b>The Studio Hub</b><small>FAMILY SALON · UNISEX</small></span></div><p>Your style, our passion.</p><div className="footer-links"><a href={tel}>Call</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href={mapUrl} target="_blank" rel="noreferrer">Directions</a></div></footer>
    <div className="mobile-dock"><a href={tel}><Phone size={17} /> Call</a><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a></div>
  </div>;
}
