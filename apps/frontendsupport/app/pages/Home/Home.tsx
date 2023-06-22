import { useRef } from 'react';
import { FrontPage } from '~/components/FrontPage/FrontPage';
import { Header } from '~/components/Header/Header';
import { HomeDesktop } from './HomeDesktop';
import { HomeMobile } from './HomeMobile';

export function Home(): JSX.Element {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Header />
      <main>
        <FrontPage buttonRef={buttonRef} />
        <HomeDesktop />
        <HomeMobile />
      </main>
    </>
  );
}
