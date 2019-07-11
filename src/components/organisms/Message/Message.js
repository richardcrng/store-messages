import * as R from 'ramda'
import React from 'react';
import { F7Message } from 'framework7-react';
import MessageText from '../../molecules/MessageText';

const MessageContext = React.createContext()
export const useMessageContext = () => React.useContext(MessageContext)
export const useMessageId = () => useMessageContext().id

function Message({ id, children, sender, text }) {
  return (
    <MessageContext.Provider value={{ id }}>
      <F7Message
        color='teal'   // so that highlighting is visible
        tail
        type={sender === 'user' ? 'sent' : 'received'}
      >
        <MessageText>{R.defaultTo(text, children)}</MessageText>
      </F7Message>
    </MessageContext.Provider>
  )
}

export default Message;