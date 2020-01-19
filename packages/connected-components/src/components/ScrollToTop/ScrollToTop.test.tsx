/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { renderWithRouter } from '../../tests';
import { Route } from 'react-router-dom';
import ScrollToTop, { ScrollToTopProps } from '.';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Page = () => <h1>Page</h1>;

const App: React.FC<Partial<ScrollToTopProps>> = (
  props: Partial<ScrollToTopProps> = {},
) => (
    <ScrollToTop {...props}>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/page" component={Page} />
    </ScrollToTop>
  );

describe('<ScrollToTop/>', () => {
  it('should call changeHandler initially', () => {
    const changeHandler = jest.fn();

    renderWithRouter(<App changeHandler={changeHandler} />);

    expect(changeHandler).toHaveBeenCalledWith('/');
  });

  it('should call changeHandler on route change', async () => {
    const changeHandler = jest.fn();

    const { history } = renderWithRouter(<App changeHandler={changeHandler} />);

    history.push('/about');

    expect(changeHandler).toHaveBeenCalledWith('/about');

    history.push('/page');

    expect(changeHandler).toHaveBeenCalledWith('/page');
  });
});
