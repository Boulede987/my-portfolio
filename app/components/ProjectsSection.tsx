'use client';

import { useState } from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface Props {
  projects: Project[];
}

const ProjectsSection = ({ projects }: Props) => {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const toggleProject = (id: number) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); } else { next.add(id); }
      return next;
    });
  };

  const visible = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-16 bg-slate-800/50 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-white">Selected Projects</h2>
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-sm text-slate-400 hover:text-emerald-400 transition-colors underline underline-offset-2"
          >
            {showAll ? 'Show featured only' : 'Show all projects'}
          </button>
        </div>
        <div className="flex flex-col gap-6">
          {visible.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              expanded={expandedIds.has(project.id)}
              onToggle={toggleProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
