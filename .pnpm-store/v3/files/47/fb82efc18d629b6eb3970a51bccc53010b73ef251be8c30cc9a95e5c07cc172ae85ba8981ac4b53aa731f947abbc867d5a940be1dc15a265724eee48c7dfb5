import { A11yDocument, Region } from './Region.js';
export interface Explorer {
    Attach(): void;
    Detach(): void;
    Start(): void;
    Stop(): void;
    AddEvents(): void;
    RemoveEvents(): void;
}
export declare class AbstractExplorer implements Explorer {
    document: A11yDocument;
    protected region: Region;
    protected node: HTMLElement;
    protected events: [string, (x: Event) => void][];
    protected active: boolean;
    private oldIndex;
    protected static stopEvent(event: Event): void;
    protected constructor(document: A11yDocument, region: Region, node: HTMLElement, ...rest: any[]);
    protected Events(): [string, (x: Event) => void][];
    static create(document: A11yDocument, region: Region, node: HTMLElement, ...rest: any[]): Explorer;
    Attach(): void;
    Detach(): void;
    Start(): void;
    Stop(): void;
    AddEvents(): void;
    RemoveEvents(): void;
}
export interface KeyExplorer extends Explorer {
    KeyDown(event: KeyboardEvent): void;
    FocusIn(event: FocusEvent): void;
    FocusOut(event: FocusEvent): void;
}
export declare abstract class AbstractKeyExplorer extends AbstractExplorer implements KeyExplorer {
    protected events: [string, (x: Event) => void][];
    abstract KeyDown(event: KeyboardEvent): void;
    FocusIn(event: FocusEvent): void;
    FocusOut(event: FocusEvent): void;
}
export declare class SpeechExplorer extends AbstractKeyExplorer implements KeyExplorer {
    document: A11yDocument;
    protected region: Region;
    protected node: HTMLElement;
    private mml;
    private started;
    protected walker: sre.Walker;
    protected highlighter: sre.Highlighter;
    private speechGenerator;
    private foreground;
    private background;
    constructor(document: A11yDocument, region: Region, node: HTMLElement, mml: HTMLElement);
    private initWalker();
    Start(): void;
    Stop(): void;
    Speech(walker: any): void;
    KeyDown(event: KeyboardEvent): void;
    Move(key: number): void;
}
export declare class Magnifier extends SpeechExplorer {
    Start(): void;
    private showFocus();
    Move(key: number): void;
}
export interface MouseExplorer extends Explorer {
    MouseOver(event: MouseEvent): void;
    MouseOut(event: MouseEvent): void;
    MouseDown(event: MouseEvent): void;
    MouseUp(event: MouseEvent): void;
}
export declare abstract class AbstractMouseExplorer extends AbstractExplorer implements MouseExplorer {
    protected events: [string, (x: Event) => void][];
    MouseOver(event: MouseEvent): void;
    MouseOut(event: MouseEvent): void;
    abstract MouseDown(event: MouseEvent): void;
    abstract MouseUp(event: MouseEvent): void;
}
export declare class HoverExplorer extends AbstractMouseExplorer {
    document: A11yDocument;
    protected region: Region;
    protected node: HTMLElement;
    private foreground;
    private background;
    private highlighter;
    protected nodeQuery: (node: HTMLElement) => boolean;
    protected nodeAccess: (node: HTMLElement) => string;
    constructor(document: A11yDocument, region: Region, node: HTMLElement);
    MouseDown(event: MouseEvent): void;
    MouseUp(event: MouseEvent): void;
    MouseOut(event: MouseEvent): void;
    MouseOver(event: MouseEvent): void;
    getNode(node: HTMLElement): [HTMLElement, string];
}
export declare class TypeExplorer extends HoverExplorer {
    protected nodeQuery: (node: HTMLElement) => boolean;
    protected nodeAccess: (node: HTMLElement) => string;
}
export declare class RoleExplorer extends HoverExplorer {
    protected nodeQuery: (node: HTMLElement) => boolean;
    protected nodeAccess: (node: HTMLElement) => string;
}
export declare class TagExplorer extends HoverExplorer {
    protected nodeQuery: (node: HTMLElement) => boolean;
    protected nodeAccess: (node: HTMLElement) => string;
}
