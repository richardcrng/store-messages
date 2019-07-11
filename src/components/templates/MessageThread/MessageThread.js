import React from 'react';
import { F7Messages, F7Message, F7Page } from 'framework7-react';

function MessageThread() {
  return (
    <F7Page>
      <F7Messages>
        <F7Message
          type='sent'
          name='Me'
        >
          <span>Message!!</span>
        </F7Message>
      </F7Messages>
    </F7Page>
  )
}

export default MessageThread;