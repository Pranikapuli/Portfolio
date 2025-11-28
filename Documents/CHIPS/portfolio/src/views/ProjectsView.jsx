import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/cards/ProjectCard';

const ProjectsView = ({ data, onProjectClick, title, subtitle }) => (
    <div className="max-w-6xl mx-auto pt-8">
        <SectionTitle
            title={title || "The Workshop"}
            subtitle={subtitle || "Where I prove the concepts before asking engineers to build them."}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.projects.map((p, i) => (
                <ProjectCard
                    key={i}
                    {...p}
                    onClick={() => onProjectClick(p)}
                />
            ))}
        </div>
    </div>
);

export default ProjectsView;
