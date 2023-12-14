import { Box, Card, Heading, List, Stack, Text } from '@cutting/component-library';
import type { ReactNode } from 'react';
import { TextNavLink } from '~/components/TextNavLink/TextNavLink.js';
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
      <Box display="flex" flexDirection="column" justifyContent="spaceBetween" height="full" marginTop="small">
        <Heading center level="2">
          {heading}
        </Heading>
        <List type="bullet" size="standard">
          {children}
        </List>

        <Stack space="medium" align="center">
          <Text tone="promote" size="standard">
            {actionText}
          </Text>

          <Box display="inlineBlock" padding="medium" marginY={{ mobile: 'small', desktop: 'small', wide: 'large' }}>
            <TextNavLink size="standard" to={link} underline>
              {buttonText}
            </TextNavLink>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}
