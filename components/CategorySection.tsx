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

          {/* ── video ─────────────── */}
          <div
            className={`flex-1 w-full transition-all duration-700 delay-150 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="group relative">
              {/* Frame container matching ShowcaseCarousel style */}
              <div className="rounded-2xl sm:rounded-2xl border border-brand-900/8 bg-gray-200 pt-2 pl-2 pr-2 pb-2 sm:pb-6 shadow-md transition-shadow duration-300 hover:shadow-xl">
                <div className="aspect-[16/9] overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
                  <iframe
                    // Added modestbranding=1 and controls=0 to hide YouTube tags/UI as much as possible
                    src={`${imageSrc.replace('youtu.be/', 'www.youtube.com/embed/').split('?')[0]}?modestbranding=1&rel=0&iv_load_policy=3&controls=0`}
                    title={title}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
