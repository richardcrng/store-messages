import React from 'react';
import { F7Message } from 'framework7-react';
import MessageText from '../../atoms/MessageText';

function Message({ children, sender }) {
  return (
    <F7Message
      color='green'   // so that highlighting is visible
      tail
      type={sender === 'user' ? 'sent' : 'received'}
    >
      <MessageText>{children}</MessageText>
    </F7Message>
  )
}

export default Message;