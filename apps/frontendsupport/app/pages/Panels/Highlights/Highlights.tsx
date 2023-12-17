import { Box, C2Testimonial, Heading, List, TextLink, Stack } from '@cutting/component-library';
import { Panel } from '../../../components/Panel/Panel.js';
import * as styles from './Highlights.css.js';

export function Highlights(): JSX.Element {
  return (
    <Panel>
      <Box
        display="flex"
        justifyContent="spaceAround"
        alignItems="center"
        flexDirection="column"
        height="full"
        className={styles.container}
        position="relative"
      >
        <Stack space={{ mobile: 'small', desktop: 'large' }} align="center">
          <List space="large" type="none">
            <Heading center level="2">
              <TextLink
                href="https://www.linkedin.com/posts/paul-cowan-19bb1116_backstage-activity-7043616692878401537-EQbh?utm_source=share&utm_medium=member_desktop"
                external
              >
                Backstage contributor of the month
              </TextLink>
            </Heading>
            <Heading center level="2">
              <TextLink href="https://blog.logrocket.com/author/paulcowan/" external>
                Professional writing for logrocket.
              </TextLink>
            </Heading>
          </List>
          <C2Testimonial />
        </Stack>
      </Box>
    </Panel>
  );
}
