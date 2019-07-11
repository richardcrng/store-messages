import React from 'react';
import { F7Message } from 'framework7-react';
import MessageText from '../../atoms/MessageText';

function Message({ sender, text }) {
  return (
    <F7Message
      tail
      type={sender === 'user' ? 'sent' : 'received'}
    >
      <MessageText>{text}</MessageText>
    </F7Message>
  )
}

export default Message;