import { useRef } from 'react';
import { Box } from '@cutting/component-library';
import { FrontPage } from '~/components/FrontPage/FrontPage';
import { OSS } from '../Panels/OSS/OSS';
import { Highlights } from '../Panels/Highlights/Highlights';
import { MobileContainer } from './MobileContainer';
import { Frameworks } from '../Panels/Frameworks/Frameworks';
import { Services } from '../Panels/Services/Services';
import { Clients } from '../Panels/Clients/Clients';

export function HomeMobile(): JSX.Element {
  const panelsContainer = useRef<HTMLDivElement>(null);

  return (
    <Box height="full" ref={panelsContainer}>
      <MobileContainer backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/v1690025905/struggle_yderkl.png">
        <FrontPage />
      </MobileContainer>
      <MobileContainer backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/o_70/v1690028841/dusk_kg7et9.png">
        <Frameworks />
      </MobileContainer>
      <MobileContainer backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/o_05/v1690453264/code_mmdqb8.png">
        <OSS />
      </MobileContainer>
      <MobileContainer backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/o_50/v1690191864/clients_ipmkwv.png">
        <Highlights />
      </MobileContainer>
      <MobileContainer backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/o_05/v1690893685/html_kg05e7.png">
        <Clients />
      </MobileContainer>
      <Box
        component="section"
        className="section"
        position="relative"
        height={{ mobile: 'auto', desktop: 'screen' }}
        width="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Services />
      </Box>
    </Box>
  );
}
