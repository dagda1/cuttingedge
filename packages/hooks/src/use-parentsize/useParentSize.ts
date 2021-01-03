import { RefCallback, RefObject, useCallback } from 'react';
import { Dimensions, UseParentSizeResult } from './types';
import { useMemo, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useIsomorphicLayoutEffect } from '../use-isomorphic-layout-effect/useIsomorphicLayoutEffect';
import { usePrevious } from '../use-previous/usePrevious';
import { useIsMounted } from '../use-is-mounted/useIsMounted';

type SubscriberCleanup = () => void;
type SubscriberResponse = SubscriberCleanup | void;

function useResolvedElement<E extends HTMLElement>(
  subscriber: (element: E) => SubscriberResponse,
  refOrElement?: E | RefObject<E> | null,
): RefCallback<E> {
  let ref: RefObject<E> | null = null;
  const refElement = useRef<E | null>(null);
  const callbackRefElement = useRef<E | null>(null);
  const lastReportedElementRef = useRef<E | null>(null);
  const cleanupRef = useRef<SubscriberResponse | null>();

  console.log('in unResolved');

  const callSubscriber = useCallback(() => {
    let element = null;
    if (callbackRefElement.current) {
      element = callbackRefElement.current;
    } else if (refElement.current) {
      element = refElement.current;
    } else if (refOrElement instanceof HTMLElement) {
      element = refOrElement;
    }

    if (lastReportedElementRef.current === element) {
      return;
    }

    if (cleanupRef.current) {
      cleanupRef.current();
      // Making sure the cleanup is not called accidentally multiple times.
      cleanupRef.current = null;
    }
    lastReportedElementRef.current = element;

    if (element) {
      cleanupRef.current = subscriber(element);
    }
  }, [refOrElement, subscriber]);

  const refCallback = useCallback(
    (element: E) => {
      callbackRefElement.current = element;
      callSubscriber();
    },
    [callSubscriber],
  );

  if (refOrElement && !(refOrElement instanceof HTMLElement)) {
    ref = refOrElement;
  }

  useIsomorphicLayoutEffect(() => {
    if (ref) {
      refElement.current = ref.current;
    }
    callSubscriber();
  }, [callSubscriber, ref]);

  return refCallback;
}

export const useParentSize = <E extends HTMLElement = HTMLElement>(
  ref?: RefObject<E> | E | null | undefined,
): UseParentSizeResult => {
  const resizeObserverRef = useRef<ResizeObserver | null>();
  const isMounted = useIsMounted();
  const [{ width, height }, setDimensions] = useState<Dimensions>({ width: undefined, height: undefined });
  const previous = usePrevious<Dimensions>({
    width,
    height,
  });

  console.log('in parentSize');

  const refCallback = useResolvedElement<E>((element) => {
    if (!!resizeObserverRef.current) {
      return;
    }

    resizeObserverRef.current = new ResizeObserver((entries) => {
      if (!Array.isArray(entries) || !entries.length) {
        return;
      }

      const entry = entries[0];

      const newWidth = Math.round(entry.contentRect.width);
      const newHeight = Math.round(entry.contentRect.height);

      console.log({
        previousWidth: previous.current?.width,
        previousHeight: previous.current?.height,
        width,
        height,
        newWidth,
        newHeight,
      });

      if (newHeight === previous.current?.width && newWidth === previous.current?.height) {
        return;
      }

      const newSize = { width: newWidth, height: newHeight };

      previous.current = newSize;

      console.log({ isMounted: isMounted.current });

      if (isMounted.current === true) {
        setDimensions(newSize);
      }
    });

    resizeObserverRef.current.observe(element);

    return () => {
      if (!resizeObserverRef.current) {
        return;
      }

      console.log('unmounting this succker');

      resizeObserverRef.current.unobserve(element);
    };
  }, ref);

  return useMemo(
    () => ({
      ref: refCallback,
      width,
      height,
    }),
    [height, refCallback, width],
  );
};
