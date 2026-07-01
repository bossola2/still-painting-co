import QuoteForm from "./components/QuoteForm";
import NavMenu from "./components/NavMenu";

const PHONE = "(804) 928-7714";
const PHONE_HREF = "tel:+18049287714";
const SMS_HREF = "sms:+18049287714";
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

const process = [
  {
    step: "01",
    title: "Prep",
    desc: "We start with extensive scraping and sanding to remove any loose or peeling paint and smooth out the surface. Proper prep is what separates a paint job that lasts from one that peels in a year.",
  },
  {
    step: "02",
    title: "Prime",
    desc: "Once the surface is clean and smooth, we apply a thick, even layer of primer. This seals the wood, improves adhesion, and gives the topcoat something solid to hold onto.",
  },
  {
    step: "03",
    title: "Paint",
    desc: "Two full coats of quality paint, applied carefully and evenly. We don't rush this part. By the time we're done, it looks exactly the way it should — clean, even, and built to last.",
  },
];

const faqs = [
  {
    q: "Do you offer free estimates?",
    a: "Yes, always. We'll come take a look at the job and give you a straight quote with no obligation.",
  },
  {
    q: "Are you insured?",
    a: "Yes, we are fully insured. You can hire us with confidence.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Burlington and the greater surrounding area including Colchester, South Burlington, Shelburne, Winooski, Essex, Williston, and more. Not sure if we cover your town? Shoot us a text and we'll let you know.",
  },
  {
    q: "How long does a typical job take?",
    a: "A typical job — whether it's trimwork or a full porch — usually takes about a week, depending on the weather. We'll give you a realistic timeline before we start.",
  },
  {
    q: "What kind of paint do you use?",
    a: "We're flexible and happy to use whatever you prefer. For exterior work we recommend Benjamin Moore Element Guard — it holds up great against Vermont winters. For interior jobs we recommend Benjamin Moore Regal. Both are premium paints that we stand behind.",
  },
  {
    q: "Do I need to do anything to prepare?",
    a: "Not much — just make sure we have access to the areas we're working on. We handle all the prep, masking, and cleanup ourselves.",
  },
];

