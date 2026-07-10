const Footer = () => (
  <footer className="py-8 bg-ground border-t border-iron/20">
    <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-2 text-center text-muted font-mono text-sm">
      <p>&copy; {new Date().getFullYear()} Alix MIEHE. All rights reserved.</p>
      <a href="#legal" className="hover:text-iron transition-colors">Legal Notice</a>
    </div>
  </footer>
);

export default Footer;
