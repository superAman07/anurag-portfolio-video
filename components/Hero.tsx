'use client';

import React from 'react';

const stats = [
  { value: '100+', label: 'Quality Videos' },
  { value: '5+', label: 'Million Views' },
  { value: '15+', label: 'Happy Clients' },
];

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Background decorative soft shapes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-500/5 blur-3xl" />
      </div>

      {/* Responsive Background Video Container */}
      <div className="absolute inset-0 z-0">
        {/* DESKTOP VIDEO (lg and up) */}
        <div className="hidden lg:block absolute inset-y-0 w-[100%] overflow-hidden">
          <video
            src="/anurag-hero-bg.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* MOBILE & TABLET VIDEO (below lg) */}
        <div className="block lg:hidden absolute inset-0 pt-20 overflow-hidden">
          <video
            src="/anurag-hero-bg.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover object-[center_right]"
          />
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 mx-auto flex max-w-7xl px-5 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)] lg:min-h-screen items-center">
        <div className="w-full max-w-2xl py-12 lg:py-0">
          {/* Eyebrow */}
          <div className="mb-4 sm:mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand-900/10 bg-brand-900/[0.03] px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-brand-800 animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Web · Video Editor
          </div>

          {/* Heading */}
          <h1 className="font-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight text-brand-900 animate-fade-in-up">
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
            className="mt-4 sm:mt-6 max-w-md lg:max-w-lg text-base sm:text-lg lg:text-xl leading-relaxed text-brand-800 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Documentaries, Educational Videos, Motion Graphics – all designed to
            make audience feel.
          </p>

          {/* Statistics */}
          <div
            className="mt-10 sm:mt-16 flex flex-wrap gap-8 sm:gap-12 border-t border-brand-900/10 pt-8 sm:pt-10 animate-fade-in-up"
            style={{ animationDelay: '0.35s' }}
          >
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 leading-none">
                  {s.value}
                </span>
                <span className="mt-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-brand-800/60">
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