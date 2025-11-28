import React, { useState, useEffect } from 'react';
import { INITIAL_DATA } from './data/initialData';
import Navbar from './components/ui/Navbar';
import HomeView from './views/HomeView';
import ProjectsView from './views/ProjectsView';
import ExperienceView from './views/ExperienceView';
import AboutView from './views/AboutView';
import CredentialsView from './views/CredentialsView';
import ContactView from './views/ContactView';
import CaseStudyModal from './components/features/CaseStudyModal';
import { Sun, Moon } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // --- SCROLL TO TOP ON TAB CHANGE ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  // --- RENDER CONTENT BASED ON TAB ---
  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeView data={INITIAL_DATA} setActiveTab={setActiveTab} />;
      case 'experience': return <ExperienceView data={INITIAL_DATA} />;
      case 'case-studies':
        return (
          <ProjectsView
            data={{ ...INITIAL_DATA, projects: INITIAL_DATA.projects.filter(p => p.category === 'case-study') }}
            onProjectClick={setSelectedProject}
            title="Case Studies"
            subtitle="Strategic Initiatives & Product Management"
          />
        );
      case 'projects':
        return (
          <ProjectsView
            data={{ ...INITIAL_DATA, projects: INITIAL_DATA.projects.filter(p => p.category === 'technical') }}
            onProjectClick={setSelectedProject}
            title="Technical Projects"
            subtitle="Development, Architecture & Engineering"
          />
        );
      case 'about':
        return (
          <AboutView
            data={INITIAL_DATA}
            onSkillHover={setHoveredSkill}
            onSkillLeave={() => setHoveredSkill(null)}
          />
        );
      case 'credentials': return <CredentialsView data={INITIAL_DATA} />;
      case 'contact': return <ContactView data={INITIAL_DATA} />;
      default: return <HomeView data={INITIAL_DATA} setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-violet-500/30">

      {/* HUD NAVBAR */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* MAIN CONTENT AREA */}
      <main className="min-h-screen relative pt-20 pb-12">
        <div className="p-4 md:p-12 max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>

      {/* GLOBAL MODAL */}
      <CaseStudyModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />

    </div>
  );
};

export default App;