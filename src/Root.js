import React from 'react';
import { Provider } from 'react-redux';
import { F7App, F7View } from 'framework7-react';
import store from './redux/store';
import ROUTES from './constants/routes';

function Root() {
  return (
    <Provider store={store}>
      <F7App params={{ routes: ROUTES }}>
        <F7View main url='/' />
      </F7App>
    </Provider>
  )
}

export default Root;