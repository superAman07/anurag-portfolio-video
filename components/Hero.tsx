'use client';

import React from 'react';

const stats = [
  { value: '100+', label: 'Quality Videos' },
  { value: '5+', label: 'Million Views' },
  { value: '50+', label: 'Happy Clients' },
];

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-500/5 blur-3xl" />
      </div>

      <div className="relative block lg:hidden">
        <div className="relative w-full overflow-hidden">
          <img
            src="/animation_1_mobile.png"
            alt=""
            className="w-full h-auto object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        </div>
      </div>
      {/* Background image — DESKTOP */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[70%] hidden lg:block">
        <img
          src="/animation_1.png"
          alt=""
          className="h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      {/* Desktop: full background right side */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[70%] hidden lg:block">
        <img
          src="/animation_1.png"
          alt=""
          className="h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl px-5 sm:px-6 lg:px-8 lg:min-h-screen lg:items-center">
        <div className="w-full max-w-2xl py-8 sm:py-12 lg:py-0">
          {/* Eyebrow */}
          <div className="mb-4 sm:mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand-900/10 bg-brand-900/[0.03] px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-brand-800 animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Web · Video Editor
          </div>

          {/* Heading */}
          <h1 className="font-display text-[2.25rem] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight text-brand-900 animate-fade-in-up">
            I craft videos
            <br />
            that{' '}
            <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
              Perform
            </span>
            .
          </h1>

          {/* Sub-copy */}
          <p
            className="mt-4 sm:mt-6 max-w-md lg:max-w-lg text-base sm:text-lg leading-relaxed text-brand-800/60 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Documentaries, Educational Videos, Motion Graphics – all designed to
            make audience feel.
          </p>

          {/* Stats */}
          <div
            className="mt-10 sm:mt-16 flex gap-6 sm:gap-10 border-t border-brand-900/10 pt-6 sm:pt-8 animate-fade-in-up"
            style={{ animationDelay: '0.35s' }}
          >
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-900">
                  {s.value}
                </span>
                <span className="mt-1 text-[10px] sm:text-xs font-medium uppercase tracking-wider text-brand-800/50">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
