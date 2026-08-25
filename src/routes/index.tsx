import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import heroHand from "@/assets/hero-hand.jpg";
import {
  Sparkles,
  ArrowRight,
  ArrowDown,
  Plus,
  Star,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Menu,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LumierePage,
});

const services = [
  { icon: "💅", name: "Manicure Απλό", duration: "45 λεπτά", price: "€15" },
  { icon: "✨", name: "Manicure Gel", duration: "60 λεπτά", price: "€25" },
  { icon: "💎", name: "Ημιμόνιμο", duration: "75 λεπτά", price: "€30" },
  { icon: "🌸", name: "Pedicure Απλό", duration: "60 λεπτά", price: "€20" },
  { icon: "👑", name: "Pedicure Gel", duration: "75 λεπτά", price: "€35" },
  { icon: "🎨", name: "Nail Art", duration: "15 λεπτά/νύχι", price: "€5" },
];

const team = [
  {
    name: "Μαρία",
    title: "Senior Nail Artist",
    exp: "5 χρόνια εμπειρία",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop&crop=faces",
  },
  {
    name: "Ελένη",
    title: "Gel & Nail Art Specialist",
    exp: "3 χρόνια εμπειρία",
    photo:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=600&fit=crop&crop=faces",
  },
  {
    name: "Σοφία",
    title: "Pedicure Expert",
    exp: "4 χρόνια εμπειρία",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=600&fit=crop&crop=faces",
  },
];

const reviews = [
  {
    text: "Απίστευτη δουλειά! Τα νύχια μου έμειναν τέλεια για 3 εβδομάδες.",
    name: "ΜΑΡΙΑ Π.",
  },
  {
    text: "Επαγγελματισμός και φιλικό περιβάλλον. Θα ξαναέρθω σίγουρα!",
    name: "ΕΛΕΝΗ Κ.",
  },
  {
    text: "Το καλύτερο nail studio που έχω επισκεφτεί στην Αθήνα.",
    name: "ΣΟΦΙΑ Μ.",
  },
];

const timeSlots = ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

