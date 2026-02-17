'use client';

import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden bg-brand-900 py-28 lg:py-36"
      id="contact"
    >
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-y-1/2 rounded-full bg-accent/15 blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-accent-light">
          Let&apos;s Work Together
        </p>

        <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          I'm ready to elevate 
          <br />
          your videos.
        </h2>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button className="rounded-full bg-accent px-10 py-4 text-base font-bold text-white shadow-xl shadow-accent/30 transition-all hover:-translate-y-px hover:bg-orange-600 hover:shadow-accent/50 active:translate-y-0">
            Contact Me →
          </button>

          <button className="rounded-full border border-white/20 px-10 py-4 text-base font-semibold text-white/80 transition-all hover:border-white/40 hover:text-white">
            YouTube
          </button>
        </div>

        <p className="mt-6 text-sm text-white/30">
          Book a free 30-minute strategy call. No commitment — just a
          conversation about how video can transform your business.
        </p>
      </div>
    </section>
  );
};
