/// <reference types="react" />
import "@figspec/components";
import type { FigspecFrameViewer as FigspecFrameViewerElement, FigspecFileViewer as FigspecFileViewerElement } from "@figspec/components";
declare type FigspecFrameViewerElementProps = Pick<FigspecFrameViewerElement, "nodes" | "renderedImage"> & Partial<Pick<FigspecFrameViewerElement, "id" | "className" | "style" | "zoomSpeed" | "panSpeed" | "zoomMargin" | "link">>;
export interface FigspecFrameViewerProps extends FigspecFrameViewerElementProps {
    onScaleChange?(ev: CustomEvent<{
        scale: number;
    }>): void;
    onPositionChange?(ev: CustomEvent<{
        x: number;
        y: number;
    }>): void;
    onNodeSelect?(ev: CustomEvent<{
        selectedNode: unknown | null;
    }>): void;
}
export declare const FigspecFrameViewer: import("react").ForwardRefExoticComponent<FigspecFrameViewerProps & import("react").RefAttributes<FigspecFrameViewerElement>>;
declare type FigspecFileViewerElementProps = Pick<FigspecFileViewerElement, "documentNode" | "renderedImages"> & Partial<Pick<FigspecFileViewerElement, "id" | "className" | "style" | "zoomSpeed" | "panSpeed" | "zoomMargin" | "link">>;
export interface FigspecFileViewerProps extends FigspecFileViewerElementProps {
    onScaleChange?(ev: CustomEvent<{
        scale: number;
    }>): void;
    onPositionChange?(ev: CustomEvent<{
        x: number;
        y: number;
    }>): void;
    onNodeSelect?(ev: CustomEvent<{
        selectedNode: unknown | null;
    }>): void;
}
export declare const FigspecFileViewer: import("react").ForwardRefExoticComponent<FigspecFileViewerProps & import("react").RefAttributes<FigspecFileViewerElement>>;
export {};
