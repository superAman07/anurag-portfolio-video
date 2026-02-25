'use client';

import React from 'react';

const stats = [
  { value: '100+', label: 'Quality Videos' },
  { value: '5+', label: 'Million Views' },
  { value: '15+', label: 'Happy Clients' },
];

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center lg:block overflow-hidden bg-white">
      {/* Background decorative soft shapes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-500/5 blur-3xl" />
      </div>

      {/* Responsive Video Container - HIDDEN on mobile */}
      <div className="hidden lg:block absolute inset-0 z-0 overflow-hidden">
        <video
          src="/anurag-hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover object-[center_75%]"
        />
      </div>

      {/* Content Layer - Centered on mobile, Left-aligned on desktop */}
      <div className="relative z-10 mx-auto flex flex-col items-center text-center lg:items-start lg:text-left justify-center max-w-7xl px-5 sm:px-6 lg:px-8 min-h-screen lg:py-0">
        <div className="w-full max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-4 sm:mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand-900/10 bg-brand-900/[0.03] px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-brand-800 animate-fade-in mx-auto lg:mx-0">
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
            className="mt-6 mx-auto lg:mx-0 max-w-md lg:max-w-lg text-base sm:text-lg lg:text-xl leading-relaxed text-brand-800 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Documentaries, Educational Videos, Motion Graphics – all designed to
            make audience feel.
          </p>

          {/* Statistics - Centered on mobile */}
          <div
            className="mt-10 sm:mt-16 flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12 border-t border-brand-900/10 pt-10 animate-fade-in-up"
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