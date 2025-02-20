'use client'

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Github, Mail, Linkedin, Download, ChevronDown, ChevronUp, FileText, Calendar, Lock, ArrowRight, Image as ImageIcon } from 'lucide-react';

// Interface remains the same
interface Project {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  period: string;
  expanded: boolean;
  imageUrl?: string;
  files: {
    name: string;
    url: string;
  }[];
}

const Portfolio: React.FC = () => {
  const router = useRouter();
  
  // Projects state remains the same
  const [projects, setProjects] = useState<Project[]>([
    // Your existing projects data remains unchanged
    {
      id: 1,
      name: "Athena",
      shortDescription: "I developped additionnal features for the Athena Open Source sofware during an internship.",
      fullDescription: "A local school needed a way to produce physical cards for its students, as a wayto identify them. It regularly accepts interns to develop the project. It is a C# application with a SQLite backend. It was fairly developped when I arrived, and my work consisted in adding the features as the schoolasked for them as well as correcting bugs. <a href=https://github.com/College-Caroline-Aigle/Athena>Link.<\a>",
      technologies: ["C#", "SQLite", "GitHub"],
      period: "23/02/24 - 15/03/24",
      expanded: false,
      imageUrl: "/images/Athena.png", // Add image URL
      files: [
        //
      ]
    },
    {
      id: 2,
      name: "Crédit Célèste",
      shortDescription: "A project for the managment credits loaned by the (virtual) Crédit Célèste. Includes credit monthly cost calculation, and calculation the distribution of the payment between the Crédit Célèste and the salesman.",
      fullDescription: "With a C# front end and a windows server backend, this application lets the user register clients, vehicles and loans. It can afterwards calculate how much money the salesman that made the credit sales has made, as well as how much the Crédit Célèste hase made monthly.",
      technologies: ["PHP", "MySQL", "HTML", "GitHub"],
      period: "23/02/24 - 15/03/24",
      expanded: false,
      imageUrl: "/images/MCD_CreditCeleste.png", // Add image URL
      files: [
        { name: "Contexte.rar", url: "/files/Contexte.rar" }
      ]
    },
    {
      id: 3,
      name: "Ionic Angular Corss-plateform Mobile App",
      shortDescription: "Includes research into different mobile cross-plateform developpement frameworks. A simple app featuring distant database connection via tokens.",
      fullDescription: "During an internship, I was tasked with researching and finding the best cross-platform developpement framework for the needs of an application. After that initial research, I spent the remaining time developping the application in question.",
      technologies: ["Ionic", "Capacitor", "Angular", "Typescript", "HTML"],
      period: "23/02/24 - 15/03/24",
      expanded: false,
      imageUrl: "/images/storigmarik.png", // Add image URL
      files: [
        { name: "photo-gallery.rar", url: "/files/photo-gallery.rar" }
      ]
    },
    {
      id: 4,
      name: "Projet JPO",
      shortDescription: "Development of a presentation system for Open House Day with real-time analytics.",
      fullDescription: "My first PHP developpement project. A system for Open House Day visitors to fill in their informations, wich would be inscribed in a database. Includes a MySQL database backend for data analysis puproses.",
      technologies: ["PHP", "MySQL", "HTML"],
      period: "23/02/24 - 15/03/24",
      expanded: false,
      imageUrl: "/images/projetJPO.png", // Add image URL
      files: [
        { name: "finaleJPO.rar", url: "/files/finaleJPO.rar" }
      ]
    },
    {
      id: 5,
      name: "Projet Fournil",
      shortDescription: "A PHP website made for a local bakery with account creation and an order placement system.",
      fullDescription: "A website made in accordance to a (virtual) client's demands. Includes MySQL users, a sign up and a login system, as well as an order placement system all linking back to the mySQL database.",
      technologies: ["PHP", "MySQL"],
      period: "12/04/24 - 30/04/24",
      expanded: false,
      imageUrl: "/images/fournil.png", // Add image URL
      files: [
        { name: "projet V1.5.rar", url: "/files/projet V1.5.rar" }
      ]
    },
    {
      id: 6,
      name: "Criées de la Cornouaille",
      shortDescription: "A Symfony PHP website for participating in an auction, paired with a mobile app made with IONIC/CAPACITOR/Angular.",
      fullDescription: "A Symfony PHP website for participating in an auction, paired with a mobile app made with IONIC/CAPACITOR/Angular.",
      technologies: ["Symfony", "Doctrine", "MySQL", "Ionic", "Capacitor", "Angular"],
      period: "12/04/24 - 30/04/24",
      expanded: false,
      imageUrl: "/images/CrieeCornouialle.png", // Add image URL
      files: [
        { name: "MCD.rar", url: "/files/MCD.rar" }
      ]
    },
  ]);

  const toggleProject = (id: number) => {
    setProjects(projects.map(project => 
      project.id === id ? {...project, expanded: !project.expanded} : project
    ));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm border-b border-emerald-800/20 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-medium text-emerald-400">MIEHE Alix</span>
          <div className="flex gap-6">
            <a href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors">About</a>
            <a href="#projects" className="text-slate-400 hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-16 px-4 relative">
        <div className="absolute -top-8 -left-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-5xl mx-auto relative">
          <h1 className="text-4xl font-bold mb-6">
            Hello, I'm <span className="text-emerald-400">Alix</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            I'm a developer specializing in software and application development, with a strong foundation in networking and a keen interest in emerging technologies like AI development.
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
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-slate-800/50 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white">Selected Projects</h2>
          <div className="flex flex-col gap-6">
            {projects.map(project => (
              <div key={project.id} className="bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:ring-1 hover:ring-emerald-500/50 transition-all">
                <div className="flex flex-col md:flex-row">
                  {/* Project Image */}
                  {project.imageUrl && (
                    <div className="w-full md:w-1/3 relative min-h-[200px]">
                      <Image 
                        src={project.imageUrl} 
                        alt={`${project.name} preview`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  {/* Project Content */}
                  <div className={`w-full ${project.imageUrl ? 'md:w-2/3' : 'w-full'}`}>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                          <div className="flex items-center mt-1 text-sm text-slate-400">
                            <Calendar size={14} className="mr-1"/>
                            <span>{project.period}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className="px-3 py-1 bg-slate-700 text-emerald-400 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Description */}
                      {project.files.length > 0 && (
                        <p className="text-slate-400 mb-4">{project.shortDescription}</p>
                      )}
                      {project.files.length === 0 && (
                        <div 
                          className="text-slate-400 mb-4"
                          dangerouslySetInnerHTML={{ __html: project.fullDescription }}
                        />
                      )}
                      
                      {/* Expand/Collapse Button */}
                      {project.files.length > 0 && (
                        <button 
                          onClick={() => toggleProject(project.id)}
                          className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          {project.expanded ? 'Show less' : 'Show more'}
                          {project.expanded ? <ChevronUp size={16} className="ml-1"/> : <ChevronDown size={16} className="ml-1"/>}
                        </button>
                      )}
                    </div>
                    
                    {/* Expanded Content */}
                    {project.expanded && project.files.length > 0 && (
                      <div className="px-6 pb-6 pt-2 border-t border-slate-700 bg-slate-900/50">
                        <h4 className="font-medium mb-3 text-white">Project Details</h4>
                        <div 
                          className="text-slate-400 mb-6"
                          dangerouslySetInnerHTML={{ __html: project.fullDescription }}
                        />
                        
                        {/* Files Section */}
                        <div>
                          <h4 className="font-medium mb-3 flex items-center text-white">
                            <FileText size={18} className="mr-2" />
                            Project Files
                          </h4>
                          <ul className="space-y-2">
                            {project.files.map((file, index) => (
                              <li key={index}>
                                <a 
                                  href={file.url}
                                  download
                                  className="flex items-center p-2 bg-slate-800 hover:bg-slate-700 rounded border border-slate-600 text-slate-400 hover:text-emerald-400 transition-colors"
                                >
                                  <span className="flex-1">{file.name}</span>
                                  <Download size={16} />
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
          <p className="text-slate-400 mb-8">
            I'm always open to new opportunities and interesting projects.
          </p>
          <a 
            href="mailto:alixmiehe2004@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;