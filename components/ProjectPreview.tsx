// components/ProjectPreview.tsx
import React from 'react';
import Link from 'next/link';

const ProjectPreview: React.FC = () => {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-4">
          <h3 className="text-2xl font-bold mb-2">Project 1</h3>
          <p className="mb-2">Brief description of project 1.</p>
          <Link href="/projects/1" className="text-blue-500">Read more</Link>
        </div>
        <div className="border p-4">
          <h3 className="text-2xl font-bold mb-2">Project 2</h3>
          <p className="mb-2">Brief description of project 2.</p>
          <Link href="/projects/2" className="text-blue-500">Read more</Link>
        </div>
        <div className="border p-4">
          <h3 className="text-2xl font-bold mb-2">Project 3</h3>
          <p className="mb-2">Brief description of project 3.</p>
          <Link href="/projects/3" className="text-blue-500">Read more</Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectPreview;