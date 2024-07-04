'use client'

import React from 'react';
import ProjectPreview from './ProjectPreview';

const projects = [
  {
    id: 'project1',
    title: 'Project One',
    image1: '/assets/images/projects/screenshot_1.png',
    image2: '/assets/images/projects/screenshot_2.png',
    link: '/projects/project1',
  },
  {
    id: 'project2',
    title: 'Project Two',
    image1: '/assets/images/projects/screenshot_1.png',
    image2: '/assets/images/projects/screenshot_2.png',
    link: '/projects/project2',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-8/12 pt-10 mb-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="flex flex-col items-center gap-12">
        {projects.map((project) => (
          <ProjectPreview key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
