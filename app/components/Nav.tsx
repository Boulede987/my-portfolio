const Nav = () => (
  <nav className="fixed top-0 w-full bg-ground/80 backdrop-blur-sm border-b border-iron/20 z-50">
    <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
      <span className="font-display font-bold text-bone tracking-wide">MIEHE Alix</span>
      <div className="flex gap-6 font-mono text-xs uppercase tracking-wider">
        <a href="#about" className="text-muted hover:text-iron transition-colors">About</a>
        <a href="#projects" className="text-muted hover:text-iron transition-colors">Projects</a>
        <a href="#certifications" className="text-muted hover:text-iron transition-colors">Certifications</a>
        <a href="#contact" className="text-muted hover:text-iron transition-colors">Contact</a>
      </div>
    </div>
  </nav>
);

export default Nav;
