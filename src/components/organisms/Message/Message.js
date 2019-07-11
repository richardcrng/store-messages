import * as R from 'ramda'
import React from 'react';
import { F7Message } from 'framework7-react';
import MessageText from '../../molecules/MessageText';

function Message({ children, sender, text }) {
  return (
    <F7Message
      color='teal'   // so that highlighting is visible
      tail
      type={sender === 'user' ? 'sent' : 'received'}
    >
      <MessageText>{R.defaultTo(text, children)}</MessageText>
    </F7Message>
  )
}

export default Message;