import type { ReactNode, FC } from 'react';
import { RadioProps, RadioLayoutProps } from '../../atoms/Radio/types';
export declare type RadioOption = RadioProps & {
  content: ReactNode;
};
export interface RadioGroupProps<T = {}> {
  legend: string;
  name: string;
  options: (Omit<RadioOption, 'name' | 'id'> & Partial<Pick<RadioOption, 'id'>>)[];
  onChange?: (option: RadioProps<T>) => void;
  className?: string;
}
export declare const RadioGroup: FC<RadioGroupProps & RadioLayoutProps>;
//# sourceMappingURL=index.d.ts.map
