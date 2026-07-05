import { Github, Linkedin, Mail, Download } from 'lucide-react';

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
      <div className="flex gap-4 mt-8">
        <a href="https://github.com/Boulede987" className="p-2 text-slate-400 hover:text-emerald-400 transition-colors">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/alix-miehe-94239b290/" className="p-2 text-slate-400 hover:text-emerald-400 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="mailto:alixmiehe2004@gmail.com" className="p-2 text-slate-400 hover:text-emerald-400 transition-colors">
          <Mail size={24} />
        </a>
        <a
          href="/files/CV_Alix_Miehe.pdf"
          download
          className="p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors flex items-center"
        >
          <Download size={20} className="mr-2" /> Download CV
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
