import { Panel } from '~/components/Panel/Panel';
import backstage from '~/images/backstage.png';
import ember from '~/images/emberjs.png';
import { MotionImage } from '~/components/MotionImage/MotionImage';
import { Box, TextLink } from '@cutting/component-library';

export function OSS(): JSX.Element {
  return (
    <Panel>
      <Box height="full" position="relative" display="flex" flexDirection="column" justifyContent="spaceEvenly">
        <MotionImage type="parallax" alt="ember" src={ember} />
        <h2>
          <TextLink size="large" external href="https://cutting.scot/oss">
            We have 350+ merged pull requests into many, many popular open source projects
          </TextLink>
        </h2>
        <MotionImage type="static" alt="Backstage" src={backstage} />
      </Box>
    </Panel>
  );
}
