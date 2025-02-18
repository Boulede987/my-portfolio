'use client'

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { Github, Mail, Linkedin, Download, ChevronDown, ChevronUp, FileText, Calendar, Lock, ArrowRight } from 'lucide-react';




// Interface for project type
interface Project {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  period: string;
  expanded: boolean;
  files: {
    name: string;
    url: string;
  }[];
}

const Portfolio: React.FC = () => {

  const router = useRouter();

  // Project state
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      name: "Projet JPO",
      shortDescription: "Development of a presentation system for Open House Day with real-time analytics",
      fullDescription: "I led the development of an interactive presentation system for the institution's Open House Day. The system included real-time visitor tracking, automated registration, and feedback collection. I was responsible for both frontend and backend development, ensuring a seamless user experience.",
      technologies: ["React", "Node.js", "Socket.io"],
      period: "23/02/24 - 15/03/24",
      expanded: false,
      files: [
        { name: "Cahier des charges.pdf", url: "/files/cahier-des-charges.pdf" },
        { name: "Documentation technique.docx", url: "/files/documentation-technique.docx" },
        { name: "Présentation.pptx", url: "/files/presentation.pptx" }
      ]
    },
    {
      id: 2,
      name: "B3 Crédit Céleste",
      shortDescription: "Implementation of secure Cisco networking solutions for a financial institution",
      fullDescription: "Designed and implemented a complete networking solution for Crédit Céleste using Cisco technologies. The project involved setting up secure VLANs, implementing firewall rules, configuring routers, and ensuring PCI DSS compliance for financial data security.",
      technologies: ["Cisco", "Networking", "Security"],
      period: "01/02/24 - 03/03/24",
      expanded: false,
      files: [
        { name: "Schéma réseau.pdf", url: "/files/schema-reseau.pdf" },
        { name: "Configuration des équipements.xlsx", url: "/files/configuration.xlsx" }
      ]
    },
    {
      id: 3,
      name: "Projet Fournil",
      shortDescription: "Full-stack management system for a regional bakery chain with inventory and POS features",
      fullDescription: "Developed a comprehensive management system for a chain of bakeries. The system integrates inventory management, point-of-sale functionality, employee scheduling, and financial reporting. Used PHP for backend, MySQL for database, and JavaScript/jQuery for frontend interactivity.",
      technologies: ["PHP", "MySQL", "JavaScript"],
      period: "12/04/24 - 30/04/24",
      expanded: false,
      files: [
        { name: "Documentation utilisateur.pdf", url: "/files/documentation-utilisateur.pdf" },
        { name: "Code source.zip", url: "/files/code-source.zip" }
      ]
    }
  ]);

  // Password modal state
  const [showPasswordModal, setShowPasswordModal] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  
  // The correct password - in production, you would check this against a secure backend
  const correctPassword = 'portfolio2025';  // Congratulations! You found the password!
                                            // Not much to see with it unfortunately :(

  const toggleProject = (id: number) => {
    setProjects(projects.map(project => 
      project.id === id ? {...project, expanded: !project.expanded} : project
    ));
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      // Redirect to the grid page
      router.push("/pageGrid");
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-medium">Your Name</span>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-600 hover:text-black">About</a>
            <a href="#projects" className="text-gray-600 hover:text-black">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-black">Contact</a>
            
            {/* Discrete Admin Link */}
            <button 
              onClick={() => setShowPasswordModal(true)}
              className="text-gray-400 hover:text-gray-600 flex items-center"
              aria-label="Admin Access"
            >
              <Lock size={16} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            Hello, I'm <span className="text-blue-600">Alix</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            A brief professional description about yourself and what you do. 
            Highlight your key skills and what makes you unique.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="https://github.com/Boulede987" className="p-2 text-gray-600 hover:text-black">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/alix-miehe-94239b290/" className="p-2 text-gray-600 hover:text-black">
              <Linkedin size={24} />
            </a>
            <a href="mailto:alixmiehe2004@gmail.com" className="p-2 text-gray-600 hover:text-black">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section with Previews and Downloads */}
      <section id="projects" className="py-16 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Selected Projects</h2>
          <div className="flex flex-col gap-6">
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Project Header - always visible */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <Calendar size={14} className="mr-1"/>
                        <span>{project.period}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Short Description - always visible */}
                  <p className="text-gray-600 mb-4">{project.shortDescription}</p>
                  
                  {/* Expand/Collapse Button */}
                  <button 
                    onClick={() => toggleProject(project.id)}
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    {project.expanded ? 'Show less' : 'Show more'}
                    {project.expanded ? <ChevronUp size={16} className="ml-1"/> : <ChevronDown size={16} className="ml-1"/>}
                  </button>
                </div>
                
                {/* Expanded Content - visible when expanded */}
                {project.expanded && (
                  <div className="px-6 pb-6 pt-2 border-t bg-gray-50">
                    <h4 className="font-medium mb-3">Project Details</h4>
                    <p className="text-gray-600 mb-6">{project.fullDescription}</p>
                    
                    {/* Files Section */}
                    <div>
                      <h4 className="font-medium mb-3 flex items-center">
                        <FileText size={18} className="mr-2" />
                        Project Files
                      </h4>
                      <ul className="space-y-2">
                        {project.files.map((file, index) => (
                          <li key={index}>
                            <a 
                              href={file.url}
                              download
                              className="flex items-center p-2 bg-white hover:bg-gray-100 rounded border"
                            >
                              <span className="flex-1">{file.name}</span>
                              <Download size={16} className="text-gray-600" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            I'm always open to new opportunities and interesting projects.
          </p>
          <a 
            href="mailto:your@email.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Contact Me
          </a>
        </div>
      </section>
      
      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold mb-4">Admin Access</h3>
            <form onSubmit={handlePasswordSubmit}>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter password"
                />
                {passwordError && (
                  <p className="mt-2 text-sm text-red-600">{passwordError}</p>
                )}
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordModal(false);
                    setPassword('');
                    setPasswordError('');
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
                >
                  Access <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;