const serviceAreas = [
  "Burlington", "Colchester", "South Burlington", "Shelburne",
  "Winooski", "Essex", "Williston", "Milton", "Hinesburg", "Charlotte",
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

      {/* ── TOP BAR ── */}
      <div className="bg-forest-dark text-stone/80 text-sm py-2 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="hidden sm:block font-semibold">Burlington, VT &amp; Surrounding Areas · Licensed &amp; Insured</p>
          <p className="sm:hidden font-semibold text-xs">Burlington, VT · Licensed &amp; Insured</p>
          <div className="flex items-center gap-2 shrink-0">
            <a href={PHONE_HREF} className="font-bold text-stone hover:text-cream transition-colors whitespace-nowrap">{PHONE}</a>
            <a href={SMS_HREF} className="text-stone/70 hover:text-stone transition-colors text-xs font-semibold whitespace-nowrap">(text us!)</a>
          </div>
        </div>
      </div>

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-pink shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/StillPaintingRealLogo.png" alt="Still Painting Co. Logo" className="h-10 w-10 object-contain rounded-lg" />
            <span className="font-display text-xl sm:text-2xl font-bold text-stone leading-tight">
              Still Painting Co.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={PHONE_HREF} className="hidden sm:inline-flex items-center gap-2 text-stone font-bold text-lg hover:text-cream transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {PHONE}
            </a>
            <a href={SMS_HREF} className="hidden sm:inline-flex items-center gap-1.5 bg-stone/20 hover:bg-stone/30 text-stone font-bold text-sm px-3 py-1.5 rounded-full transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
              Text Us
            </a>
            <NavMenu />
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative bg-forest-dark text-cream overflow-hidden">
        {/* Paint stroke top right */}
        <svg className="absolute top-8 right-0 w-40 sm:w-80 h-12 sm:h-16 text-slate-light/25 pointer-events-none" viewBox="0 0 400 80" fill="currentColor" aria-hidden="true">
          <path d="M8,40 Q80,12 180,28 Q280,44 392,18 C398,26 398,38 392,48 Q280,70 180,54 Q80,70 8,40Z"/>
        </svg>
        {/* Paint stroke bottom left */}
        <svg className="absolute bottom-20 left-0 w-36 sm:w-72 h-10 sm:h-14 text-slate-light/20 pointer-events-none" viewBox="0 0 360 60" fill="currentColor" aria-hidden="true">
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
              href={SMS_HREF}
              className="w-full sm:w-auto border-2 border-stone/40 text-stone hover:border-stone hover:bg-stone/10 font-semibold text-lg px-8 py-4 rounded-full transition-colors min-h-[56px] flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 shrink-0 opacity-70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
              Text Us
            </a>
          </div>
        </div>

        {/* wave divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-10 sm:h-16">
            <path d="M0,64 C480,0 960,0 1440,64 L1440,64 L0,64 Z" fill="#E8DDD5" />
          </svg>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-stone py-5 px-4 sm:px-8 border-b border-cream">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-12">
          {[
            { label: "Licensed & Insured" },
            { label: "Free Estimates" },
            { label: "Local & Reliable" },
            { label: "Satisfaction Guaranteed" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-forest-dark font-bold text-sm sm:text-base">
              <svg className="w-5 h-5 text-slate shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {item.label}
            </div>
          ))}
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
              From full house exteriors to backyard fences — we handle it all with care and attention to detail.
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
                  <h3 className="text-lg font-bold text-slate mb-1 tracking-tight">{s.title}</h3>
                  <p className="text-charcoal/65 leading-relaxed text-base">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 bg-forest-dark text-cream" id="process">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone mb-3">
              Our Process
            </h2>
            <div className="w-16 h-1.5 bg-slate rounded-full mx-auto mb-5" />
            <p className="text-lg text-stone/70 max-w-xl mx-auto">Every job follows the same three steps. No skipping, no cutting corners.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {process.map((p) => (
              <div key={p.step} className="bg-forest rounded-2xl p-8 flex flex-col gap-4">
                <span className="font-display text-5xl font-bold text-stone-light">{p.step}</span>
                <h3 className="font-display text-2xl font-bold text-stone">{p.title}</h3>
                <p className="text-cream/70 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 bg-stone" id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-forest-dark mb-3">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1.5 bg-slate rounded-full mx-auto" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-slate">
                <p className="font-bold text-forest-dark text-lg mb-2">{faq.q}</p>
                <p className="text-charcoal/70 leading-relaxed">{faq.a}</p>
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
            <p className="text-lg sm:text-xl text-stone/70">See what a fresh coat can do.</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg bg-stone mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2">
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
              <span className="bg-forest text-stone-light text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">Featured</span>
            </div>
          </div>
          <p className="text-center text-stone/60 mt-8 text-base italic">
            More photos added after every job — check back soon!
          </p>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 bg-stone" id="about">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1 border-2 border-stone/30">
              <div className="h-72 sm:h-96 bg-cream flex flex-col items-center justify-center gap-4">
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
            <div className="order-1 lg:order-2">
              <p className="text-slate font-semibold uppercase tracking-widest text-sm mb-4">Who We Are</p>
              <h2 className="font-display text-5xl sm:text-6xl font-bold leading-tight mb-2 text-forest-dark">
                About Us
              </h2>
              <div className="w-16 h-1.5 bg-slate rounded-full mb-6" />
              <div className="space-y-4 text-charcoal/80 text-lg leading-relaxed">
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
              <p className="mt-6 font-display text-2xl font-bold text-slate">— Sam &amp; Jasper</p>
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

      {/* ── SERVICE AREAS ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 bg-forest-dark text-cream">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone mb-3">
            Areas We Serve
          </h2>
          <div className="w-16 h-1.5 bg-slate rounded-full mx-auto mb-5" />
          <p className="text-lg text-stone/70 mb-10">Proudly serving the greater Burlington, VT area and beyond.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span key={area} className="bg-forest text-stone font-semibold px-5 py-2.5 rounded-full text-base">
                {area}, VT
              </span>
            ))}
          </div>
          <p className="text-stone/50 mt-8 text-sm">Don&apos;t see your town? Shoot us a text — we may still be able to help.</p>
        </div>
      </section>

      {/* ── QUOTE FORM ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 bg-forest-dark" id="quote">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-slate-light font-semibold uppercase tracking-widest text-sm mb-4">Free Estimate</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone mb-3">
              Let&apos;s Get Started
            </h2>
            <div className="w-16 h-1.5 bg-slate rounded-full mx-auto mb-5" />
            <p className="text-lg sm:text-xl text-stone/70 mb-3">
              Fill out the form below and we&apos;ll get back to you fast. Or call us at{" "}
              <a href={PHONE_HREF} className="text-slate-light underline underline-offset-2 hover:text-stone transition-colors">
                {PHONE}
              </a>
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-forest-dark text-cream py-14 px-4 sm:px-8 border-t border-forest">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img src="/StillPaintingRealLogo.png" alt="Still Painting Co." className="h-10 w-10 object-contain rounded-lg" />
                <p className="font-display text-2xl font-bold">Still Painting Co.</p>
              </div>
              <p className="text-cream/55 text-base">Burlington, Vermont</p>
              <p className="text-cream/55 text-sm mt-1">Licensed &amp; Insured</p>
            </div>
            <div>
              <p className="font-bold text-stone mb-3 uppercase tracking-wide text-sm">Contact</p>
              <a href={PHONE_HREF} className="flex items-center gap-2 text-cream/80 hover:text-cream transition-colors mb-2">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {PHONE}
              </a>
              <a href={EMAIL_HREF} className="flex items-center gap-2 text-cream/80 hover:text-cream transition-colors">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {EMAIL}
              </a>
              <p className="text-cream/40 text-sm mt-2">Mon – Sat, 8 am – 6 pm</p>
            </div>
            <div>
              <p className="font-bold text-stone mb-3 uppercase tracking-wide text-sm">Service Areas</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-cream/60 text-sm">
                {serviceAreas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px bg-cream/10 mb-6" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-cream/35 text-sm">
            <p>© {new Date().getFullYear()} Still Painting Co. · Burlington, VT</p>
            <p>Houses · Decks · Fences · Staining</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
