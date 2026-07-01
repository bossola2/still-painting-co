import QuoteForm from "./components/QuoteForm";
import NavMenu from "./components/NavMenu";

const PHONE = "(804) 928-7714";
const PHONE_HREF = "tel:+18049287714";
const EMAIL = "stillpaintingco@gmail.com";
const EMAIL_HREF = "mailto:stillpaintingco@gmail.com";

const services = [
  {
    icon: "house",
    title: "House Exteriors",
    desc: "Full exterior painting for homes of any size. Proper prep, premium paint, clean results that last.",
  },
  {
    icon: "interior",
    title: "Interior Painting",
    desc: "Walls, ceilings, trim. We handle interior jobs with the same care and attention we bring outside.",
  },
  {
    icon: "deck",
    title: "Deck Refinishing",
    desc: "Power wash, sand, stain or paint. We bring weathered decks back to life, good as new.",
  },
  {
    icon: "fence",
    title: "Fence Painting",
    desc: "Wood, vinyl, or board. We'll make your fence look sharp and protect it from Vermont winters.",
  },
  {
    icon: "stain",
    title: "Wood Staining",
    desc: "Exterior staining for decks, siding and fences. Semi-transparent or solid, you pick the look.",
  },
  {
    icon: "more",
    title: "You Name It",
    desc: "Got something else in mind? We're versatile and always happy to take a look and give a free estimate.",
  },
];




