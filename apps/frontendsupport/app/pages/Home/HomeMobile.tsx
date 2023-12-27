import { Box } from '@cutting/component-library';
import { MobileContainer } from './MobileContainer';
import { FrontPage } from '~/components/FrontPage/FrontPage';
import { Frameworks } from '../Panels/Frameworks/Frameworks';
import { OSS } from '../Panels/OSS/OSS';
import { Highlights } from '../Panels/Highlights/Highlights';
import { Clients } from '../Panels/Clients/Clients';
import { Services } from '../Panels/Services/Services';

export function HomeMobile(): JSX.Element {
  return (
    <Box height="full">
      <MobileContainer backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/v1690025905/struggle_yderkl.png">
        <FrontPage />
      </MobileContainer>
      <MobileContainer backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/o_70/v1690028841/dusk_kg7et9.png">
        <Frameworks />
      </MobileContainer>
      <MobileContainer backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/o_10/v1690453264/code_mmdqb8.png">
        <OSS />
      </MobileContainer>
      <MobileContainer backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/o_70/v1690191864/clients_ipmkwv.png">
        <Highlights />
      </MobileContainer>
      <MobileContainer backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/o_10/v1690893685/html_kg05e7.png">
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
