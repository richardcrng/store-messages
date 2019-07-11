import React from 'react';
import { F7Messages, F7Message, F7Page, F7MessagesTitle } from 'framework7-react';

function MessageThread({ messages = {} }) {
  return (
    <F7Page>
      <F7Messages>
        {Object.entries(messages).map(([key, { text, sender, createdAt }]) => (
          <React.Fragment key={key}>
            <F7MessagesTitle><b>{createdAt}</b></F7MessagesTitle>
            <F7Message
              tail
              type={sender === 'user' ? 'sent' : 'received'}
            >
              <span>{text}</span>
            </F7Message>
          </React.Fragment>
        ))}
      </F7Messages>
    </F7Page>
  )
}

export default MessageThread;