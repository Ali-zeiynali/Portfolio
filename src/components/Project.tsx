import React, { useMemo, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import type { Language } from '../content/translations';
import { localizedProjects } from '../content/projects';
import '../assets/styles/Project.scss';

type ProjectProps = {
    title: string;
    language: Language;
};

function Project({ title, language }: ProjectProps) {
    const projects = localizedProjects[language];
    const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
    const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

    const activeProject = useMemo(() => {
        if (activeProjectIndex === null) {
            return null;
        }

        return projects[activeProjectIndex];
    }, [activeProjectIndex, projects]);

    const openProject = (projectIndex: number) => {
        setActiveProjectIndex(projectIndex);
        setActiveImageIndex(0);
    };

    const closeProjectModal = () => {
        setActiveProjectIndex(null);
        setActiveImageIndex(0);
    };

    const showPreviousImage = () => {
        if (!activeProject) {
            return;
        }

        setActiveImageIndex((prevImageIndex) => {
            if (prevImageIndex === 0) {
                return activeProject.images.length - 1;
            }

            return prevImageIndex - 1;
        });
    };

    const showNextImage = () => {
        if (!activeProject) {
            return;
        }

        setActiveImageIndex((prevImageIndex) => (prevImageIndex + 1) % activeProject.images.length);
    };

    return (
        <div className="projects-container" id="projects">
            <h1>{title}</h1>
            <div className="projects-grid">
                {projects.map((project, projectIndex) => (
                    <button
                        key={`${language}-${project.title}`}
                        className="project glass-card"
                        onClick={() => openProject(projectIndex)}
                        type="button"
                    >
                        <img src={project.images[0]} className="zoom" alt={project.title} width="100%" />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </button>
                ))}
            </div>

            {activeProject && (
                <div className="project-modal-overlay" onClick={closeProjectModal} role="presentation">
                    <div className="project-modal" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label={activeProject.title}>
                        <button type="button" className="modal-close-btn" onClick={closeProjectModal} aria-label="Close">
                            <CloseIcon />
                        </button>

                        <h2>{activeProject.title}</h2>
                        <p>{activeProject.description}</p>

                        <div className="modal-image-wrapper">
                            <button type="button" className="slider-control prev" onClick={showPreviousImage} aria-label="Previous image">
                                <NavigateBeforeIcon />
                            </button>
                            <img src={activeProject.images[activeImageIndex]} alt={`${activeProject.title} preview ${activeImageIndex + 1}`} className="modal-main-image" />
                            <button type="button" className="slider-control next" onClick={showNextImage} aria-label="Next image">
                                <NavigateNextIcon />
                            </button>
                        </div>

                        <div className="modal-thumbnails">
                            {activeProject.images.map((image, imageIndex) => (
                                <button
                                    key={`${activeProject.title}-${imageIndex}`}
                                    type="button"
                                    onClick={() => setActiveImageIndex(imageIndex)}
                                    className={`thumbnail-btn ${activeImageIndex === imageIndex ? 'active' : ''}`}
                                    aria-label={`Show image ${imageIndex + 1}`}
                                >
                                    <img src={image} alt={`${activeProject.title} thumbnail ${imageIndex + 1}`} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;
