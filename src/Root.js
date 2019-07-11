import React from 'react';
import { Provider } from 'react-redux';
import { F7App, F7View } from 'framework7-react';
import Conversation from './components/pages/Conversation';
import store from './redux/store';

function Root() {
  return (
    <Provider store={store}>
      <F7App>
        <F7View main>
          <Conversation />
        </F7View>
      </F7App>
    </Provider>
  )
}

export default Root;