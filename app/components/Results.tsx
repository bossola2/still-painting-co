const results = [
  { src: "/porch1after.jpeg", title: "Porch Refinish", location: "Colchester, VT" },
  { src: "/porch2after.jpeg", title: "Porch Refinish", location: "Colchester, VT" },
  { src: "/kami_after1.jpeg", title: "Porch Refinish", location: "Burlington, VT" },
];

export default function Results() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((r, i) => (
        <div key={i} className="rounded-2xl overflow-hidden shadow-lg bg-stone group">
          <div className="relative h-64 sm:h-72 overflow-hidden">
            <img
              src={r.src}
              alt={`${r.title} — ${r.location}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="px-5 py-4 border-t-2 border-cream">
            <p className="font-display font-semibold text-forest-dark text-xl">{r.title}</p>
            <p className="text-sm text-charcoal/55">{r.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
