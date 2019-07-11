import React from 'react';
import { F7App, F7View } from 'framework7-react';
import App from './App';

function Root() {
  return (
    <F7App>
      <F7View main>
        <App />
      </F7View>
    </F7App>
  )
}

export default Root;