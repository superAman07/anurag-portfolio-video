'use client';

import React from 'react';

const stats = [
  { value: '100+', label: 'Quality Videos' },
  { value: '5+', label: 'Million Views' },
  { value: '50+', label: 'Happy Clients' },
];

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-28 pb-16 lg:pt-0 lg:pb-0">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-500/5 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 w-[70%] hidden lg:block">
        <img
          src="/animation_1.png"
          alt=""
          className="h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ── Left Column ── */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand-900/10 bg-brand-900/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-800 animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Web - Video Editor
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-900 sm:text-5xl lg:text-6xl xl:text-7xl animate-fade-in-up">
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
              className="mt-6 max-w-lg text-lg leading-relaxed text-brand-800/60 animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              Documentries, Educational Videos, Motion Graphics - all designed to make audience feel.
            </p>


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
        </div>
      </div>
    </section>
  );
};
