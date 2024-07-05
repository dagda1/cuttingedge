import { createContext } from 'react';

import type { TextStyleProps } from '../../../style/typography/typography';

export const TextContext = createContext<TextStyleProps | null>(null);
