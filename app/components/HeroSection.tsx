import { Github, Gitlab, Linkedin, Mail, Download } from 'lucide-react';

interface CvLink {
  label: string;
  file: string;
}

const CV_LINKS: CvLink[] = [
  { label: 'EN Classic',   file: 'cv_classic_en.pdf'  },
  { label: 'EN Stylized',  file: 'cv_stylized_en.pdf' },
  { label: 'FR Classique', file: 'cv_classic_fr.pdf'  },
  { label: 'FR Stylisé',   file: 'cv_stylized_fr.pdf' },
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
        I want to work on making long-lived maintainable systems to ease expantion and the realisation of new ideas.
      </p>
      <div className="flex flex-wrap gap-4 mt-8 items-center">
        <a href="https://github.com/Boulede987" className="p-2 text-muted hover:text-iron transition-colors">
          <Github size={24} />
        </a>
        <a href="https://gitlab.com/Boulede987" className="p-2 text-muted hover:text-iron transition-colors">
          <Gitlab size={24} />
        </a>
        <a href="https://www.linkedin.com/in/alix-miehe-94239b290/" className="p-2 text-muted hover:text-iron transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="mailto:alixmiehe2004@gmail.com" className="p-2 text-muted hover:text-iron transition-colors">
          <Mail size={24} />
        </a>
        <div className="flex flex-wrap gap-2">
          {CV_LINKS.map(({ label, file }) => (
            <a
              key={file}
              href={`/files/${file}`}
              download
              className="flex items-center gap-2 px-3 py-2 border border-iron/40 text-bone hover:border-ember-bright hover:text-ember-bright transition-colors text-sm font-mono"
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
