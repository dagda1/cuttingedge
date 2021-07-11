import type { FC, AnchorHTMLAttributes } from 'react';
export interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    dataSelector?: string;
    blank?: boolean;
    ariaLabel?: string;
    ariaLabelledBy?: string;
}
export declare const ExternalLink: FC<ExternalLinkProps>;
//# sourceMappingURL=index.d.ts.map