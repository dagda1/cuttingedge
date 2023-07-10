import { FrontPage } from '~/components/FrontPage/FrontPage';
import { HomeDesktop } from './HomeDesktop';
import { HomeMobile } from './HomeMobile';
import { Services } from '../Panels/Services/Services';

export function Home(): JSX.Element {
  return (
    <>
      <Services />
      {/* <FrontPage />
      <HomeDesktop />
      <HomeMobile /> */}
    </>
  );
}
