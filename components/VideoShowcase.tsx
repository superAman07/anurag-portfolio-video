'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoShowcaseProps {
  heading: string;
  description?: string;
  videos: string[];
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({
  heading,
  description,
  videos,
}) => {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(videos.length / 2)
  );
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteractedMute, setHasInteractedMute] = useState(false);
  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState(0); // -1 left, 1 right
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  /* ── Intersection observer: fade-in + auto-pause ─── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          // Pause all videos when section not visible
          videoRefs.current.forEach((v) => v?.pause());
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ── Play/pause logic based on active index ───────── */
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex && visible) {
        video.muted = isMuted;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex, visible, isMuted]);

  /* ── Keyboard navigation ─────────────────────────── */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, videos.length]);

  const navigate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setActiveIndex((prev) => {
        const next = prev + dir;
        if (next < 0) return videos.length - 1;
        if (next >= videos.length) return 0;
        return next;
      });
    },
    [videos.length]
  );

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (!hasInteractedMute) setHasInteractedMute(true);
  };

  /* ── Get display order: [left, center, right] ────── */
  const getVisibleIndices = () => {
    const left =
      activeIndex - 1 < 0 ? videos.length - 1 : activeIndex - 1;
    const right =
      activeIndex + 1 >= videos.length ? 0 : activeIndex + 1;
    return [left, activeIndex, right];
  };

  const [leftIdx, centerIdx, rightIdx] = getVisibleIndices();

  /* ── Card style for 3D perspective ───────────────── */
  const getCardStyle = (
    position: 'left' | 'center' | 'right'
  ): React.CSSProperties => {
    switch (position) {
      case 'left':
        return {
          transform: 'perspective(1200px) rotateY(12deg) scale(0.78)',
          filter: 'brightness(0.55)',
          zIndex: 1,
        };
      case 'center':
        return {
          transform: 'perspective(1200px) rotateY(0deg) scale(1)',
          filter: 'brightness(1)',
          zIndex: 10,
        };
      case 'right':
        return {
          transform: 'perspective(1200px) rotateY(-12deg) scale(0.78)',
          filter: 'brightness(0.55)',
          zIndex: 1,
        };
    }
  };

  /* ── Slide animation variants ────────────────────── */
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.85,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.85,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      },
    }),
  };

  /* ── Render a single video card ──────────────────── */
  const renderCard = (
    videoIndex: number,
    position: 'left' | 'center' | 'right'
  ) => {
    const isActive = position === 'center';

    return (
      <motion.div
        key={`${position}-${videoIndex}`}
        className={`
          relative flex-shrink-0 cursor-pointer
          transition-all duration-500 ease-out
          ${position === 'center' ? 'w-[260px] sm:w-[280px] lg:w-[300px]' : 'w-[200px] sm:w-[220px] lg:w-[240px]'}
          ${position !== 'center' ? 'hidden sm:block' : ''}
        `}
        style={getCardStyle(position)}
        onClick={() => {
          if (position === 'left') navigate(-1);
          if (position === 'right') navigate(1);
        }}
        whileHover={
          !isActive
            ? { scale: 0.82, filter: 'brightness(0.7)' }
            : undefined
        }
      >
        {/* Video frame with premium card styling */}
        <div
          className={`
            relative overflow-hidden rounded-2xl
            ${isActive
              ? 'ring-2 ring-accent/30 shadow-2xl shadow-accent/10'
              : 'shadow-xl shadow-brand-900/10'
            }
          `}
        >
          {/* Aspect ratio container for 9:16 */}
          <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-brand-950">
            <video
              ref={(el) => {
                videoRefs.current[videoIndex] = el;
              }}
              src={videos[videoIndex]}
              loop
              playsInline
              muted={isMuted}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Gradient overlay for non-active cards */}
            {!isActive && (
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-brand-950/20" />
            )}

            {/* Active card overlays */}
            {isActive && (
              <>
                {/* Top gradient for visual depth */}
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/20 to-transparent" />

                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 to-transparent" />

                {/* "Now Playing" indicator */}
                <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 backdrop-blur-md">
                  <span className="flex items-center gap-1">
                    <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                    <span className="inline-block h-2 w-0.5 animate-[pulse_1s_ease-in-out_0.15s_infinite] rounded-full bg-white/80" />
                    <span className="inline-block h-3 w-0.5 animate-[pulse_1s_ease-in-out_0.3s_infinite] rounded-full bg-white/80" />
                    <span className="inline-block h-1.5 w-0.5 animate-[pulse_1s_ease-in-out_0.45s_infinite] rounded-full bg-white/80" />
                  </span>
                </div>

                {/* Floating Mute/Unmute pill — glassmorphism style */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute();
                  }}
                  className={`
                    absolute bottom-3 right-3 z-20
                    flex items-center gap-2
                    rounded-full border border-white/15
                    bg-black/40 backdrop-blur-xl
                    px-3 py-2
                    text-white/90
                    transition-all duration-300
                    hover:bg-black/60 hover:border-white/25
                    active:scale-95
                    ${!hasInteractedMute ? 'animate-[muteHint_2s_ease-in-out_infinite]' : ''}
                  `}
                >
                  {/* Mute/Unmute icon */}
                  {isMuted ? (
                    <svg
                      className="h-4 w-4 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-4 w-4 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                      />
                    </svg>
                  )}

                  {/* Text label — only shown before first interaction */}
                  {!hasInteractedMute && (
                    <span className="text-xs font-medium whitespace-nowrap">
                      Tap to unmute
                    </span>
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  /* ── Dot indicators ──────────────────────────────── */
  const renderDots = () => (
    <div className="mt-6 flex items-center justify-center gap-2">
      {videos.map((_, i) => (
        <button
          key={i}
          onClick={() => {
            setDirection(i > activeIndex ? 1 : -1);
            setActiveIndex(i);
          }}
          className={`
            h-2 rounded-full transition-all duration-300
            ${i === activeIndex
              ? 'w-8 bg-accent'
              : 'w-2 bg-brand-900/15 hover:bg-brand-900/30'
            }
          `}
          aria-label={`Go to video ${i + 1}`}
        />
      ))}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.03] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ── Section Header ─────────────────────── */}
        <div
          className={`transition-all duration-700 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 mt-2">
            <h2 className="font-display text-2xl text-center font-extrabold tracking-tight text-brand-900 sm:text-3xl lg:text-4xl">
              {heading}
            </h2>
            {description && (
              <p className="max-w-2xl text-center text-base sm:text-lg text-gray-700 whitespace-pre-line px-4">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* ── Carousel Stage ─────────────────────── */}
        <div
          className={`relative mt-10 sm:mt-14 transition-all duration-700 delay-200 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Navigation Arrows — Desktop: sides, Mobile: below */}
          <button
            onClick={() => navigate(-1)}
            aria-label="Previous video"
            className="
              absolute -left-2 sm:-left-4 lg:-left-6 top-1/2 z-30 -translate-y-1/2
              hidden sm:flex
              h-11 w-11 lg:h-12 lg:w-12 items-center justify-center
              rounded-full border border-brand-900/10
              bg-white/90 shadow-lg backdrop-blur
              transition-all duration-200
              hover:bg-brand-900 hover:text-white hover:border-brand-900
              hover:shadow-xl hover:scale-105
              active:scale-95
            "
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            onClick={() => navigate(1)}
            aria-label="Next video"
            className="
              absolute -right-2 sm:-right-4 lg:-right-6 top-1/2 z-30 -translate-y-1/2
              hidden sm:flex
              h-11 w-11 lg:h-12 lg:w-12 items-center justify-center
              rounded-full border border-brand-900/10
              bg-white/90 shadow-lg backdrop-blur
              transition-all duration-200
              hover:bg-brand-900 hover:text-white hover:border-brand-900
              hover:shadow-xl hover:scale-105
              active:scale-95
            "
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          {/* ── 3D Carousel Track ──────────────── */}
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-10"
              style={{ perspective: '1200px' }}
            >
              {renderCard(leftIdx, 'left')}
              {renderCard(centerIdx, 'center')}
              {renderCard(rightIdx, 'right')}
            </motion.div>
          </AnimatePresence>

          {/* Mobile navigation arrows */}
          <div className="mt-6 flex items-center justify-center gap-4 sm:hidden">
            <button
              onClick={() => navigate(-1)}
              aria-label="Previous video"
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full border border-brand-900/10
                bg-white shadow-md
                transition-all duration-200
                hover:bg-brand-900 hover:text-white
                active:scale-90
              "
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              onClick={() => navigate(1)}
              aria-label="Next video"
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full border border-brand-900/10
                bg-white shadow-md
                transition-all duration-200
                hover:bg-brand-900 hover:text-white
                active:scale-90
              "
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          {renderDots()}
        </div>
      </div>
    </section>
  );
};
