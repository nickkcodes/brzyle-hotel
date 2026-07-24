import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  component: Landing,
});

/* ---------- SVG Icons ---------- */
const Icon = {
  Wifi: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></svg>
  ),
  Shower: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h4v4"/><path d="M8 4a6 6 0 0 1 6 6v2"/><path d="M14 12h8"/><path d="M17 15v2"/><path d="M14 18v2"/><path d="M20 15v2"/><path d="M18 21v1"/></svg>
  ),
  Elevator: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 8l3-3 3 3"/><path d="M9 16l3 3 3-3"/></svg>
  ),
  TV: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M10 9l4 3-4 3z" fill="currentColor"/><path d="M8 22h8"/></svg>
  ),
  Car: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17h14l-1.5-6a2 2 0 0 0-2-1.5h-7A2 2 0 0 0 6.5 11L5 17z"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/></svg>
  ),
  Mountain: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 20l6-10 4 6 3-4 5 8z"/><circle cx="17" cy="5" r="2"/></svg>
  ),
  Bed: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20v6H2z"/><path d="M2 18v2"/><path d="M22 18v2"/><path d="M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><circle cx="8" cy="10" r="1.5"/></svg>
  ),
  Home: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>
  ),
  Camera: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
  ),
};

/* ---------- Gallery data ---------- */
const galleryItems = [
  { h: 220, bg: "linear-gradient(135deg, #0D1B2A 0%, #1A4A6B 100%)", label: "Cozy Living Room" },
  { h: 280, bg: "linear-gradient(135deg, #2C3E50 0%, #C9A84C 100%)", label: "Mountain View Balcony" },
  { h: 240, bg: "linear-gradient(135deg, #1A2E42 0%, #4A6741 100%)", label: "Premium Bedroom" },
  { h: 300, bg: "linear-gradient(135deg, #C9A84C 0%, #8B6914 100%)", label: "Modern Bathroom" },
  { h: 260, bg: "linear-gradient(135deg, #0D1B2A 0%, #8B7355 100%)", label: "Dining Area" },
  { h: 220, bg: "linear-gradient(135deg, #1A2E42 0%, #C9A84C 100%)", label: "Hallway & Lobby" },
  { h: 290, bg: "linear-gradient(135deg, #2C3E50 0%, #4A6741 100%)", label: "City View Window" },
  { h: 250, bg: "linear-gradient(135deg, #8B7355 0%, #0D1B2A 100%)", label: "Kitchen Space" },
];

const amenities = [
  { icon: <Icon.Wifi />, title: "Free High-Speed Wi-Fi", desc: "Stay connected with blazing-fast fiber internet — perfect for remote workers and streamers." },
  { icon: <Icon.Shower />, title: "Hot & Cold Showers", desc: "Start every Baguio morning refreshed with reliably hot water and quality bathroom fixtures." },
  { icon: <Icon.Elevator />, title: "Elevator & PWD Ramps", desc: "Fully accessible property with a working elevator and PWD-compliant ramps for all guests." },
  { icon: <Icon.TV />, title: "Smart TV — Netflix & YouTube", desc: "Unwind in style with a Smart TV pre-loaded with Netflix and YouTube access in every unit." },
  { icon: <Icon.Car />, title: "Safe & Secure Paid Parking", desc: "Travel with your vehicle stress-free. Secure, on-site paid parking available for all guests." },
  { icon: <Icon.Mountain />, title: "Mountain Air & City Views", desc: "Wake up to panoramic Baguio city views and the crisp, clean air of the Cordillera highlands." },
];

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#rooms", label: "Rooms" },
    { href: "#amenities", label: "Amenities" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <span className="brand-name">Bryzle Homestay</span>
          <span className="brand-tag">Baguio City</span>
        </a>
        <div className="nav-links desktop">
          {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          <a href="#contact" className="btn btn-gold" style={{ padding: "10px 20px", fontSize: 13 }}>Book Now</a>
        </div>
        <button className="hamburger" aria-label="menu" onClick={() => setOpen(true)}>☰</button>
        <div className={`mobile-menu ${open ? "open" : ""}`}>
          <button className="mobile-close" aria-label="close" onClick={() => setOpen(false)}>✕</button>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-gold" onClick={() => setOpen(false)}>Book Now</a>
        </div>
      </div>
    </nav>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const stars = Array.from({ length: 14 }).map((_, i) => ({
    top: `${(i * 37) % 90 + 5}%`,
    left: `${(i * 53) % 95 + 2}%`,
    size: (i % 3) + 2,
  }));
  return (
    <section id="top" className="hero">
      <div className="hero-radial" />
      <div className="hero-stars" aria-hidden="true">
        {stars.map((s, i) => (
          <span key={i} className="hero-star" style={{ top: s.top, left: s.left, width: s.size, height: s.size }} />
        ))}
      </div>
      <svg className="hero-mountains" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ height: 280 }}>
        <path fill="#1A2E42" d="M0,220 L180,120 L320,200 L500,80 L680,180 L860,100 L1040,200 L1220,120 L1440,220 L1440,320 L0,320 Z" />
        <path fill="#0D1B2A" opacity="0.7" d="M0,260 L200,180 L360,240 L560,160 L740,230 L940,170 L1140,240 L1320,190 L1440,250 L1440,320 L0,320 Z" />
      </svg>
      <div className="hero-content">
        <span className="pill-badge">Baguio City, Philippines</span>
        <h1>
          Your Premium Modern <span className="hero-underline">Mountain Escape</span> in Baguio
        </h1>
        <p className="hero-sub">
          Experience the perfect balance of modern comfort, warm hospitality, and the refreshing cool
          mountain air of the Cordilleras — all within one elegant retreat.
        </p>
        <div className="hero-ctas">
          <a href="#" className="btn btn-gold">Message Us on Messenger</a>
          <a href="#pricing" className="btn btn-outline-white">View Available Units</a>
        </div>
        <div className="hero-trust">5-Star Rated · Walking distance to SM Baguio · Mountain View</div>
      </div>
      <div className="scroll-indicator" aria-hidden="true">⌄</div>
    </section>
  );
}

