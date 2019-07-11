import React from 'react';
import { F7Messages, F7Message, F7Page, F7MessagesTitle } from 'framework7-react';

function MessageThread({ messages = {} }) {
  return (
    <F7Page>
      <F7Messages>
        {Object.entries(messages).map(([key, message]) => (
          <React.Fragment key={key}>
            <F7MessagesTitle><b>{key}</b></F7MessagesTitle>
            <F7Message
              type={message.sender === 'user' ? 'sent' : 'received'}
            >
              <span>{message.text}</span>
            </F7Message>
          </React.Fragment>
        ))}
      </F7Messages>
    </F7Page>
  )
}

export default MessageThread;