import { Box, Card, Heading, List, Stack, Text } from '@cutting/component-library';
import type { ReactNode } from 'react';
import { TextNavLink } from '~/components/TextNavLink/TextNavLink';
import * as styles from './Service.css';
import type { ListProps } from '@cutting/component-library';

type ServiceProps = Pick<ListProps, 'children'> & {
  heading: string;
  actionText: ReactNode;
  children: ReactNode;
  link: string;
  buttonText?: string;
};

export function Service({
  heading,
  actionText,
  link,
  buttonText = 'Find out more',
  children,
}: ServiceProps): JSX.Element {
  return (
    <Card height="full" rounded tone="formAccent">
      <Box marginY="small" display="flex" flexDirection="column" justifyContent="spaceBetween" height="full">
        <Heading center level="2">
          {heading}
        </Heading>
        <List type="bullet" size="large">
          {children}
        </List>

        <Stack space="xxlarge" align="center">
          <Text tone="promote" component="p" size="large">
            {actionText}
          </Text>

          <Box
            display="inlineBlock"
            padding="large"
            marginY={{ mobile: 'small', desktop: 'medium', wide: 'large' }}
            className={styles.action}
          >
            <TextNavLink size="large" to={link} underline>
              {buttonText}
            </TextNavLink>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}
