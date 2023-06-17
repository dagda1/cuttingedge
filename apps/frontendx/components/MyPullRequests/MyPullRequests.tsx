import { TextLink } from '@cutting/component-library';

export function MyPullRequests(): JSX.Element {
  return (
    <TextLink external href="https://github.com/pulls?q=is%3Amerged+is%3Apr+author%3Adagda1+-user%3Adagda1">
      140+ merged pull requests in the past 12 months
    </TextLink>
  );
}
