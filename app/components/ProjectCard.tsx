import Image from 'next/image';
import { Calendar, ChevronDown, ChevronUp, Download, FileText } from 'lucide-react';
import { Project } from '../types';

interface Props {
  project: Project;
  expanded: boolean;
  onToggle: (id: number) => void;
}

const ProjectCard = ({ project, expanded, onToggle }: Props) => {
  const hasFiles = project.files.length > 0;
  const hasMore = !!project.fullDescription;

  return (
    <div className="corner-frame bg-surface overflow-hidden hover:ring-1 hover:ring-ember-bright/40 transition-all">
      <div className="flex flex-col md:flex-row">
        {project.imageUrl && (
          <div className="w-full md:w-1/3 relative min-h-[200px]">
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

            <p className="text-muted mb-4">{project.shortDescription}</p>

            <div className="flex flex-wrap items-center gap-4">
              {project.repositoryUrl && (
                <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="text-iron hover:text-bone hover:underline text-sm transition-colors">
                  View repository →
                </a>
              )}
              {hasMore && (
                <button
                  onClick={() => onToggle(project.id)}
                  className="flex items-center gap-1 px-3 py-1.5 border border-iron/40 text-bone hover:border-ember-bright hover:text-ember-bright transition-colors text-sm font-mono uppercase tracking-wider"
                >
                  {expanded ? 'Show less' : 'Show more'}
                  {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              )}
            </div>
          </div>

          {expanded && hasMore && (
            <div className="px-6 pb-6 pt-2 border-t border-iron/20 bg-ground/50">
              <p className="text-muted mb-6">{project.fullDescription ?? ''}</p>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
