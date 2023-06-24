import { Panel } from '~/components/Panel/Panel';
import backstage from '~/images/backstage.png';
import ember from '~/images/emberjs.png';
import { MotionImage } from '~/components/MotionImage/MotionImage';
import { Box, TextLink } from '@cutting/component-library';
import rjsf from '~/images/rjsf.png';
import enzyme from '~/images/enzyme.png';
import reduxForm from '~/images/redux-form.png';
import visx from '~/images/visx.png';

export function OSS(): JSX.Element {
  return (
    <Panel>
      <Box height="full" position="relative" display="flex" flexDirection="column" justifyContent="spaceEvenly">
        <Box display="flex" alignItems="center">
          <MotionImage type="parallax" alt="Backstage" src={backstage} />
          <MotionImage type="parallax" alt="redux-form" src={reduxForm} />
          <MotionImage type="static" alt="React JSON schema form" src={rjsf} />
        </Box>
        <h2>
          <TextLink size="large" external href="https://cutting.scot/oss">
            We have 350+ merged pull requests into many, many popular open source projects
          </TextLink>
        </h2>
        <Box display="flex" alignItems="center">
          <MotionImage type="static" alt="ember" src={ember} />
          <MotionImage type="parallax" alt="enzyme" src={enzyme} />
          <MotionImage type="parallax" alt="visx" src={visx} />
        </Box>
      </Box>
    </Panel>
  );
}
