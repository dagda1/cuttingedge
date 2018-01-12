import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Urls from '../../../urls';
import Home from '../Home';
import PrivacyPolicy from '../PrivacyPolicy';

export const Menu: React.StatelessComponent = () => (
  <ul>
    <li>
      <Link to={Urls.Home} component={Home}>
        Home
      </Link>
    </li>
    <li>
      <Link to={Urls.Home} component={PrivacyPolicy}>
        Privacy Policy
      </Link>
    </li>
  </ul>
);
