import { LitElement } from "lit-element";
import type { Constructor, Point2D } from "./utils";
export interface TouchGestureMixinProps {
    isTouching: boolean;
    onTouchPan(delta: Point2D): void;
    onTouchPinch(delta: number): void;
}
export declare const TouchGestureMixin: <T extends Constructor<LitElement>>(superClass: T) => T & Constructor<TouchGestureMixinProps>;
