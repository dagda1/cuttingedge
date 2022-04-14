import { MathDocument } from '../../core/MathDocument.js';
import { CssStyles } from '../../output/common/CssStyles.js';
import '../sre.js';
export declare type A11yDocument = MathDocument<HTMLElement, Text, Document>;
export interface Region {
    AddStyles(): void;
    AddElement(): void;
    Show(node: HTMLElement, highlighter: sre.Highlighter): void;
    Hide(): void;
    Clear(): void;
    Update(content: string): void;
}
export declare abstract class AbstractRegion implements Region {
    document: A11yDocument;
    protected static className: string;
    protected static styleAdded: boolean;
    protected static style: CssStyles;
    protected div: HTMLElement;
    protected inner: HTMLElement;
    protected CLASS: typeof AbstractRegion;
    constructor(document: A11yDocument);
    AddStyles(): void;
    AddElement(): void;
    Show(node: HTMLElement, highlighter: sre.Highlighter): void;
    protected abstract position(node: HTMLElement): void;
    protected abstract highlight(highlighter: sre.Highlighter): void;
    Hide(): void;
    Clear(): void;
    Update(speech: string): void;
}
export declare class ToolTip extends AbstractRegion {
    protected static className: string;
    protected static style: CssStyles;
    protected position(node: HTMLElement): void;
    protected highlight(highlighter: sre.Highlighter): void;
}
export declare class LiveRegion extends AbstractRegion {
    document: A11yDocument;
    protected static className: string;
    protected static style: CssStyles;
    constructor(document: A11yDocument);
    Show(node: HTMLElement, highlighter: sre.Highlighter): void;
    protected position(node: HTMLElement): void;
    protected highlight(highlighter: sre.Highlighter): void;
}
export declare class HoverRegion extends AbstractRegion {
    document: A11yDocument;
    protected static className: string;
    protected static style: CssStyles;
    constructor(document: A11yDocument);
    Show(node: HTMLElement, highlighter: sre.Highlighter): void;
    protected position(node: HTMLElement): void;
    protected highlight(highlighter: sre.Highlighter): void;
    AddNode(node: HTMLElement): void;
}
