import * as React from 'react';
import * as testUtils from '../../tests';
import { Route } from 'react-router-dom';
import ScrollToTop, { ScrollToTopProps } from '.';
import { History } from 'history';
import createMemoryHistory from 'history/createMemoryHistory';
import { flushPromises } from '@cutting/util';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Page = () => <h1>Page</h1>;

const App = (props: Partial<ScrollToTopProps> = {}) => (
  <ScrollToTop {...props}>
    <Route path="/" component={Home} exact />
    <Route path="/about" component={About} />
    <Route path="/page" component={Page} />
  </ScrollToTop>
);

const wrap = (history: History, props) => testUtils.wrap(App, props, history);

describe('<ScrollToTop/>', () => {
  let history;

  beforeEach(() => {
    history = createMemoryHistory();
  });

  it('should call changeHandler initially', () => {
    const changeHandler = jest.fn();

    const wrapper = wrap(history, { changeHandler });

    history.push('/');

    wrapper.update();

    expect(changeHandler).toHaveBeenCalledWith('/');
  });

  it('should call changeHandler on route change', async () => {
    const changeHandler = jest.fn();

    const wrapper = wrap(history, { changeHandler });

    history.push('/about');

    expect(changeHandler).toHaveBeenCalledWith('/about');

    history.push('/page');

    expect(changeHandler).toHaveBeenCalledWith('/page');
  });
});
