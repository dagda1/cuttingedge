import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';
import { Testimonial } from '../Testimonial/Testimonial';
import { Text } from '~/components/atoms/Text/Text';

export function Redhatestimonial(): JSX.Element {
  return (
    <Box marginY="medium">
      <Testimonial
        from="Luke Shannon (Lead developer Parodos project redhat)"
        url="https://www.linkedin.com/in/luke-shannon-a41283/"
      >
        <Stack space="medium">
          <Text component="p">
            We brought Paul into a project that had been struggling to deliver UI functionality written in React.
          </Text>
          <Text component="p">
            A huge challenge was the client was not totally sure what they wanted, so requirements were not as clear as
            they needed to be.
          </Text>
          <Text component="p">
            All these challenges went away with Paul. He was able to quickly deliver functionality that could be put in
            front of the client for feedback. Paul could then quickly change/add functionality based on that feedback.
            Within a few cycles we were delivering exactly what the client wanted, making everyone happy. Paul&apos;s
            quality is amazing, as is his ability to explain his code and architectural approaches.
          </Text>
          <Text component="p">I would highly recommend Paul</Text>
          <hr />
        </Stack>
      </Testimonial>
    </Box>
  );
}
