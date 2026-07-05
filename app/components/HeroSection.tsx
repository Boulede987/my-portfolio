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
    <div className="absolute -top-8 -left-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
    <div className="max-w-5xl mx-auto relative">
      <h1 className="text-4xl font-bold mb-6">
        Hello, I&apos;m <span className="text-emerald-400">Alix</span>
      </h1>
      <p className="text-xl text-slate-400 max-w-2xl">
        I&apos;m a developer specializing in software and application development, with a strong foundation
        in networking and a keen interest in emerging technologies like AI development.
      </p>
      <div className="flex flex-wrap gap-4 mt-8 items-center">
        <a href="https://github.com/Boulede987" className="p-2 text-slate-400 hover:text-emerald-400 transition-colors">
          <Github size={24} />
        </a>
        <a href="https://gitlab.com/Boulede987" className="p-2 text-slate-400 hover:text-emerald-400 transition-colors">
          <Gitlab size={24} />
        </a>
        <a href="https://www.linkedin.com/in/alix-miehe-94239b290/" className="p-2 text-slate-400 hover:text-emerald-400 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="mailto:alixmiehe2004@gmail.com" className="p-2 text-slate-400 hover:text-emerald-400 transition-colors">
          <Mail size={24} />
        </a>
        <div className="flex flex-wrap gap-2">
          {CV_LINKS.map(({ label, file }) => (
            <a
              key={file}
              href={`/files/${file}`}
              download
              className="flex items-center gap-2 px-3 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-sm"
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
