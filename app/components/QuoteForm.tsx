"use client";

import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  address: string;
  description: string;
};

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    address: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote Request from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}\n\nProject Details:\n${form.description}`
    );
    window.open(`mailto:stillpaintingco@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border-2 border-sage rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-forest" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-forest-dark mb-3">
          Your email app should open!
        </h3>
        <p className="text-charcoal/70 text-lg mb-4">
          If it didn&apos;t open automatically, just email us directly:
        </p>
        <a
          href="mailto:stillpaintingco@gmail.com"
          className="text-slate font-semibold text-lg hover:underline"
        >
          stillpaintingco@gmail.com
        </a>
      </div>
    );
  }

  const inputClass =
    "w-full border-2 border-stone rounded-xl px-4 py-3 text-lg text-charcoal bg-white focus:outline-none focus:border-forest transition-colors";
  const labelClass = "block text-charcoal font-semibold text-lg mb-2";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 space-y-6 border border-cream-dark"
    >
      <div>
        <label htmlFor="name" className={labelClass}>
          Your Name *
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={update("name")}
          placeholder="Jane Smith"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone Number *
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={form.phone}
          onChange={update("phone")}
          placeholder="(802) 555-1234"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="address" className={labelClass}>
          Property Address *
        </label>
        <input
          id="address"
          type="text"
          required
          value={form.address}
          onChange={update("address")}
          placeholder="123 Main St, Burlington, VT"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="description" className={labelClass}>
          Tell Us About Your Project *
        </label>
        <textarea
          id="description"
          required
          rows={5}
          value={form.description}
          onChange={update("description")}
          placeholder="e.g. Two-story house with cedar siding, last painted about 10 years ago. Also have a small deck that needs staining."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-slate hover:bg-slate-light text-white font-bold text-xl py-4 rounded-full transition-colors min-h-[56px] shadow-md cursor-pointer"
      >
        Send My Quote Request →
      </button>

      <p className="text-center text-sm text-charcoal/50">
        We&apos;ll get back to you within 24 hours. No pressure, no spam.
      </p>
    </form>
  );
}
