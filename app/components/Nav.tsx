'use client';

import { useEffect, useState } from 'react';

interface NavLink {
  id: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

// A section counts as current once it crosses this band near the top of the viewport.
const ACTIVE_BAND_MARGIN = '-30% 0px -60% 0px';

const useActiveSection = (ids: string[]) => {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: ACTIVE_BAND_MARGIN },
    );
    ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
};

const Nav = () => {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <nav className="fixed top-0 w-full bg-ground/80 backdrop-blur-sm border-b border-iron/20 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#about" className="hidden sm:inline font-display font-bold text-bone tracking-wide">
          MIEHE Alix
        </a>
        <div className="flex gap-4 sm:gap-6 font-mono text-xs uppercase tracking-wider">
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeId === id ? 'location' : undefined}
              className={`transition-colors hover:text-iron ${activeId === id ? 'text-ember-bright' : 'text-muted'}`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
