import { FrontPage } from '~/components/FrontPage/FrontPage';
import { HomeDesktop } from './HomeDesktop';
import { HomeMobile } from './HomeMobile';

export function Home(): JSX.Element {
  return (
    <div>
      <FrontPage />
      <HomeDesktop />
      <HomeMobile />
    </div>
  );
}
