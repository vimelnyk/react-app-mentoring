import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './views';
import store from './store';

describe('App', () => {
  test('renders App component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
});

// describe('App', () => {
//   test('renders App snapshot', () => {
//     const { asFragment } = render(<App />);
//     expect(asFragment(<App />)).toMatchSnapshot();
//   });
// });
