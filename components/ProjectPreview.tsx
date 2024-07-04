'use client'

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

type ProjectPreviewProps = {
  project: {
    id: string;
    title: string;
    image1: string;
    image2: string;
    link: string;
  };
};

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ project }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="w-full mb-8"
      initial={{ opacity: 0, translateY: 50 }}
      animate={isInView ? { opacity: 1, translateY: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Link href={project.link}>
        <div className="relative group">
          <div className="relative w-full h-[33vh]">
            <Image
              src={project.image1}
              alt={`${project.title} Image 1`}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 ease-in-out transform group-hover:scale-105 rounded-lg shadow-lg z-10"
            />
          </div>
          <div className="absolute top-2 left-2 w-[30vh] h-[30vh]">
            <Image
              src={project.image2}
              alt={`${project.title} Image 2`}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 ease-in-out transform group-hover:scale-105 rounded-lg shadow-lg"
            />
          </div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out z-20"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-30">
            <h3 className="text-white text-3xl font-bold">{project.title}</h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectPreview;
