'use client';

import { useState } from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface Props {
  projects: Project[];
}

const ProjectsSection = ({ projects }: Props) => {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  const toggleProject = (id: number) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); } else { next.add(id); }
      return next;
    });
  };

  return (
    <section id="projects" className="py-16 bg-slate-800/50 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-white">Selected Projects</h2>
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
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
