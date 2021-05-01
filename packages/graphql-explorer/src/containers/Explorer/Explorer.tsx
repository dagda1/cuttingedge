import { FC, useRef } from 'react';
import { ParentsizeSVG } from '@cutting/svg';
import styles from './Explorer.module.scss';
import { useParentSize } from '@cutting/hooks';

export interface ExplorerProps {
  gatewayUrl: string;
}

export const Explorer: FC<ExplorerProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(ref, { debounceDelay: 50 });

  console.log({ width, height });

  return (
    <>
      <div className={styles.container} ref={ref}>
        <ParentsizeSVG elementRef={ref} preserveAspectRatio="xMidYMin meet">
          <circle fill="#fff" x={12} y={20} r={20} />
        </ParentsizeSVG>
      </div>
    </>
  );
};
