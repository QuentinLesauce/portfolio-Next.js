import React from 'react';
import Image from 'next/image';

const Profile: React.FC = () => {
  return (
    <section className="p-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/3 w-full flex justify-center mb-6 md:mb-0">
            <Image
              src="/assets/profile_picture.png"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full shadow-lg dark:shadow-customShadowDark"
            />
          </div>
          <div className="md:w-2/3 w-full md:pl-10">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-4">
              Hello! I'm Quentin Le Sauce, a passionate and dedicated fullstack web developer with a knack for building dynamic and responsive web applications. With a background in both frontend and backend development, I strive to create seamless user experiences and robust, efficient systems.
            </p>
            <p className="text-lg mb-4">
              Over the years, I've honed my skills in various technologies, including React, Node.js, and TypeScript. I enjoy staying up-to-date with the latest trends in web development and continuously seek opportunities to learn and grow.
            </p>
            <p className="text-lg mb-4">
              In addition to coding, I have a keen interest in UI/UX design, ensuring that the applications I develop are not only functional but also visually appealing and easy to use.
            </p>
            <p className="text-lg mb-4">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying the great outdoors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
