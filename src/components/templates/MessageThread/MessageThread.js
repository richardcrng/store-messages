import React from 'react';
import { F7Messages, F7Page } from 'framework7-react';
import Message from '../../molecules/Message';
import SpanifiedMessage from '../../organisms/SpanifiedMessage';

function MessageThread({ messages = {} }) {
  return (
    <F7Page>
      <F7Messages>
        {Object.entries(messages).map(([key, { text, sender, createdAt }]) => (
          <SpanifiedMessage key={key} {...{ sender, text }} />
        ))}
      </F7Messages>
    </F7Page>
  )
}

export default MessageThread;