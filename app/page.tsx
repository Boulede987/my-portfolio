import projects from './data/projects';
import certifications from './data/certifications';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import LegalSection from './components/LegalSection';
import Footer from './components/Footer';

const Portfolio = () => (
  <div className="min-h-screen bg-slate-900 text-white">
    <Nav />
    <HeroSection />
    <ProjectsSection projects={projects} />
    <CertificationsSection certifications={certifications} />
    <ContactSection />
    <LegalSection />
    <Footer />
  </div>
);

export default Portfolio;
