'use client';

import React, { useRef, useState, useEffect } from 'react';

interface ShowcaseItem {
  title: string;
  image: string;
}

interface ShowcaseCarouselProps {
  heading: string;
  description: string;
  items: ShowcaseItem[];
}

export const ShowcaseCarousel: React.FC<ShowcaseCarouselProps> = ({
  heading,
  description,
  items,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [visible, setVisible] = useState(false);

  /* Intersection observer for fade-in */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* Track scroll position */
  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    updateScrollButtons();
    return () => el.removeEventListener('scroll', updateScrollButtons);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth =
      el.querySelector<HTMLElement>('[data-card]')?.offsetWidth ?? 340;
    el.scrollBy({
      left: direction === 'left' ? -cardWidth - 24 : cardWidth + 24,
      behavior: 'smooth',
    });
  };

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`transition-all duration-700 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Heading with decorative line */}
          <div className="flex items-center gap-4 sm:gap-6">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-brand-900 sm:text-3xl lg:text-4xl whitespace-nowrap">
              {heading}
            </h2>

            <div className="hidden sm:flex items-center gap-3 flex-1">
              <div className="h-[2px] flex-1 bg-brand-900/15 rounded-full" />
              <div className="h-3 w-3 rounded-full bg-brand-900" />
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-brand-800/55">
            {description}
          </p>
        </div>

        {/* Carousel */}
        <div
          className={`relative mt-10 sm:mt-14 transition-all duration-700 delay-200 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Navigation arrows */}
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className={`absolute -left-3 sm:-left-5 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-brand-900/10 bg-white/90 shadow-lg backdrop-blur transition-all hover:bg-brand-900 hover:text-white hover:border-brand-900 ${
              canScrollLeft ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
            }`}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className={`absolute -right-3 sm:-right-5 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-brand-900/10 bg-white/90 shadow-lg backdrop-blur transition-all hover:bg-brand-900 hover:text-white hover:border-brand-900 ${
              canScrollRight ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
            }`}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                data-card
                className="group flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[calc(33.333%-16px)] snap-start"
              >
                {/* Card */}
                <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-surface-muted shadow-md shadow-brand-900/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-900/10">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-brand-900 px-1">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};