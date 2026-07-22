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
    title: "Porch Refinish",
    location: "Burlington, VT",
    before: ["/kami_before 1.PNG"],
    after: ["/kami_after1.jpeg"],
  },
];

function PhotoStrip({ srcs, alt }: { srcs: string[]; alt: string }) {
  return (
    <div className="flex flex-col h-full">
      {srcs.map((src, i) => (
        <div key={i} className="relative overflow-hidden flex-1 border-b-2 last:border-b-0 border-stone">
          <img src={src} alt={`${alt} ${i + 1}`} className="w-full h-full object-cover object-center" />
        </div>
      ))}
    </div>
  );
}

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const project = projects[current];
  const maxPhotos = Math.max(project.before.length, project.after.length);
  const heightClass = maxPhotos > 1 ? "h-[36rem] sm:h-[40rem]" : "h-72 sm:h-96";

  return (
    <div>
      {/* Before / After grid */}
      <div className="rounded-2xl overflow-hidden shadow-lg bg-stone">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Before */}
          <div className="sm:border-r-2 border-b-2 sm:border-b-0 border-stone">
            <div className={heightClass}>
              <PhotoStrip srcs={project.before} alt={`Before: ${project.title}`} />
            </div>
            <div className="bg-charcoal/75 py-2.5 text-center">
              <span className="text-stone-light text-sm font-bold tracking-wide uppercase">Before</span>
            </div>
          </div>

          {/* After */}
          <div>
            <div className={heightClass}>
              <PhotoStrip srcs={project.after} alt={`After: ${project.title}`} />
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
