import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Urls from '../../../urls';

export const Menu: React.StatelessComponent = () => (
  <ul>
    <li>
      <Link to={Urls.Home}>Home</Link>
    </li>
    <li>
      <Link to={Urls.PrivacyPolicy}>Privacy Policy</Link>
    </li>
  </ul>
);