function LumierePage() {
  return (
    <div className="font-body bg-pearl text-ink">
      <Nav />
      <Hero />
      <Ribbon />
      <About />
      <Services />
      <Stats />
      <Team />
      <Booking />
      <Gallery />
      <Reviews />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* -------------------- NAV -------------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "Αρχική" },
    { href: "#services", label: "Υπηρεσίες" },
    { href: "#booking", label: "Κρατήσεις" },
    { href: "#contact", label: "Επικοινωνία" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-rose-gold/70 transition-shadow ${
        scrolled ? "shadow-[0_10px_30px_-15px_rgba(183,110,121,0.35)]" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-3 items-center gap-4">
        <a
          href="#home"
          className="font-display italic text-2xl md:text-3xl text-rose-gold tracking-tight truncate"
        >
          Lumière Nails
        </a>
        <nav className="hidden md:flex items-center justify-center gap-10 text-[13px] font-medium tracking-[0.18em] uppercase text-ink/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-rose-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex justify-end">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-full bg-rose-gold text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-rose-gold/90 transition-all hover:-translate-y-0.5 shadow-[0_10px_25px_-10px_rgba(183,110,121,0.6)]"
          >
            Κλείστε Ραντεβού
          </a>
        </div>
        <button
          className="md:hidden justify-self-end p-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-rose-gold/40 bg-white px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.18em] text-ink/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-rose-gold text-white px-6 py-3 text-sm font-medium"
          >
            Κλείστε Ραντεβού
          </a>
        </div>
      )}
    </header>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section
      id="home"
      className="relative bg-ink text-white flex items-center min-h-[calc(100vh-5rem)] px-8 md:px-16 lg:px-24 py-20 lg:py-0 overflow-hidden"
    >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-60 lg:opacity-70"
          style={{ backgroundImage: `url(${heroHand})` }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/30"
        />
        <div aria-hidden className="pointer-events-none absolute top-10 right-10 w-40 h-40 rounded-full bg-rose-gold/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute bottom-16 left-10 w-56 h-56 rounded-full bg-rose-gold/10 blur-3xl" />
        <div className="relative max-w-xl">
          <p className="text-rose-gold text-xs md:text-[13px] uppercase tracking-[0.32em] font-medium">
            Premium Nail Studio · Αθήνα
          </p>
          <div className="mt-5 h-[2px] w-[60px] bg-rose-gold" />
          <h1 className="mt-8 font-display font-light leading-[1.05] text-[56px] md:text-[72px] lg:text-[80px] tracking-tight">
            Η{" "}
            <span className="relative inline-block lumiere-underline">Τέχνη</span>
            <br />
            στα Νύχια
            <br />
            σας
          </h1>
          <p className="mt-8 text-white/60 text-base md:text-[17px] leading-relaxed max-w-md">
            Κάθε λεπτομέρεια μετράει. Κάθε νύχι είναι έργο τέχνης.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full bg-rose-gold text-white px-7 py-3.5 text-sm font-medium hover:-translate-y-1 hover:bg-rose-gold/90 transition-all shadow-[0_15px_30px_-12px_rgba(183,110,121,0.7)]"
            >
              Κλείστε Ραντεβού <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/70 text-white px-7 py-3.5 text-sm font-medium hover:-translate-y-1 hover:bg-white hover:text-ink transition-all"
            >
              Δείτε τις Υπηρεσίες <ArrowDown size={16} />
            </a>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "500+", l: "Πελάτισσες" },
              { n: "5★", l: "Google" },
              { n: "24/7", l: "Online" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-rose-gold">{s.n}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/70">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}

/* -------------------- RIBBON -------------------- */
function Ribbon() {
  const text =
    "PREMIUM NAIL ART · MANICURE · PEDICURE · GEL · ΗΜΙΜΟΝΙΜΟ · NAIL ART · LUMIÈRE NAILS · ΑΘΗΝΑ · ";
  return (
    <section className="bg-ink py-8 overflow-hidden border-y border-rose-gold/20">
      <div className="flex whitespace-nowrap lumiere-marquee-track">
        <div className="font-display italic text-rose-gold text-4xl md:text-5xl tracking-wide px-4">
          {text.repeat(6)}
        </div>
        <div
          aria-hidden
          className="font-display italic text-rose-gold text-4xl md:text-5xl tracking-wide px-4"
        >
          {text.repeat(6)}
        </div>
      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */
function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      setFromClientX(x);
    };
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, []);

  const before =
    "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=900&auto=format&fit=crop";
  const after =
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&auto=format&fit=crop";

  return (
    <div className="w-full max-w-xl mx-auto">
      <div
        ref={ref}
        className="relative aspect-square w-full overflow-hidden rounded-sm border-2 border-rose-gold select-none touch-none cursor-ew-resize"
        onMouseDown={(e) => {
          dragging.current = true;
          setFromClientX(e.clientX);
        }}
        onTouchStart={(e) => {
          dragging.current = true;
          setFromClientX(e.touches[0].clientX);
        }}
      >
        <img
          src={before}
          alt="Πριν"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          <img
            src={after}
            alt="Μετά"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.3)] pointer-events-none"
          style={{ left: `${pos}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white border-2 border-rose-gold flex items-center justify-center shadow-lg pointer-events-none"
          style={{ left: `${pos}%` }}
        >
          <ArrowRight size={14} className="text-rose-gold -mr-1" />
          <ArrowRight size={14} className="text-rose-gold rotate-180 -ml-1" />
        </div>
        <span className="absolute top-4 left-4 rounded-full bg-ink/70 text-white text-[10px] uppercase tracking-[0.25em] px-3 py-1">
          Πριν
        </span>
        <span className="absolute top-4 right-4 rounded-full bg-rose-gold text-white text-[10px] uppercase tracking-[0.25em] px-3 py-1">
          Μετά
        </span>
      </div>
      <p className="mt-4 text-center text-xs text-ink/50 uppercase tracking-[0.2em]">
        Σύρετε για να δείτε τη διαφορά
      </p>
    </div>
  );
}

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`text-xs uppercase tracking-[0.3em] font-medium ${
        dark ? "text-ink" : "text-rose-gold"
      }`}
    >
      {children}
    </p>
  );
}

function RoseLine({ center = false }: { center?: boolean }) {
  return <div className={`mt-5 h-[2px] w-[60px] bg-rose-gold ${center ? "mx-auto" : ""}`} />;
}

function About() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <BeforeAfter />
        <div>
          <SectionLabel>Το Studio μας</SectionLabel>
          <RoseLine />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl leading-[1.1]">
            Εμπιστευτείτε τα Νύχιά σας σε Αληθινούς Καλλιτέχνες
          </h2>
          <p className="mt-8 text-ink/70 text-base leading-[1.8] max-w-lg">
            Στο Lumière Nails πιστεύουμε ότι κάθε λεπτομέρεια μετράει. Χρησιμοποιούμε αποκλειστικά
            premium προϊόντα και τεχνικές για να σας χαρίσουμε τέλεια αποτελέσματα κάθε φορά.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "💅 Premium Προϊόντα",
              "👩‍🎨 Πιστοποιημένες Τεχνίτριες",
              "✨ Μοναδικά Σχέδια",
            ].map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-rose-gold text-rose-gold bg-white px-5 py-2 text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- SERVICES -------------------- */
function Services() {
  return (
    <section id="services" className="bg-blush py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <SectionLabel dark>Υπηρεσίες</SectionLabel>
          <RoseLine center />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl">Οι Υπηρεσίες μας</h2>
          <p className="mt-4 text-ink/70">Κάθε υπηρεσία, μια μοναδική εμπειρία</p>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="group bg-white rounded-xl border border-rose-gold p-8 shadow-[0_10px_30px_-20px_rgba(183,110,121,0.5)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_45px_-15px_rgba(183,110,121,0.55)] hover:border-2"
            >
              <div className="text-4xl text-rose-gold">{s.icon}</div>
              <h3 className="mt-6 font-display text-2xl">{s.name}</h3>
              <p className="mt-2 text-sm text-ink/60">{s.duration}</p>
              <div className="mt-4 h-7 relative overflow-hidden">
                <p className="absolute inset-0 text-sm text-ink/50 italic transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                  Δείτε την τιμή →
                </p>
                <p className="absolute inset-0 font-bold text-xl text-rose-gold translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {s.price}
                </p>
              </div>
              <a
                href="#booking"
                className="mt-6 inline-flex items-center gap-1 text-rose-gold text-sm hover:underline"
              >
                Κράτηση <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- STATS -------------------- */
function Stats() {
  const items = [
    { n: "500+", l: "Ευχαριστημένες Πελάτισσες" },
    { n: "5★", l: "Βαθμολογία Google" },
    { n: "50+", l: "Διαθέσιμα Σχέδια" },
    { n: "24/7", l: "Online Κράτηση" },
  ];
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-y-12">
        {items.map((s, i) => (
          <div
            key={s.l}
            className={`text-center px-6 ${
              i > 0 ? "lg:border-l lg:border-rose-gold/40" : ""
            }`}
          >
            <div className="font-display text-rose-gold text-6xl md:text-7xl leading-none">
              {s.n}
            </div>
            <div className="mt-4 text-white text-[11px] uppercase tracking-[0.25em]">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- TEAM -------------------- */
function Team() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <SectionLabel>Η Ομάδα μας</SectionLabel>
          <RoseLine center />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl">
            Οι Καλλιτέχνες μας
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-white rounded-2xl shadow-[0_15px_35px_-20px_rgba(0,0,0,0.15)] p-10 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-20px_rgba(183,110,121,0.4)]"
            >
              <div className="mx-auto w-32 h-32 rounded-full ring-[3px] ring-rose-gold ring-offset-4 ring-offset-white overflow-hidden">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-8 font-display italic text-3xl">{m.name}</h3>
              <p className="mt-2 text-rose-gold text-[11px] uppercase tracking-[0.25em]">
                {m.title}
              </p>
              <p className="mt-3 text-sm text-ink/60">{m.exp}</p>
              <a
                href="#booking"
                className="mt-8 inline-flex items-center rounded-full bg-rose-gold text-white px-6 py-2.5 text-sm hover:bg-rose-gold/90 transition-all"
              >
                Κλείστε Ραντεβού
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- BOOKING -------------------- */
function Booking() {
  const [service, setService] = useState("");
  const [artist, setArtist] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <section id="booking" className="bg-blush py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <SectionLabel dark>Κράτηση Ραντεβού</SectionLabel>
          <RoseLine center />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl">
            Κλείστε το Ραντεβού σας
          </h2>
          <p className="mt-4 text-ink/70">Online 24/7 — χωρίς τηλεφώνημα</p>
        </div>

        <div className="mt-10 mx-auto max-w-2xl rounded-xl border border-rose-gold bg-white px-6 py-4 text-sm text-ink/80 text-center">
          📌 Demo φόρμα — Σε πραγματικό site η κράτηση γίνεται αυτόματα
        </div>

        <div className="mt-8 bg-white rounded-2xl p-8 md:p-12 shadow-[0_25px_60px_-25px_rgba(183,110,121,0.35)]">
          {done ? (
            <div className="text-center py-16">
              <div className="text-5xl">✅</div>
              <h3 className="mt-6 font-display text-3xl">Το ραντεβού σας καταχωρήθηκε!</h3>
              <p className="mt-3 text-ink/60">
                Θα λάβετε επιβεβαίωση σύντομα. Ευχαριστούμε που επιλέξατε το Lumière Nails.
              </p>
              <button
                onClick={() => {
                  setDone(false);
                  setService("");
                  setArtist("");
                  setDate("");
                  setSlot(null);
                  setName("");
                  setPhone("");
                }}
                className="mt-8 inline-flex items-center rounded-full bg-rose-gold text-white px-6 py-3 text-sm"
              >
                Νέα Κράτηση
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Υπηρεσία">
                  <select
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="lumiere-input"
                  >
                    <option value="">Επιλέξτε Υπηρεσία</option>
                    {services.map((s) => (
                      <option key={s.name} value={s.name}>
                        {s.name} — {s.price}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Τεχνίτρια">
                  <select
                    required
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    className="lumiere-input"
                  >
                    <option value="">Επιλέξτε Τεχνίτρια</option>
                    <option>Μαρία</option>
                    <option>Ελένη</option>
                    <option>Σοφία</option>
                    <option>Δεν έχω προτίμηση</option>
                  </select>
                </Field>
              </div>
              <Field label="Ημερομηνία">
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="lumiere-input accent-rose-gold"
                />
              </Field>
              <Field label="Ώρα">
                <div className="flex flex-wrap gap-2">
                  {timeSlots.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setSlot(t)}
                      className={`rounded-full border px-5 py-2 text-sm transition-all ${
                        slot === t
                          ? "bg-rose-gold text-white border-rose-gold"
                          : "bg-white text-ink border-rose-gold hover:bg-blush/40"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </Field>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Ονοματεπώνυμο">
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="π.χ. Μαρία Παπαδοπούλου"
                    className="lumiere-input"
                  />
                </Field>
                <Field label="Τηλέφωνο">
                  <input
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="6900000000"
                    className="lumiere-input"
                  />
                </Field>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-rose-gold text-white py-4 text-sm font-medium tracking-wide hover:bg-rose-gold/90 transition-all hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 shadow-[0_15px_30px_-12px_rgba(183,110,121,0.6)]"
              >
                Επιβεβαίωση Ραντεβού <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .lumiere-input {
          width: 100%;
          background: #fff;
          border: 1px solid var(--rose-gold);
          border-radius: 8px;
          padding: 12px 14px;
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--ink);
          transition: all 0.2s ease;
          outline: none;
        }
        .lumiere-input:focus {
          border-width: 2px;
          padding: 11px 13px;
          box-shadow: 0 0 0 4px rgba(183,110,121,0.15);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block mb-2 text-xs uppercase tracking-[0.2em] text-ink/70">{label}</span>
      {children}
    </label>
  );
}

/* -------------------- GALLERY -------------------- */
function Gallery() {
  const tiles = [
    {
      h: "aspect-[4/5]",
      src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&auto=format&fit=crop",
      alt: "Ροζ ημιμόνιμο manicure",
    },
    {
      h: "aspect-square",
      src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=900&auto=format&fit=crop",
      alt: "Nail art λεπτομέρεια",
    },
    {
      h: "aspect-[4/5]",
      src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=900&auto=format&fit=crop",
      alt: "Gel manicure φινίρισμα",
    },
  ];
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <SectionLabel>Δείγματα Εργασιών</SectionLabel>
          <RoseLine center />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl">
            Η Τέχνη μας Μιλά Μόνη της
          </h2>
        </div>
        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {tiles.map((t, i) => (
            <div
              key={i}
              className={`mb-6 break-inside-avoid relative group overflow-hidden rounded-xl border border-rose-gold ${t.h} bg-blush`}
            >
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-rose-gold/0 group-hover:bg-rose-gold/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                  <Plus className="text-rose-gold" size={26} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- REVIEWS -------------------- */
function Reviews() {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <SectionLabel>Κριτικές</SectionLabel>
          <RoseLine center />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl text-white">
            Τι Λένε οι Πελάτισσές μας
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="relative rounded-2xl p-10 pt-14"
              style={{ background: "#1a1a1a" }}
            >
              <span className="absolute top-4 left-8 font-display text-rose-gold text-[80px] leading-none">
                “
              </span>
              <p className="text-white text-base leading-[1.8]">{r.text}</p>
              <div className="mt-6 flex gap-1 text-rose-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <div className="mt-4 text-rose-gold text-[11px] uppercase tracking-[0.25em]">
                {r.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- FINAL CTA -------------------- */
function FinalCTA() {
  return (
    <section
      className="py-28 lg:py-36 text-center text-white"
      style={{
        background:
          "linear-gradient(135deg, #B76E79 0%, #d08a95 50%, #B76E79 100%)",
      }}
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display font-light text-5xl md:text-6xl leading-[1.05]">
          Έτοιμες για Τέλεια Νύχια;
        </h2>
        <div className="mt-6 h-[2px] w-[60px] bg-white mx-auto" />
        <p className="mt-6 text-white/90 text-lg">Κλείστε ραντεβού online — 24/7</p>
        <a
          href="#booking"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white text-rose-gold px-8 py-4 text-sm font-medium hover:scale-[1.03] hover:bg-white/95 transition-all shadow-[0_20px_45px_-15px_rgba(0,0,0,0.35)]"
        >
          Κλείστε Ραντεβού Τώρα <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="font-display italic text-rose-gold text-3xl">Lumière Nails</div>
            <p className="mt-6 text-white/60 text-sm leading-relaxed max-w-sm">
              Premium nail studio στην καρδιά της Αθήνας. Κάθε νύχι είναι έργο τέχνης.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-rose-gold flex items-center justify-center text-rose-gold hover:bg-rose-gold hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-rose-gold flex items-center justify-center text-rose-gold hover:bg-rose-gold hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-rose-gold">Πλοήγηση</div>
            <div className="mt-5 h-px w-10 bg-rose-gold" />
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li><a href="#home" className="hover:text-rose-gold">Αρχική</a></li>
              <li><a href="#services" className="hover:text-rose-gold">Υπηρεσίες</a></li>
              <li><a href="#booking" className="hover:text-rose-gold">Κρατήσεις</a></li>
              <li><a href="#contact" className="hover:text-rose-gold">Επικοινωνία</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-rose-gold">Επικοινωνία</div>
            <div className="mt-5 h-px w-10 bg-rose-gold" />
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-rose-gold mt-0.5 shrink-0" />
                Ερμού 45, Αθήνα 10563
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-rose-gold shrink-0" />
                +30 210 000 0000
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-rose-gold shrink-0" />
                hello@lumierenails.gr
              </li>
            </ul>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Ermou+45,+Athens+10563,+Greece"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-rose-gold text-rose-gold px-4 py-2 text-xs uppercase tracking-[0.2em] hover:bg-rose-gold hover:text-white transition-all"
            >
              Οδηγίες <ArrowRight size={14} />
            </a>
          </div>
        </div>
        <div className="mt-14 rounded-2xl overflow-hidden border border-rose-gold/40 shadow-[0_25px_60px_-30px_rgba(183,110,121,0.6)]">
          <iframe
            title="Lumière Nails — Ερμού 45, Αθήνα"
            src="https://www.google.com/maps?q=Ermou+45,+Athens+10563,+Greece&output=embed"
            width="100%"
            height="320"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="mt-16 h-px bg-rose-gold/40" />
        <p className="mt-6 text-center text-xs text-white/40">
          © 2026 Lumière Nails. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
