import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { LinkWrapper } from '../LinkWrapper/LinkWrapper';
import { workWithUsButtonContainer } from './WorkWithUsButton.css';
import cs from 'classnames';

export function WorkWithUsButton(): JSX.Element {
  return (
    <div className={cs(workWithUsButtonContainer)}>
      <Menu menuButton={<MenuButton>WORK WITH US</MenuButton>}>
        <MenuItem>
          <LinkWrapper linkType="anchor" href={`/roadmap`}>
            PRODUCTIVITY ROADMAP
          </LinkWrapper>
        </MenuItem>
        <MenuItem>
          <LinkWrapper linkType="anchor" href={`/consult`}>
            STRATEGY CONSULT
          </LinkWrapper>
        </MenuItem>
      </Menu>
    </div>
  );
}
