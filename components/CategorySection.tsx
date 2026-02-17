'use client';

import React, { useRef, useEffect, useState } from 'react';

interface CategorySectionProps {
  title: string;
  description: string;
  imageSrc: string;
  inverted?: boolean;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  description,
  imageSrc,
  inverted = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="services"
      className="overflow-hidden py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`flex flex-col items-center gap-12 lg:gap-20 ${
            inverted ? 'lg:flex-row-reverse' : 'lg:flex-row'
          }`}
        >
          {/* ── Text ─────────────── */}
          <div
            className={`flex-1 transition-all duration-700 ${
              visible
                ? 'translate-x-0 opacity-100'
                : inverted
                ? 'translate-x-12 opacity-0'
                : '-translate-x-12 opacity-0'
            }`}
          >
            <p className="mb-4 text-xs hidden font-bold uppercase tracking-[0.2em] text-accent">
              What We Do
            </p>

            <h3 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-brand-900 sm:text-4xl">
              {title}
            </h3>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-brand-800/55">
              {description}
            </p>

            <button className="mt-8 rounded-full border border-brand-900/15 px-7 py-2.5 text-sm font-semibold text-brand-900 transition-all hover:bg-brand-900 hover:text-white hover:border-brand-900">
              Learn More →
            </button>
          </div>

          {/* ── Image ─────────────── */}
          <div
            className={`flex-1 w-full transition-all duration-700 delay-150 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="group relative overflow-hidden rounded-3xl bg-surface-muted shadow-xl shadow-brand-900/10">
              <div className="aspect-[16/9] overflow-hidden">
                <iframe
                  src={imageSrc.replace('youtu.be/', 'www.youtube.com/embed/').split('?')[0]}
                  title={title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Minimal corner accent */}
              <div
                className={`absolute -bottom-2 ${
                  inverted ? '-left-2' : '-right-2'
                } h-16 w-16 rounded-xl bg-accent/15 backdrop-blur-md`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
