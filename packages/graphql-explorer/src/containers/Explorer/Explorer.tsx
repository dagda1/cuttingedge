import { FC, useRef } from 'react';
import { ParentsizeSVG } from '@cutting/svg';
import styles from './Explorer.module.scss';

export interface ExplorerProps {
  gatewayUrl: string;
}

export const Explorer: FC<ExplorerProps> = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className={styles.container} ref={ref}>
        <ParentsizeSVG elementRef={ref}>
          <circle x={12} y={20} r={20} />
        </ParentsizeSVG>
      </div>
    </>
  );
};
