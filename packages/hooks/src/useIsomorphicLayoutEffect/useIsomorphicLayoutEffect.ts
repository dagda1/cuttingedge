import { useEffect, useLayoutEffect } from 'react';

export const useIsomorphicLayoutEffect = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)
  ? useLayoutEffect
  : useEffect;
