'use client';

import React from 'react';

const stats = [
  { value: '120+', label: 'Explainer Videos' },
  { value: '200+', label: 'Motion Graphics' },
  { value: '50+', label: 'Promo Campaigns' },
];

const galleryImages = [
  'https://picsum.photos/seed/p1/600/400',
  'https://picsum.photos/seed/p2/600/400',
  'https://picsum.photos/seed/p3/600/400',
  'https://picsum.photos/seed/p4/600/400',
  'https://picsum.photos/seed/p5/600/400',
  'https://picsum.photos/seed/p6/600/400',
];

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-28 pb-16 lg:pt-0 lg:pb-0">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ── Left Column ── */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand-900/10 bg-brand-900/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-800 animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Award - Winning Studio
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-900 sm:text-5xl lg:text-6xl xl:text-7xl animate-fade-in-up">
              We craft videos
              <br />
              that{' '}
              <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                convert
              </span>
              .
            </h1>

            {/* Sub-copy */}
            <p
              className="mt-6 max-w-lg text-lg leading-relaxed text-brand-800/60 animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              Animated explainers, promo videos &amp; product demos — all
              designed to make your audience act. Trusted by 200+ brands
              worldwide.
            </p>

            {/* CTA Buttons */}
            <div
              className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <button className="rounded-full bg-brand-900 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-900/25 transition-all hover:bg-brand-800 hover:shadow-brand-900/40 hover:-translate-y-px active:translate-y-0">
                View Portfolio
              </button>

              <button className="group flex items-center gap-2 rounded-full border border-brand-900/15 px-8 py-3.5 text-sm font-semibold text-brand-900 transition-all hover:border-brand-900/30 hover:bg-brand-900/[0.03]">
                Watch Showreel
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div
              className="mt-16 flex gap-10 border-t border-brand-900/10 pt-8 animate-fade-in-up"
              style={{ animationDelay: '0.35s' }}
            >
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display text-3xl font-bold text-brand-900 lg:text-4xl">
                    {s.value}
                  </span>
                  <span className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-800/50">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column — Marquee Gallery ── */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative h-[640px] w-full max-w-md overflow-hidden rounded-3xl border border-black/5 bg-surface-muted shadow-2xl shadow-brand-900/10">
              {/* Fade masks */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-surface-muted to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-surface-muted to-transparent" />

              {/* Track */}
              <div className="animate-marquee-up flex flex-col gap-5 p-5">
                {[...galleryImages, ...galleryImages].map((img, i) => (
                  <div
                    key={i}
                    className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
                  >
                    <img
                      src={img}
                      alt={`Project ${(i % galleryImages.length) + 1}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>

            {/* Floating accent shapes */}
            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-2xl bg-accent/10 backdrop-blur-xl" />
            <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-brand-500/10 backdrop-blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
