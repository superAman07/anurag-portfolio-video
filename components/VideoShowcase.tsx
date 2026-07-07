'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';

interface VideoShowcaseProps {
  heading: string;
  description?: string;
  videos: string[];
  initialIndex?: number;
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({
  heading,
  description,
  videos,
  initialIndex,
}) => {
  const defaultIndex = initialIndex !== undefined ? initialIndex : Math.floor(videos.length / 2);
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteractedMute, setHasInteractedMute] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (!entry.isIntersecting) {
          videoRefs.current.forEach((v) => v?.pause());
        } else {
          const active = videoRefs.current[activeIndex];
          if (active) {
            active.muted = isMuted;
            active.play().catch(() => {});
          }
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [activeIndex, isMuted]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex && isVisibleRef.current) {
        video.muted = isMuted;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex, isMuted]);

  const navigate = useCallback(
    (dir: number) => {
      setActiveIndex((prev) => {
        const next = prev + dir;
        if (next < 0) return videos.length - 1;
        if (next >= videos.length) return 0;
        return next;
      });
    },
    [videos.length]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (!hasInteractedMute) setHasInteractedMute(true);
  };

  const maxHalf = Math.min(2, Math.floor((videos.length - 1) / 2));
  const positions: number[] = [];
  for (let i = -maxHalf; i <= maxHalf; i++) positions.push(i);

  const visibleCards = positions.map((pos) => ({
    videoIndex: ((activeIndex + pos) % videos.length + videos.length) % videos.length,
    position: pos,
  }));

  const getVisibilityClass = (distance: number): string => {
    if (distance === 0) return '';
    if (distance === 1) return 'hidden sm:block';
    return 'hidden lg:block';
  };

  const getFlexClass = (distance: number): string => {
    if (distance === 0) return 'flex-[1.15] max-w-[340px]';
    if (distance === 1) return 'flex-1 max-w-[300px]';
    return 'flex-[0.9] max-w-[270px]';
  };

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <h2 className="font-display text-2xl text-center font-extrabold tracking-tight text-brand-900 sm:text-3xl lg:text-4xl">
            {heading}
          </h2>
          {description && (
            <p className="max-w-2xl text-center text-base sm:text-lg text-gray-700 px-4">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="relative mt-8 sm:mt-10 lg:mt-12 px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">
          {visibleCards.map(({ videoIndex, position }) => {
            const distance = Math.abs(position);
            const isCenter = position === 0;
            const isLeftEdge = position === -maxHalf;
            const isRightEdge = position === maxHalf;

            return (
              <div
                key={`slot-${position}`}
                className={`relative min-w-0 transition-all duration-300 ease-out ${getFlexClass(distance)} ${getVisibilityClass(distance)} ${!isCenter ? 'cursor-pointer' : ''} w-[260px] sm:w-auto`}
                onClick={() => {
                  if (!isCenter) navigate(position > 0 ? 1 : -1);
                }}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl bg-brand-950 ${isCenter ? 'ring-1 ring-accent/20 shadow-xl' : 'shadow-md'}`}
                >
                  <div className="aspect-[9/16]">
                    <video
                      key={videoIndex}
                      ref={(el) => {
                        videoRefs.current[videoIndex] = el;
                      }}
                      src={videos[videoIndex]}
                      loop
                      playsInline
                      muted={isMuted}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {!isCenter && (
                    <div className="absolute inset-0 bg-black/40 pointer-events-none rounded-2xl" />
                  )}

                  {isLeftEdge && (
                    <button
                      onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                      aria-label="Previous video"
                      className="absolute left-2 top-1/2 z-30 -translate-y-1/2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur transition-colors duration-200 hover:bg-brand-900 hover:text-white"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </button>
                  )}

                  {isRightEdge && (
                    <button
                      onClick={(e) => { e.stopPropagation(); navigate(1); }}
                      aria-label="Next video"
                      className="absolute right-2 top-1/2 z-30 -translate-y-1/2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur transition-colors duration-200 hover:bg-brand-900 hover:text-white"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  )}

                  {isCenter && (
                    <React.Fragment>
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMute();
                        }}
                        className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 px-2.5 py-1.5 text-white/90 transition-colors duration-200 hover:bg-black/55"
                      >
                        {isMuted ? (
                          <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                          </svg>
                        ) : (
                          <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          </svg>
                        )}
                        {!hasInteractedMute && (
                          <span className="text-[11px] font-medium whitespace-nowrap">
                            Tap to unmute
                          </span>
                        )}
                      </button>
                    </React.Fragment>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-center gap-4 sm:hidden">
          <button
            onClick={() => navigate(-1)}
            aria-label="Previous video"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-900/10 bg-white shadow-md transition-colors duration-200 hover:bg-brand-900 hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => navigate(1)}
            aria-label="Next video"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-900/10 bg-white shadow-md transition-colors duration-200 hover:bg-brand-900 hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="mt-4 sm:mt-6 flex items-center justify-center gap-1.5">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-accent' : 'w-1.5 bg-brand-900/15 hover:bg-brand-900/25'}`}
              aria-label={`Go to video ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
