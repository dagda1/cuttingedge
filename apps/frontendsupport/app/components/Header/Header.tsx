import { TopNav } from './Top';
import * as styles from './Header.css';

export function Header(): JSX.Element {
  return (
    <header className={styles.container}>
      <TopNav />
    </header>
  );
}
