import { Cow, Heading } from '@cutting/component-library';
import { GelItem, Layout, Wrap } from '@cutting/react-gel';
import * as cs from 'classnames';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { bannerPages } from '../../routes';
import * as urls from '../../urls';
import { MobileNavButton } from '../MobileNavButton';

const styles = require('./Menu.scss');

export interface MenuState {
  isExpanded: boolean;
}

export class Menu extends React.Component<{}, MenuState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isExpanded: false
    };
  }

  collapse = () => {
    this.setState({ isExpanded: false });
  }

  toggleIsExpanded = () => {
    this.setState((prevState) => ({ isExpanded: !prevState.isExpanded }));
  }

  menuItems = () => {
    return bannerPages.map((page, i) => (
      <li key={page.heading} className={cs(styles.horizontal, {[styles.expanded]: this.state.isExpanded})}>
        <NavLink to={page.path} activeClassName={styles.active}>
          {page.heading}
        </NavLink>
      </li>
    ))
  }

  render() {
    return (
      <nav className={cs(styles.container, 'wrapper')}>
        <Wrap>
          <Layout center className={styles.full}>
            <GelItem>
              <ul>
                <li className={styles.logo__container}>
                  <NavLink to={urls.Home}>
                    <Cow />
                  </NavLink>
                </li>
                <li>
                  <Heading level={2}>Paul Cowan</Heading>
                </li>
                <li className={styles.mobile__button__container}>
                  <MobileNavButton onClick={this.toggleIsExpanded} isActive={this.state.isExpanded}/>
                </li>
                {this.menuItems()}
              </ul>
            </GelItem>
          </Layout>
          <Layout className={cs(styles.expandable, {[styles.expanded]: this.state.isExpanded})}>
            {this.menuItems()}
          </Layout>
        </Wrap>
      </nav>
    );
  }
}
