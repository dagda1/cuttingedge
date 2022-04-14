import { Handler } from '../core/Handler.js';
import { MmlNode } from '../core/MmlTree/MmlNode.js';
import { MathML } from '../input/mathml.js';
import { EnrichedMathItem, EnrichedMathDocument } from './semantic-enrich.js';
import { MathDocumentConstructor } from '../core/MathDocument.js';
import { LiveRegion, ToolTip, HoverRegion } from './explorer/Region.js';
export declare type Constructor<T> = new (...args: any[]) => T;
export declare type HANDLER = Handler<HTMLElement, Text, Document>;
export declare type HTMLDOCUMENT = EnrichedMathDocument<HTMLElement, Text, Document>;
export declare type HTMLMATHITEM = EnrichedMathItem<HTMLElement, Text, Document>;
export declare type MATHML = MathML<HTMLElement, Text, Document>;
export interface ExplorerMathItem extends HTMLMATHITEM {
    explorable(document: HTMLDOCUMENT): void;
}
export declare function ExplorerMathItemMixin<B extends Constructor<HTMLMATHITEM>>(BaseMathItem: B, toMathML: (node: MmlNode) => string): Constructor<ExplorerMathItem> & B;
export declare type ExplorerObjects = {
    region?: LiveRegion;
    tooltip?: ToolTip;
    tooltip2?: ToolTip;
    tooltip3?: ToolTip;
    magnifier?: HoverRegion;
};
export interface ExplorerMathDocument extends HTMLDOCUMENT {
    explorerObjects: ExplorerObjects;
    explorable(): HTMLDOCUMENT;
}
export declare function ExplorerMathDocumentMixin<B extends MathDocumentConstructor<HTMLDOCUMENT>>(BaseDocument: B): MathDocumentConstructor<ExplorerMathDocument> & B;
export declare function ExplorerHandler(handler: HANDLER, MmlJax?: MATHML): Handler<HTMLElement, Text, Document>;
