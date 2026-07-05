const Nav = () => (
  <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm border-b border-emerald-800/20 z-50">
    <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
      <span className="font-medium text-emerald-400">MIEHE Alix</span>
      <div className="flex gap-6">
        <a href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors">About</a>
        <a href="#projects" className="text-slate-400 hover:text-emerald-400 transition-colors">Projects</a>
        <a href="#certifications" className="text-slate-400 hover:text-emerald-400 transition-colors">Certifications</a>
        <a href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors">Contact</a>
        <a href="#legal" className="text-slate-400 hover:text-emerald-400 transition-colors">Legal Notice</a>
      </div>
    </div>
  </nav>
);

export default Nav;
