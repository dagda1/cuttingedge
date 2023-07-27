import * as styles from './virtualTouchable.css';

interface UseVirtualTouchableOptions {
  xAxis: boolean;
}

export function virtualTouchable({ xAxis }: UseVirtualTouchableOptions = { xAxis: true }): string | string[] {
  return !xAxis ? [styles.virtualTouchable, styles.yAxisOnly] : styles.virtualTouchable;
}
