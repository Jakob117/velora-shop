'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Product3DProps {
  productName: string;
  productLine: 'essential' | 'classic' | 'atelier';
}

const COLORS = {
  essential: 0xcccccc,
  classic: 0xd4a574,
  atelier: 0x8b7355,
};

export default function Product3D({ productName, productLine }: Product3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.Camera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const boxRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a1a);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create Product Box
    const geometry = new THREE.BoxGeometry(2, 1.5, 1.2);
    const material = new THREE.MeshPhongMaterial({
      color: COLORS[productLine],
      shininess: 100,
    });
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);
    boxRef.current = box;

    // Create Lid
    const lidGeometry = new THREE.BoxGeometry(2.05, 0.1, 1.25);
    const lidMaterial = new THREE.MeshPhongMaterial({ color: 0x5c4033 });
    const lid = new THREE.Mesh(lidGeometry, lidMaterial);
    lid.position.y = 0.85;
    scene.add(lid);

    // Animation Loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      box.rotation.x += 0.002;
      box.rotation.y += 0.003;
      lid.rotation.x += 0.002;
      lid.rotation.y += 0.003;
      renderer.render(scene, camera);
    };
    animate();

    // Handle Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      containerRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      lidGeometry.dispose();
      lidMaterial.dispose();
      renderer.dispose();
    };
  }, [productLine]);

  return <div ref={containerRef} className="w-full h-full" />;
}
