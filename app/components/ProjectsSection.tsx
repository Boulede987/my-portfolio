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
  { key: 'work', title: 'Work', emptyNote: "Alternating weekly between work and coursework right now — first write-up coming soon." },
  { key: 'engineer', title: 'CNAM Engineer' },
  { key: 'internship', title: 'BTS SIO Internships' },
  { key: 'bts', title: 'BTS SIO' },
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

  const visibleSections = SECTIONS.map((section) => ({
    section,
    sectionProjects: projects.filter((p) => p.category === section.key),
  })).filter(({ sectionProjects, section }) => sectionProjects.length > 0 || section.emptyNote);

  return (
    <section id="projects" className="py-16 bg-surface/50 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display font-bold text-3xl text-bone mb-12">Projects</h2>
        <div className="flex flex-col">
          {visibleSections.map(({ section, sectionProjects }, i) => (
            <div key={section.key}>
              {i > 0 && <hr className="divider" />}
              <h3 className="font-mono text-xs uppercase tracking-wider text-iron mb-6">{section.title}</h3>
              {sectionProjects.length === 0 ? (
                <p className="text-muted italic">{section.emptyNote}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
