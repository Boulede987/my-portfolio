'use client';

import { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import ProjectCard from './ProjectCard';

interface Props {
  projects: Project[];
}

interface SectionDef {
  key: ProjectCategory;
  title: string;
  emptyNote?: string;
}

const SECTIONS: SectionDef[] = [
  { key: 'bts', title: 'BTS SIO' },
  { key: 'internship', title: 'Internships' },
  { key: 'engineer', title: 'CNAM Engineer' },
  { key: 'work', title: 'Work', emptyNote: "Alternating weekly between work and coursework right now — first write-up coming soon." },
];

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
        <h2 className="text-3xl font-bold text-white mb-12">Projects</h2>
        <div className="flex flex-col gap-16">
          {SECTIONS.map((section) => {
            const sectionProjects = projects.filter((p) => p.category === section.key);
            if (sectionProjects.length === 0 && !section.emptyNote) return null;

            return (
              <div key={section.key}>
                <h3 className="text-xl font-semibold text-emerald-400 mb-6">{section.title}</h3>
                {sectionProjects.length === 0 ? (
                  <p className="text-slate-400 italic">{section.emptyNote}</p>
                ) : (
                  <div className="flex flex-col gap-6">
                    {sectionProjects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        expanded={expandedIds.has(project.id)}
                        onToggle={toggleProject}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
