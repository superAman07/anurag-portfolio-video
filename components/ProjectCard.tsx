'use client';

import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
  index,
}) => {
  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-surface-muted animate-fade-in-up"
      style={{ animationDelay: `${index * 0.06}s` }}
      onClick={() => onClick(project)}
    >
      {/* Image */}
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content — slides up on hover */}
      <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="mb-2 inline-block rounded-full bg-accent/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
          {project.category}
        </span>

        <h3 className="text-lg font-display font-bold leading-snug text-white">
          {project.title}
        </h3>
      </div>

      {/* Subtle always-visible label */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/70 to-transparent p-5 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-base font-display font-semibold text-white drop-shadow-md">
          {project.title}
        </h3>
      </div>
    </div>
  );
};
