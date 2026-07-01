"use client";
import { useState } from "react";

export default function NavMenu() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Our Process", href: "#process" },
    { label: "Before & After", href: "#gallery" },
    { label: "About Us", href: "#about" },
    { label: "Reviews", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Get a Quote", href: "#quote" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-stone/10 transition-colors"
        aria-label="Menu"
      >
        <span className={`block w-6 h-0.5 bg-stone transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-stone transition-all duration-200 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-stone transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-12 bg-forest rounded-2xl shadow-xl py-2 w-52 z-50">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-5 py-3 text-stone font-semibold hover:bg-forest-dark transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
