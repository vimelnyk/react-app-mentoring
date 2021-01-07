import React from 'react';
import { render } from '@testing-library/react';
import Header from './header';
import {Provider} from 'react-redux';
import store from '../../store';



describe('Header', () => {
  test('renders Header component', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
  });
});
