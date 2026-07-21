"use client";
import { useState } from "react";

const projects = [
  {
    title: "Porch Refinish",
    location: "Colchester, VT",
    before: ["/porch1before.JPEG", "/porch2before.jpeg"],
    after: ["/porch1after.jpeg", "/porch2after.jpeg"],
  },
  {
    title: "Exterior Painting",
    location: "Burlington, VT",
    before: ["/kami_before1.jpeg"],
    after: ["/kami_after1.jpeg", "/kami_after2.jpeg"],
  },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const project = projects[current];

  return (
    <div>
      {/* Project tabs */}
      <div className="flex justify-center gap-3 mb-8">
        {projects.map((p, i) => (
          <button
            key={p.title}
            onClick={() => setCurrent(i)}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
              current === i
                ? "bg-slate text-white shadow-md"
                : "bg-stone/30 text-stone/70 hover:bg-stone/50"
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Before / After grid */}
      <div className="rounded-2xl overflow-hidden shadow-lg bg-stone">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Before */}
          <div className="sm:border-r-2 border-b-2 sm:border-b-0 border-stone">
            <div className={`grid ${project.before.length > 1 ? "grid-rows-2" : "grid-rows-1"}`}>
              {project.before.map((src, i) => (
                <div key={i} className={`relative overflow-hidden border-b-2 border-stone ${project.before.length > 1 ? "h-52 sm:h-56" : "h-72 sm:h-96"}`}>
                  <img src={src} alt={`Before: ${project.title}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="bg-charcoal/75 py-2.5 text-center">
              <span className="text-stone-light text-sm font-bold tracking-wide uppercase">Before</span>
            </div>
          </div>

          {/* After */}
          <div>
            <div className={`grid ${project.after.length > 1 ? "grid-rows-2" : "grid-rows-1"}`}>
              {project.after.map((src, i) => (
                <div key={i} className={`relative overflow-hidden border-b-2 border-stone ${project.after.length > 1 ? "h-52 sm:h-56" : "h-72 sm:h-96"}`}>
                  <img src={src} alt={`After: ${project.title}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="bg-slate py-2.5 text-center">
              <span className="text-white text-sm font-bold tracking-wide uppercase">After</span>
            </div>
          </div>
        </div>

        <div className="px-5 py-4 border-t-2 border-cream flex items-center justify-between">
          <div>
            <p className="font-display font-semibold text-forest-dark text-xl">{project.title}</p>
            <p className="text-sm text-charcoal/55">{project.location}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrent((current - 1 + projects.length) % projects.length)}
              className="w-8 h-8 rounded-full bg-slate/10 hover:bg-slate/20 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 text-forest-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <span className="text-sm text-charcoal/50">{current + 1} / {projects.length}</span>
            <button
              onClick={() => setCurrent((current + 1) % projects.length)}
              className="w-8 h-8 rounded-full bg-slate/10 hover:bg-slate/20 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 text-forest-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <p className="text-center text-stone/60 mt-8 text-base italic">
        More photos added after every job — check back soon!
      </p>
    </div>
  );
}
