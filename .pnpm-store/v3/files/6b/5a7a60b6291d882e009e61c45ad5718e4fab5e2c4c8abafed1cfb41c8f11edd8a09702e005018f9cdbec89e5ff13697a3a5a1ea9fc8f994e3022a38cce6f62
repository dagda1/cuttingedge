import type * as Figma from "figma-js";
import { LitElement, TemplateResult } from "lit-element";
import { Constructor } from "./utils";
import { INodeSelectable } from "./NodeSelectableMixin";
import { Positioned } from "./PositionedMixin";
export interface IViewer {
    zoomMargin: number;
    link: string;
    /**
     * A record of rendered images.
     * Key is an id of the node.
     * Value is an URL of the rendered image.
     */
    __images: Record<string, string>;
    readonly error?: string | TemplateResult | Error | null;
    __updateTree(node: Figma.Node): void;
    __updateEffectMargins(): void;
    resetZoom(): void;
    getMetadata(): {
        fileName: string;
        timestamp: Date | string;
        link: string;
    } | undefined;
}
export declare const ViewerMixin: <T extends Constructor<LitElement>>(superClass: T) => T & Constructor<IViewer & INodeSelectable & Positioned>;