function ServiceIcon({ id }: { id: string }) {
  const p = {
    className: "w-6 h-6",
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (id) {
    case "house":
      return (
        <svg {...p}>
          <path d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V10.5z" />
          <path d="M9 21V13h6v8" />
        </svg>
      );
    case "interior":
      return (
        <svg {...p}>
          <rect x="4" y="6" width="16" height="7" rx="1" />
          <path d="M12 13v5M8 18h8" />
        </svg>
      );
    case "deck":
      return (
        <svg {...p}>
          <rect x="2" y="5" width="20" height="3" rx="0.5" />
          <rect x="2" y="10" width="20" height="3" rx="0.5" />
          <rect x="2" y="15" width="20" height="3" rx="0.5" />
          <line x1="7" y1="5" x2="7" y2="18" />
          <line x1="17" y1="5" x2="17" y2="18" />
        </svg>
      );
    case "fence":
      return (
        <svg {...p}>
          <line x1="4" y1="21" x2="4" y2="10" />
          <polyline points="4,10 6,7 8,10" />
          <line x1="8" y1="21" x2="8" y2="10" />
          <line x1="13" y1="21" x2="13" y2="10" />
          <polyline points="13,10 15,7 17,10" />
          <line x1="17" y1="21" x2="17" y2="10" />
          <line x1="2" y1="14" x2="19" y2="14" />
          <line x1="2" y1="18" x2="19" y2="18" />
        </svg>
      );
    case "stain":
      return (
        <svg {...p}>
          <path d="M15 4l-9 9 1.5 1.5L9 16l1.5 1.5 9-9L15 4z" />
          <path d="M7.5 13l-4.5 4.5a2 2 0 000 3 2 2 0 003 0L10.5 16" />
        </svg>
      );
    case "more":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-pink shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/StillPaintingRealLogo.png" alt="Still Painting Co. Logo" className="h-10 w-10 object-contain rounded-lg" />
            <span className="font-display text-xl sm:text-2xl font-bold text-stone leading-tight">
              Still Painting Co.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={EMAIL_HREF}
              className="hidden sm:inline-flex items-center text-stone/70 font-semibold text-base hover:text-stone transition-colors"
            >
              {EMAIL}
            </a>
            <NavMenu />
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative bg-forest-dark text-cream overflow-hidden">

        {/* horizontal paint-stroke decorations */}
        <svg className="absolute top-12 right-[-1rem] w-80 h-16 text-stone/10 pointer-events-none" viewBox="0 0 400 80" fill="currentColor" aria-hidden="true">
          <path d="M8,40 Q80,12 180,28 Q280,44 392,18 C398,26 398,38 392,48 Q280,70 180,54 Q80,70 8,40Z"/>
        </svg>
        <svg className="absolute bottom-24 left-[-1rem] w-72 h-14 text-stone/10 pointer-events-none" viewBox="0 0 360 60" fill="currentColor" aria-hidden="true">
          <path d="M6,30 Q70,8 180,22 Q280,36 354,12 C358,20 358,32 354,42 Q280,56 180,42 Q70,56 6,30Z"/>
        </svg>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-16 sm:py-40 text-center">
          <p className="text-slate-light font-semibold text-sm sm:text-base uppercase tracking-[0.25em] mb-6">
            Burlington, Vermont · Est. 2026
          </p>
          <h1 className="font-display text-6xl sm:text-8xl lg:text-[108px] font-bold leading-[1.0] mb-8">
            <span className="text-stone-light">Still Here.</span><br />
            <span className="relative inline-block -rotate-1 px-5 py-2">
              <svg
                className="absolute inset-0 w-full h-full text-slate overflow-visible"
                viewBox="0 0 200 60"
                preserveAspectRatio="none"
                fill="currentColor"
                aria-hidden="true"
              >
                <defs>
                  <filter id="painty" x="-8%" y="-30%" width="116%" height="160%">
                    <feTurbulence type="turbulence" baseFrequency="0.03 0.07" numOctaves="4" seed="8" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                </defs>
                <rect x="3" y="3" width="194" height="54" rx="5" filter="url(#painty)" />
              </svg>
              <span className="relative z-10 text-white">Still Painting.</span>
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-stone/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            UVM students. Honest work. Fair prices. Serving the greater Burlington area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#quote"
              className="w-full sm:w-auto bg-pink text-white font-bold text-xl px-10 py-4 rounded-full transition-all min-h-[56px] flex items-center justify-center gap-3 shadow-xl hover:opacity-90 hover:shadow-2xl hover:-translate-y-0.5"
            >
              Get a Free Quote
            </a>
            <a
              href={EMAIL_HREF}
              className="w-full sm:w-auto border-2 border-stone/40 text-stone hover:border-stone hover:bg-stone/10 font-semibold text-lg px-8 py-4 rounded-full transition-colors min-h-[56px] flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 shrink-0 opacity-70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email Us
            </a>
          </div>
        </div>

        {/* wave divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-10 sm:h-16">
            <path d="M0,64 C480,0 960,0 1440,64 L1440,64 L0,64 Z" fill="#EDE6DF" />
          </svg>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 bg-stone" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate mb-3">
              What We Do
            </h2>
            <div className="w-16 h-1.5 bg-slate rounded-full mx-auto mb-5" />
            <p className="text-lg sm:text-xl text-charcoal/70 max-w-xl mx-auto">
              From full house exteriors to backyard fences — we handle it all with care
              and attention to detail.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white border-t-4 border-slate rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 flex gap-4 items-start"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-slate text-stone-light flex items-center justify-center mt-0.5">
                  <ServiceIcon id={s.icon} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate mb-1 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-charcoal/65 leading-relaxed text-base">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 bg-forest" id="gallery">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone mb-3">
              Before &amp; After
            </h2>
            <div className="w-16 h-1.5 bg-stone/50 rounded-full mx-auto mb-5" />
            <p className="text-lg sm:text-xl text-stone/70">
              See what a fresh coat can do.
            </p>
          </div>
          {/* Featured project — all 4 photos */}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-stone mb-8">
            {/* Mobile: Before stack then After stack. Desktop: side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* Before column */}
              <div className="sm:border-r-2 border-b-2 sm:border-b-0 border-stone">
                <div className="relative h-52 sm:h-56 overflow-hidden border-b-2 border-stone">
                  <img src="/porch1before.JPEG" alt="Before: Porch Refinish" className="w-full h-full object-contain object-center bg-charcoal/10" />
                </div>
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <img src="/porch2before.jpeg" alt="Before: Porch Refinish" className="w-full h-full object-cover" />
                </div>
                <div className="bg-charcoal/75 py-2.5 text-center">
                  <span className="text-stone-light text-sm font-bold tracking-wide uppercase">Before</span>
                </div>
              </div>
              {/* After column */}
              <div>
                <div className="relative h-52 sm:h-56 overflow-hidden border-b-2 border-stone">
                  <img src="/porch1after.jpeg" alt="After: Porch Refinish" className="w-full h-full object-cover" />
                </div>
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <img src="/porch2after.jpeg" alt="After: Porch Refinish" className="w-full h-full object-cover" />
                </div>
                <div className="bg-slate py-2.5 text-center">
                  <span className="text-white text-sm font-bold tracking-wide uppercase">After</span>
                </div>
              </div>
            </div>
            <div className="px-5 py-4 border-t-2 border-cream flex items-center justify-between">
              <div>
                <p className="font-display font-semibold text-forest-dark text-xl">Porch Refinish</p>
                <p className="text-sm text-charcoal/55">Colchester, VT</p>
              </div>
              <span className="bg-forest text-stone-light text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                Featured
              </span>
            </div>
          </div>

          <p className="text-center text-stone/60 mt-8 text-base italic">
            More photos added after every job — check back soon!
          </p>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 bg-forest-dark text-cream" id="about">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Placeholder photo */}
            <div className="rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1 border-2 border-stone/30">
              <div className="h-72 sm:h-96 bg-stone flex flex-col items-center justify-center gap-4">
                <svg className="w-16 h-16 text-forest-dark/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
                <div className="text-center">
                  <p className="font-display text-xl font-semibold text-forest-dark">That&apos;s Us!</p>
                  <p className="text-charcoal/50 text-sm mt-1">Photo coming soon</p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <p className="text-slate-light font-semibold uppercase tracking-widest text-sm mb-4">
                Why Choose Us
              </p>
              <h2 className="font-display text-5xl sm:text-6xl font-bold leading-tight mb-2">
                About Us
              </h2>
              <div className="w-16 h-1.5 bg-slate rounded-full mb-6" />
              <div className="space-y-4 text-cream/80 text-lg leading-relaxed">
                <p>
                  We&apos;re two UVM students who fell into painting the way most
                  people do — a summer job that turned into something real. We spent
                  a few seasons working for other companies, learning the trade,
                  putting in the hours, and genuinely learning the skill. But the
                  more we worked, the more we noticed the same problems: jobs rushed,
                  corners cut, customers treated like a number.
                </p>
                <p>
                  So we decided to do it ourselves. Not because it was the easy
                  path, but because we knew we could do it right. Still Painting Co.
                  is us doing things our way — proper prep, real attention to detail,
                  and actually caring about how it turns out.
                </p>
                <p>
                  We&apos;re UVM students, we&apos;re local, and we stand behind every
                  job we do. When we leave your property, we want it to look
                  genuinely great — not just good enough.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 bg-stone" id="testimonials">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-forest-dark mb-3">
            What the Neighbors Say
          </h2>
          <div className="w-16 h-1.5 bg-forest rounded-full mx-auto mb-8" />
          <div className="bg-white rounded-2xl p-10 shadow-md border-l-[6px] border-pink inline-block max-w-xl mx-auto text-left">
            <span className="font-display text-7xl text-forest/15 leading-none block mb-2" aria-hidden="true">&ldquo;</span>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
              Highly recommend! They painted our front porch, power washed our back deck, and took care of several paint touch-ups around the house. They were responsive, professional, and easy to work with from start to finish. Communication was excellent, the work was completed quickly, and their pricing was much more affordable than other local options we considered. The finished results look great, and the whole process was smooth and stress-free. We wouldn&apos;t hesitate to hire them again.
            </p>
            <div className="border-t border-stone pt-4">
              <p className="font-display font-bold text-forest-dark text-lg">Alison</p>
              <p className="text-sm text-charcoal/50">Colchester, VT</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE FORM ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 bg-forest-dark" id="quote">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-slate-light font-semibold uppercase tracking-widest text-sm mb-4">
              Free Estimate
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone mb-3">
              Let&apos;s Get Started
            </h2>
            <div className="w-16 h-1.5 bg-slate rounded-full mx-auto mb-5" />
            <p className="text-lg sm:text-xl text-stone/70 mb-3">
              Fill out the form below and we&apos;ll get back to you fast. Or email us directly at{" "}
              <a href={EMAIL_HREF} className="text-slate-light underline underline-offset-2 hover:text-stone transition-colors">
                {EMAIL}
              </a>
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-forest-dark text-cream py-14 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-8">
            <div className="text-center sm:text-left">
              <p className="font-display text-2xl font-bold mb-1">Still Painting Co.</p>
              <p className="text-cream/55 text-base">Burlington, Vermont</p>
            </div>
            <div className="text-center sm:text-right space-y-2">
              <a
                href={EMAIL_HREF}
                className="flex items-center justify-center sm:justify-end gap-2 text-cream font-semibold text-xl hover:underline"
              >
                <svg className="w-5 h-5 shrink-0 opacity-70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {EMAIL}
              </a>
              <p className="text-cream/40 text-sm">Mon – Sat, 8 am – 6 pm</p>
            </div>
          </div>

          <div className="h-1 w-16 bg-cream rounded-full mx-auto sm:mx-0 mb-8 opacity-40" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-cream/35 text-sm">
            <p>© {new Date().getFullYear()} Still Painting Co. · Burlington, VT</p>
            <p>Houses · Decks · Fences · Staining</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
