import React from 'react';
import { F7App, F7View } from 'framework7-react';
import Conversation from './components/pages/Conversation';

function Root() {
  return (
    <F7App>
      <F7View main>
        <Conversation />
      </F7View>
    </F7App>
  )
}

export default Root;