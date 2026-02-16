'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Project } from '../types';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const ProjectGrid: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;

    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };

    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selected, close]);

  return (
    <>
      <section id="portfolio" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Portfolio
            </p>

            <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl lg:text-5xl">
              Selected Works
            </h2>

            <p className="mt-4 text-base leading-relaxed text-brand-800/55">
              Explore our diverse portfolio of animated explainers, promo
              videos, and product demos crafted for global brands.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelected}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div
            className="absolute inset-0 bg-brand-950/60 backdrop-blur-sm"
            onClick={close}
          />

          <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto no-scrollbar">
            <button
              onClick={close}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition-colors hover:bg-black/50"
              aria-label="Close"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative aspect-video w-full bg-brand-950">
              <img
                src={selected.thumbnail}
                alt={selected.title}
                className="h-full w-full object-cover opacity-80"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl text-white transition-transform hover:scale-110">
                  <svg
                    className="h-8 w-8 translate-x-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                  {selected.category}
                </span>

                {selected.year && (
                  <span className="text-sm text-brand-800/40">
                    {selected.year}
                  </span>
                )}
              </div>

              <h2 className="font-display text-2xl font-bold text-brand-900 sm:text-3xl">
                {selected.title}
              </h2>

              <p className="mt-4 text-base leading-relaxed text-brand-800/60">
                {selected.description}
              </p>

              {selected.tags && selected.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-brand-900/10 bg-surface-muted px-3 py-1 text-xs font-medium text-brand-800/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-8 flex gap-3">
                <button className="rounded-xl bg-brand-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800">
                  View Case Study
                </button>

                <button
                  onClick={close}
                  className="rounded-xl border border-brand-900/10 px-6 py-3 text-sm font-medium text-brand-800/60 transition-colors hover:bg-surface-muted"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
