import { Github, Gitlab, Linkedin, Mail, Download } from 'lucide-react';

interface CvLink {
  label: string;
  file: string;
}

const CV_LINKS: CvLink[] = [
  { label: 'EN Modern',    file: 'cv_modern_en.pdf'   },
  { label: 'EN Classic',   file: 'cv_classic_en.pdf'  },
  { label: 'FR Moderne',   file: 'cv_modern_fr.pdf'   },
  { label: 'FR Classique', file: 'cv_classic_fr.pdf'  },
];

const HeroSection = () => (
  <section id="about" className="pt-32 pb-16 px-4 relative">
    <div className="absolute -top-8 -left-8 w-64 h-64 bg-ember/10 blur-3xl" />
    <div className="max-w-5xl mx-auto relative">
      <span className="block font-mono text-xs uppercase tracking-wider text-iron mb-4">
        Engineering student, CNAM · Software developer
      </span>
      <h1 className="font-display font-bold text-4xl md:text-5xl mb-6 text-bone">
        Welcome. I am <span className="text-ember-bright">Alix MIEHE</span>.
      </h1>
      <p className="text-xl text-muted max-w-2xl">
        I aim to write quality code and sound architecture, so systems stay easy to maintain and extend — from Unity games and web applications to long-lived COBOL systems.
      </p>
      <div className="flex flex-wrap gap-4 mt-8 items-center">
        <a href="https://github.com/Boulede987" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 text-muted hover:text-iron press-feedback">
          <Github size={24} />
        </a>
        <a href="https://gitlab.com/Boulede987" target="_blank" rel="noopener noreferrer" aria-label="GitLab" className="p-2 text-muted hover:text-iron press-feedback">
          <Gitlab size={24} />
        </a>
        <a href="https://www.linkedin.com/in/alix-miehe-94239b290/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-muted hover:text-iron press-feedback">
          <Linkedin size={24} />
        </a>
        <a href="mailto:alixmiehe2004@gmail.com" aria-label="Email" className="p-2 text-muted hover:text-iron press-feedback">
          <Mail size={24} />
        </a>
        <div className="flex flex-wrap gap-2">
          {CV_LINKS.map(({ label, file }) => (
            <a
              key={file}
              href={`/files/${file}`}
              download
              className="flex items-center gap-2 px-3 py-2 border border-iron/40 text-bone hover:border-ember-bright hover:text-ember-bright press-feedback text-sm font-mono"
            >
              <Download size={16} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
