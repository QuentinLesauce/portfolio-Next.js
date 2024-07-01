// src/components/ModelViewer.tsx
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import dynamic from 'next/dynamic';

// Dynamically import without SSR
const NoSSRCanvas = dynamic(() => import('@react-three/fiber').then(mod => mod.Canvas), {
  ssr: false,
});

const Model: React.FC<{ modelPath: string }> = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} rotation={[0, Math.PI / 2, 0]} />;
  // Adjust the rotation array to rotate horizontally by 90 degrees around the y-axis
};

const ModelViewer: React.FC<{ modelPath: string }> = ({ modelPath }) => {
  useEffect(() => {
    console.log(`Loading model from path: ${modelPath}`);
  }, [modelPath]);

  return (
    <NoSSRCanvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <Model modelPath={modelPath} />
      <OrbitControls />
    </NoSSRCanvas>
  );
};

export default ModelViewer;
