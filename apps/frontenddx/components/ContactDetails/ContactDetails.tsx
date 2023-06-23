import { TextLink } from '@cutting/component-library';

export function ContactDeatils(): JSX.Element {
  return (
    <address>
      <TextLink external href="https://frontenddx.com">
        CUTTING-EDGE SOLUTIONS (SCOTLAND) LIMITED
      </TextLink>
      <br />
      58 Normal Avenue
      <br />
      Glasgow G13 1FE
      <br />
      United Kingdom
      <br />
      +44 7908771391
      <br />
      <TextLink external href="mailto:paul.cowan@cutting.scot">
        paul.cowan@cutting.scot
      </TextLink>
    </address>
  );
}
