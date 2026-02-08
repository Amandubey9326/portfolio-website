/**
 * 3D Animated Background Component
 * Uses React Three Fiber for a subtle, professional 3D scene
 * Features: floating geometric shapes, parallax mouse tracking, soft lighting
 */
import { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  background: radial-gradient(ellipse at 30% 20%, rgba(46, 229, 157, 0.06) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 80%, rgba(46, 229, 157, 0.04) 0%, transparent 50%),
              linear-gradient(180deg, #0a0a0f 0%, #0d0d16 50%, #0a0a0f 100%);
`;

const ACCENT = new THREE.Color('#2EE59D');
const ACCENT_DIM = new THREE.Color('#1abc9c');

/* ── Mouse Parallax ─────────────────────────────────────────────── */
function useMouseParallax() {
  const mouse = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return { mouse, smooth };
}

/* ── Wireframe Octahedron ───────────────────────────────────────── */
function WireOctahedron({ position, scale = 1, speed = 1 }) {
  const ref = useRef();
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.x += dt * 0.2 * speed;
    ref.current.rotation.y += dt * 0.25 * speed;
  });

  return (
    <Float speed={1.5 * speed} rotationIntensity={0.4} floatIntensity={1}>
      <mesh ref={ref} position={position}>
        <octahedronGeometry args={[scale, 0]} />
        <meshStandardMaterial color={ACCENT} transparent opacity={0.15} wireframe />
      </mesh>
    </Float>
  );
}

/* ── Wireframe Torus ────────────────────────────────────────────── */
function WireTorus({ position, scale = 1, speed = 1 }) {
  const ref = useRef();
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.x += dt * 0.12 * speed;
    ref.current.rotation.z += dt * 0.18 * speed;
  });

  return (
    <Float speed={1.2 * speed} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={ref} position={position}>
        <torusGeometry args={[scale, scale * 0.3, 8, 20]} />
        <meshStandardMaterial color={ACCENT_DIM} transparent opacity={0.12} wireframe />
      </mesh>
    </Float>
  );
}

/* ── Wireframe Icosahedron ──────────────────────────────────────── */
function WireIcosahedron({ position, scale = 1, speed = 1 }) {
  const ref = useRef();
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.15 * speed;
    ref.current.rotation.z += dt * 0.1 * speed;
  });

  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position}>
        <icosahedronGeometry args={[scale, 0]} />
        <meshStandardMaterial color={ACCENT} transparent opacity={0.13} wireframe />
      </mesh>
    </Float>
  );
}

/* ── Glowing Sphere ─────────────────────────────────────────────── */
function GlowSphere({ position, scale = 0.3 }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.material.opacity = 0.15 + Math.sin(t * 1.5) * 0.08;
  });

  return (
    <Float speed={0.8} floatIntensity={1.5}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[scale, 16, 16]} />
        <meshStandardMaterial
          color={ACCENT}
          transparent
          opacity={0.15}
          emissive={ACCENT}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

/* ── Particle Field ─────────────────────────────────────────────── */
function ParticleField({ count = 250 }) {
  const ref = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 35;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 35;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return arr;
  }, [count]);

  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color={ACCENT} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

/* ── Camera Controller (parallax) ───────────────────────────────── */
function CameraRig() {
  const { camera } = useThree();
  const { mouse, smooth } = useMouseParallax();

  useFrame(() => {
    smooth.current.x += (mouse.current.x * 0.6 - smooth.current.x) * 0.025;
    smooth.current.y += (mouse.current.y * 0.4 - smooth.current.y) * 0.025;
    camera.position.x = smooth.current.x;
    camera.position.y = smooth.current.y;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ── Full Scene ─────────────────────────────────────────────────── */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#2EE59D" />
      <pointLight position={[-8, -5, 5]} intensity={0.2} color="#ffffff" />
      <pointLight position={[0, -10, 8]} intensity={0.15} color="#2EE59D" />

      <CameraRig />

      {/* Shapes — spread across the scene */}
      <WireOctahedron position={[-6, 3, -5]} scale={1.8} speed={0.7} />
      <WireOctahedron position={[7, -2, -8]} scale={1.2} speed={1} />
      <WireTorus position={[5, 4, -6]} scale={1.4} speed={0.6} />
      <WireTorus position={[-4, -4, -4]} scale={1} speed={0.9} />
      <WireIcosahedron position={[0, 2, -10]} scale={2.2} speed={0.4} />
      <WireIcosahedron position={[-8, -1, -7]} scale={0.9} speed={0.8} />
      <WireIcosahedron position={[9, 1, -12]} scale={1.5} speed={0.6} />

      {/* Glowing accent spheres */}
      <GlowSphere position={[-3, 5, -6]} scale={0.25} />
      <GlowSphere position={[6, -3, -9]} scale={0.2} />
      <GlowSphere position={[2, -5, -4]} scale={0.15} />
      <GlowSphere position={[-7, 0, -8]} scale={0.3} />

      {/* Particles */}
      <ParticleField count={250} />
    </>
  );
}

/* ── Main Export ─────────────────────────────────────────────────── */
const Background3D = () => {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Disable on low-end devices
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    if (!gl) { setEnabled(false); return; }

    const info = gl.getExtension('WEBGL_debug_renderer_info');
    if (info) {
      const r = gl.getParameter(info.UNMASKED_RENDERER_WEBGL);
      if (r.includes('SwiftShader') || r.includes('Software')) setEnabled(false);
    }
    if (navigator.deviceMemory && navigator.deviceMemory < 4) setEnabled(false);
  }, []);

  if (!enabled) return <BackgroundContainer />;

  return (
    <BackgroundContainer>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </BackgroundContainer>
  );
};

export default Background3D;
