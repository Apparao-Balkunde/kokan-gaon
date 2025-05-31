import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const App = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );

     const renderer = new THREE.WebGLRenderer({ antialias:
    true });
     renderer.setSize(window.innerWidth, window.innerHeight);
    MountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x8b4513 }); // Brown cube
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      MountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}/>
};

export default App;