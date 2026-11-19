import { useRef } from 'react';
import Image from 'next/image';
import { Calendar, ChevronDown, Download, FileText } from 'lucide-react';
import { Project } from '../types';
import FormattedText from './FormattedText';

interface Props {
  project: Project;
  expanded: boolean;
  onToggle: (id: number) => void;
}

const ProjectCard = ({ project, expanded, onToggle }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const hasFiles = project.files.length > 0;
  const hasMore = !!project.fullDescription;
  const detailsId = `project-details-${project.id}`;

  // Collapsing a long card can leave the reader far below it: bring its top back into view.
  const handleToggle = () => {
    const cardTop = cardRef.current?.getBoundingClientRect().top ?? 0;
    if (expanded && cardTop < 0) {
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onToggle(project.id);
  };

  return (
    <div
      ref={cardRef}
      className="corner-frame bg-surface overflow-hidden hover:ring-1 hover:ring-ember-bright/40 transition-shadow"
    >
      <div className="flex flex-col md:flex-row">
        {project.imageUrl && (
          <div className="relative w-full md:w-1/3 min-h-[200px]">
            <Image src={project.imageUrl} alt={`${project.name} preview`} fill className="object-cover" />
          </div>
        )}

        <div className={`w-full ${project.imageUrl ? 'md:w-2/3' : ''}`}>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-display font-bold text-xl text-bone">{project.name}</h3>
                <div className="flex items-center mt-1 text-sm font-mono text-muted">
                  <Calendar size={14} className="mr-1" />
                  <span>{project.period}</span>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap justify-end">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-surface-2 text-iron border border-iron/30 text-sm font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-muted mb-4">
              <FormattedText text={project.shortDescription} />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-iron hover:text-bone hover:underline text-sm transition-colors"
                >
                  View repository →
                </a>
              )}
              {hasMore && (
                <button
                  type="button"
                  onClick={handleToggle}
                  aria-expanded={expanded}
                  aria-controls={detailsId}
                  className="flex items-center gap-1 px-3 py-1.5 border border-iron/40 text-bone hover:border-ember-bright hover:text-ember-bright transition-colors text-sm font-mono uppercase tracking-wider"
                >
                  {expanded ? 'Show less' : 'Show more'}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 motion-reduce:transition-none ${expanded ? 'rotate-180' : ''}`}
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {hasMore && (
        // Animating grid rows from 0fr to 1fr lets the panel slide to its natural height.
        <div
          id={detailsId}
          inert={!expanded}
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out motion-reduce:transition-none ${
            expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-6 pb-6 pt-6 border-t border-iron/20 bg-ground/50">
              <div className="text-muted mb-6">
                <FormattedText text={project.fullDescription ?? ''} />
              </div>
              {hasFiles && (
                <div>
                  <h4 className="font-display font-bold mb-3 flex items-center text-bone">
                    <FileText size={18} className="mr-2" />
                    Project Files
                  </h4>
                  <ul className="space-y-2">
                    {project.files.map((file) => (
                      <li key={file.name}>
                        <a
                          href={file.url}
                          download
                          className="flex items-center p-2 bg-surface hover:bg-surface-2 border border-iron/30 text-muted hover:text-iron transition-colors"
                        >
                          <span className="flex-1">{file.name}</span>
                          <Download size={16} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
