import { Heading, Stack, Text } from '@cutting/component-library';

export default function Rescue(): JSX.Element {
  return (
    <Stack space={{ mobile: 'small', desktop: 'large', wide: 'xxlarge' }}>
      <Heading level="2">Navigating the Maze of Frontend Chaos? We're Your Lifeline!</Heading>
      <Text component="p">
        Is your frontend software project spiraling into the abyss? Complexities, delays, and unexpected issues throwing
        you off course? We can be your beacon in the storm of frontend software development.
      </Text>
      <Text component="p">
        Is your team missing critical frontend development skills? We've got the expertise you need.
      </Text>
      <Heading level="2">We Transform Chaos into Calm</Heading>
      <Text component="p">
        Our team of seasoned frontend developers is at your beck and call. We dive into the chaos, identifying the
        roadblocks, and plotting a practical recovery plan. With us, your project isn't just salvaged – it's
        revitalized.
      </Text>
      <Heading level="2">Set Your Project Soaring</Heading>
      <Text component="p">
        We don't stop at fixing the problem. We turn challenges into opportunities. Once we've set your project back on
        track, we equip your team with the knowledge and tools needed to maintain momentum and avoid similar hiccups in
        the future.
      </Text>
      <Heading level="2">Your Success, Our Mission</Heading>
      <Text component="p">
        we believe in every software project's potential for success. With our frontend rescue services, you're not just
        saving your project, but you're setting it up for long-term victory.
      </Text>
      <Text component="p">Ready to pull your frontend project out of the abyss and set it soaring to new heights?</Text>
      <Text component="p" size="large" tone="info" align="center">
        Get in touch with us today – your rescue team is waiting.
      </Text>
    </Stack>
  );
}
