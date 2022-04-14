import { LitElement } from "lit-element";
import { TouchGestureMixinProps } from "./TouchGestureMixin";
import type { Constructor } from "./utils";
export interface Positioned {
    panX: number;
    panY: number;
    scale: number;
    zoomSpeed: number;
    panSpeed: number;
    readonly isMovable: boolean;
    readonly canvasTransform: readonly string[];
}
export declare const PositionedMixin: <T extends Constructor<LitElement>>(superClass: T) => T & Constructor<Positioned & TouchGestureMixinProps>;
