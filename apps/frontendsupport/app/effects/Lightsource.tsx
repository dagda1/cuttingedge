import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { isMobile } from 'react-device-detect';
import type Three from 'three';

type ColorRepresentation = Parameters<typeof easing.dampC>[1];

export function LightSource() {
  const [colors, setColors] = useState([
    'orange',
    'red',
    'red',
    'orange',
    'lightblue',
    'green',
    'blue',
    'blue',
  ] as ColorRepresentation[]);

  const light = useRef<Three.DirectionalLight>(null);
  const light2 = useRef<Three.DirectionalLight>(null);
  const light3 = useRef<Three.DirectionalLight>(null);
  const light4 = useRef<Three.DirectionalLight>(null);
  const light5 = useRef<Three.AmbientLight>(null);

  useEffect(() => {
    function handleClick() {
      const newColors = colors.sort(() => Math.random() - 0.5);
      setColors(newColors);
    }
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [colors]);

  useFrame((state, delta) => {
    if (!light.current || !light2.current || !light3.current || !light4.current || !light5.current) {
      return;
    }

    easing.dampC(light.current.color, colors[0], 0.25, delta);
    easing.dampC(light2.current.color, colors[1], 0.35, delta);
    easing.dampC(light3.current.color, colors[2], 0.25, delta);
    easing.dampC(light4.current.color, colors[3], 0.15, delta);
    easing.dampC(light5.current.color, colors[4], 0.45, delta);

    if (isMobile) {
      light.current.position.set(-0.1, -Math.sin(state.clock.getElapsedTime()) / 2, 1);
      light2.current.position.set(-0.1, -Math.sin(state.clock.getElapsedTime()) / 2, 1);
      light3.current.position.set(-0.1, -Math.sin(state.clock.getElapsedTime()) / 2, 1);
      light4.current.position.set(-0.1, -Math.sin(state.clock.getElapsedTime()) / 2, 1);
    } else {
      easing.damp3(
        light.current.position,
        [((state.pointer.x / 2) * state.viewport.width) / 4, ((state.pointer.y / 2) * state.viewport.height) / 4, 1],
        0.4,
        delta,
      );

      easing.damp3(
        light2.current.position,
        [((state.pointer.x / 2) * state.viewport.width) / 4, ((state.pointer.y / 2) * state.viewport.height) / 4, 1.1],
        0.4,
        delta,
      );

      easing.damp3(
        light3.current.position,
        [((state.pointer.x / 2) * state.viewport.width) / 4, ((state.pointer.y / 2) * state.viewport.height) / 4, 1],
        0.4,
        delta,
      );

      easing.damp3(
        light4.current.position,
        [((state.pointer.x / 2) * state.viewport.width) / 4, ((state.pointer.y / 2) * state.viewport.height) / 4, 0.8],
        0.4,
        delta,
      );
    }
  });

  return (
    <>
      <directionalLight ref={light} intensity={2} />
      <directionalLight ref={light2} intensity={3} />
      <directionalLight ref={light3} intensity={2.5} />
      <directionalLight ref={light4} intensity={5} position={[-100, -200, -50]} />

      <ambientLight color={'lightblue'} ref={light5} intensity={100} />
    </>
  );
}
