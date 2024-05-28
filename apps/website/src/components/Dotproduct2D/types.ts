import type { Object3D } from 'three';

export interface DragEndEvent {
  type: string;
  object: Object3D;
}

export type DragStartEvent = DragEndEvent;
