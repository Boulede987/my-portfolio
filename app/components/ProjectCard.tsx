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

  return (
    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:ring-1 hover:ring-emerald-500/50 transition-all">
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
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                <div className="flex items-center mt-1 text-sm text-slate-400">
                  <Calendar size={14} className="mr-1" />
                  <span>{project.period}</span>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap justify-end">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-700 text-emerald-400 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-slate-400 mb-4">{hasFiles ? project.shortDescription : project.fullDescription}</p>

            {project.repositoryUrl && (
              <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline text-sm">
                View repository →
              </a>
            )}

            {hasFiles && (
              <button
                onClick={() => onToggle(project.id)}
                className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mt-2"
              >
                {expanded ? 'Show less' : 'Show more'}
                {expanded ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
              </button>
            )}
          </div>

          {expanded && hasFiles && (
            <div className="px-6 pb-6 pt-2 border-t border-slate-700 bg-slate-900/50">
              <h4 className="font-medium mb-3 text-white">Project Details</h4>
              <p className="text-slate-400 mb-6">{project.fullDescription}</p>
              <div>
                <h4 className="font-medium mb-3 flex items-center text-white">
                  <FileText size={18} className="mr-2" />
                  Project Files
                </h4>
                <ul className="space-y-2">
                  {project.files.map((file) => (
                    <li key={file.name}>
                      <a
                        href={file.url}
                        download
                        className="flex items-center p-2 bg-slate-800 hover:bg-slate-700 rounded border border-slate-600 text-slate-400 hover:text-emerald-400 transition-colors"
                      >
                        <span className="flex-1">{file.name}</span>
                        <Download size={16} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
