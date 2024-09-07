import type { Object3D } from 'three';

export interface DragEndEvent {
  type: string;
  object: Object3D;
}

export type DragStartEvent = DragEndEvent;

export interface Point {
  x: number;
  y: number;
}

export interface CartesianLine {
  start: Point;
  end: Point;
}

export type TwoDVector = [number, number];
