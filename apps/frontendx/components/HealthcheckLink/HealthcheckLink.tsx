import { LinkWrapper } from '../LinkWrapper/LinkWrapper';

export function HealthcheckLink(): JSX.Element {
  return (
    <div>
      Take our{' '}
      <LinkWrapper linkType="anchor" href="/productivity-test/1">
        frontend productivity healthcheck
      </LinkWrapper>{' '}
      to measure your current frontend productivity.
    </div>
  );
}
