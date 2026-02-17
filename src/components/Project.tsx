import React from "react";
import type { Language } from '../content/translations';
import { localizedProjects } from '../content/projects';
import '../assets/styles/Project.scss';

type ProjectProps = {
    title: string;
    language: Language;
};

function Project({ title, language }: ProjectProps) {
    const projects = localizedProjects[language];

    return (
        <div className="projects-container" id="projects">
            <h1>{title}</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={`${language}-${project.title}`} className="project glass-card">
                        <a href={project.link} target="_blank" rel="noreferrer"><img src={project.image} className="zoom" alt={project.title} width="100%" /></a>
                        <a href={project.link} target="_blank" rel="noreferrer"><h2>{project.title}</h2></a>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