/* ---------- Gallery ---------- */
function Gallery() {
  return (
    <section id="rooms" className="section gallery-bg">
      <div className="container">
        <div className="section-header">
          <div className="overline">Gallery</div>
          <h2>Moments at Bryzle</h2>
          <p>Every corner of Bryzle Homestay is designed with your comfort and Instagram feed in mind.</p>
        </div>
        <div className="masonry">
          {galleryItems.map((g, i) => (
            <div key={i} className="gcard" style={{ height: g.h, background: g.bg }}>
              <div className="gcard-label">
                <Icon.Camera />
                <span>{g.label}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="#" className="btn btn-outline-navy">More Photos on Facebook</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Amenities ---------- */
function Amenities() {
  return (
    <section id="amenities" className="section">
      <div className="container">
        <div className="section-header">
          <div className="overline">Amenities</div>
          <h2>Everything You Need, Nothing You Don't</h2>
          <p>Designed for the modern traveler — whether you're here for leisure, work, or a family getaway.</p>
        </div>
        <div className="amen-grid">
          {amenities.map((a) => (
            <div key={a.title} className="amen-card">
              <div className="amen-icon">{a.icon}</div>
              <h4>{a.title}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */
function Pricing() {
  const standardFeatures = [
    "Free High-Speed Wi-Fi",
    "Hot & Cold Shower",
    "Smart TV (Netflix & YouTube)",
    "Air Conditioning",
    "Daily Housekeeping",
  ];
  const familyFeatures = [
    "Free High-Speed Wi-Fi",
    "Hot & Cold Shower",
    "Smart TV (Netflix & YouTube)",
    "Separate Living Area",
    "Kitchenette Access",
    "Air Conditioning",
    "Daily Housekeeping",
  ];
  return (
    <section id="pricing" className="section pricing-bg">
      <div className="container">
        <div className="section-header">
          <div className="overline">Rates & Packages</div>
          <h2>Simple, Transparent Pricing</h2>
          <p>Baseline rates for your reference. Contact us for exact dates-based quotation.</p>
        </div>
        <div className="pricing-grid">
          <div className="price-card">
            <span className="badge-top">Standard</span>
            <div style={{ color: "var(--gold)" }}><Icon.Bed /></div>
            <h3 style={{ fontSize: 24 }}>Standard Room</h3>
            <div style={{ color: "var(--text-muted)", fontSize: 14 }}>Up to 2 Guests</div>
            <div className="price-main"><span className="amt">₱1,500</span><span className="per">/night</span></div>
            <div className="divider" />
            <ul className="checklist">
              {standardFeatures.map((f) => <li key={f}><span className="check">✓</span> {f}</li>)}
            </ul>
            <a href="#contact" className="btn btn-outline-navy" style={{ marginTop: "auto" }}>Inquire About This Room</a>
          </div>
          <div className="price-card featured">
            <span className="badge-top pill">Most Popular</span>
            <div style={{ color: "var(--gold)" }}><Icon.Home /></div>
            <h3 style={{ fontSize: 24 }}>Family Suite</h3>
            <div style={{ color: "var(--gold-light)", fontSize: 14 }}>Up to 4–6 Guests</div>
            <div className="price-main"><span className="amt">₱3,500</span><span className="per">/night</span></div>
            <div className="divider" />
            <ul className="checklist">
              {familyFeatures.map((f) => <li key={f}><span className="check">✓</span> {f}</li>)}
            </ul>
            <a href="#contact" className="btn btn-gold" style={{ marginTop: "auto" }}>Inquire About This Suite</a>
          </div>
        </div>
        <div className="disclaimer">
          * Rates shown are baseline estimates intended for reference only. Please message management directly to receive an exact quotation tailored to your specific stay dates, group size, and seasonal availability.
        </div>
      </div>
    </section>
  );
}

/* ---------- Form ---------- */
type FormState = {
  name: string; email: string; phone: string; guests: string;
  checkin: string; checkout: string; message: string;
};
type Errors = Partial<Record<keyof FormState, string>>;

function InquiryForm() {
  const [f, setF] = useState<FormState>({ name: "", email: "", phone: "", guests: "", checkin: "", checkout: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.value });

  const validate = (): Errors => {
    const e: Errors = {};
    if (!f.name.trim()) e.name = "Name is required";
    if (!f.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Invalid email address";
    const digits = f.phone.replace(/\D/g, "");
    if (!f.phone.trim()) e.phone = "Phone is required";
    else if (digits.length < 10) e.phone = "Phone must be at least 10 digits";
    const g = Number(f.guests);
    if (!f.guests) e.guests = "Guest count required";
    else if (isNaN(g) || g < 1 || g > 20) e.guests = "Between 1 and 20";
    if (!f.checkin) e.checkin = "Check-in required";
    if (!f.checkout) e.checkout = "Check-out required";
    else if (f.checkin && f.checkout <= f.checkin) e.checkout = "Must be after check-in";
    return e;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <div className="overline">Book Your Stay</div>
            <h2>Check Availability</h2>
          </div>
          <div className="form-card">
            <div className="success-card">✓ Inquiry Submitted! We'll contact you within 24 hours.</div>
          </div>
        </div>
      </section>
    );
  }

  const field = (key: keyof FormState, label: string, type = "text", extra: Record<string, unknown> = {}, full = false) => (
    <div className={`field ${full ? "full" : ""} ${errors[key] ? "error" : ""}`}>
      <label>{label} <span className="req">*</span></label>
      <input type={type} value={f[key]} onChange={update(key)} {...extra} />
      {errors[key] && <div className="err-msg">{errors[key]}</div>}
    </div>
  );

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="overline">Book Your Stay</div>
          <h2>Check Availability</h2>
          <p>Fill out the form below and our team will get back to you within 24 hours with a personalized quote.</p>
        </div>
        <form className="form-card" onSubmit={onSubmit} noValidate>
          <div className="form-grid">
            {field("name", "Full Name")}
            {field("email", "Email Address", "email")}
            {field("phone", "Phone Number", "tel")}
            {field("guests", "Number of Guests", "number", { min: 1, max: 20 })}
            {field("checkin", "Check-in Date", "date")}
            {field("checkout", "Check-out Date", "date")}
            <div className={`field full ${errors.message ? "error" : ""}`}>
              <label>Special Requests / Message</label>
              <textarea rows={4} value={f.message} onChange={update("message")}
                placeholder="E.g., room preferences, accessibility needs, early check-in request..." />
            </div>
          </div>
          <button type="submit" className="submit-btn">Submit Inquiry →</button>
        </form>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="foot-brand">Bryzle Homestay</div>
            <div className="foot-tag">Baguio City</div>
            <p style={{ marginTop: 16, color: "#B0BEC5", fontSize: 14 }}>
              Your premium mountain escape in the heart of the Cordilleras.
            </p>
            <a href="tel:09640606554" className="phone-pill">Call / Text: 09640606554</a>
            <div style={{ color: "#B0BEC5", fontSize: 14 }}>bryzlehomestay@gmail.com</div>
            <div className="socials">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Messenger">M</a>
            </div>
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul className="foot-links">
              <li><a href="#top">Home</a></li>
              <li><a href="#rooms">Rooms</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <h5 style={{ marginTop: 28 }}>Operating Hours</h5>
            <div style={{ color: "#B0BEC5", fontSize: 14 }}>
              Daily: 7:00 AM – 10:00 PM<br />Front Desk Always Available
            </div>
          </div>
          <div>
            <h5>Find Us</h5>
            <div className="map-placeholder">
              <div className="pin">◆</div>
              <div>Baguio City, Philippines</div>
              <a href="#">View on Google Maps →</a>
            </div>
            <div style={{ color: "#B0BEC5", fontSize: 13, marginTop: 12 }}>
              SM City Baguio Area, Baguio City, Benguet, Philippines 2600
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© 2025 Bryzle Homestay Baguio City. All Rights Reserved.</div>
          <div>Made with care for every traveler</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */
function Landing() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Gallery />
        <Amenities />
        <Pricing />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
