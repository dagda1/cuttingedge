import { DependencyList, MouseEventHandler, TouchEventHandler } from 'react';
export declare type Point2D = [number, number];
interface PanController {
    onMouseDown: MouseEventHandler;
    onMouseMove: MouseEventHandler;
    onMouseUp: MouseEventHandler;
    onMouseLeave: MouseEventHandler;
    onTouchStart: TouchEventHandler;
    onTouchMove: TouchEventHandler;
    onTouchCancel: TouchEventHandler;
    onTouchEnd: TouchEventHandler;
}
declare type UsePan = (cb: (movement: Point2D) => any, deps: DependencyList) => PanController;
export declare const usePan: UsePan;
export {};
