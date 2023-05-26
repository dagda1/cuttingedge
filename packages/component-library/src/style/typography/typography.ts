import * as styles from './typography.css';

export interface TextStyleProps {
  weight?: keyof typeof styles.fontWeight;
  size?: keyof typeof styles.textSizeUntrimmed;
  baseline: boolean;
}

export function textStyles({ weight = 'regular', size = 'standard', baseline }: TextStyleProps): string[] {
  return [
    styles.fontFamily,
    styles.fontWeight[weight],
    (baseline ? styles.textSizeTrimmed : styles.textSizeUntrimmed)[size],
  ];
}
