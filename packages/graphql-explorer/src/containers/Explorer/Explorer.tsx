import { FC, useRef } from 'react';
import { ParentsizeSVG } from '@cutting/svg';
import styles from './Explorer.module.scss';
import { useFetch } from '@cutting/react-abortable-fetch';
import { LoadingOverlay } from '@cutting/component-library';

export interface ExplorerProps {
  gatewayUrl: string;
}

export const Explorer: FC<ExplorerProps> = ({ gatewayUrl }) => {
  const { data, error, state } = useFetch(gatewayUrl, { executeOnMount: true, method });
  const ref = useRef<HTMLDivElement>(null);

  if (state === 'LOADING') {
    return <LoadingOverlay busy={true} />;
  }

  if (state === 'ERROR') {
    return (
      <div className={styles.error}>
        <h2>{error?.message}</h2>
      </div>
    );
  }

  console.log(data, error);

  return (
    <>
      <div className={styles.container} ref={ref}>
        <ParentsizeSVG elementRef={ref}>
          <circle fill="#fff" x={12} y={20} r={200} />
        </ParentsizeSVG>
      </div>
    </>
  );
};
