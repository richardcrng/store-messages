import React from 'react';
import { F7Messages, F7Page } from 'framework7-react';
import HighlightableMessage from '../../organisms/HighlightableMessage';
import Message from '../../organisms/Message/Message';

const MessageThreadContext = React.createContext()
export const useMessageThreadContext = () => React.useContext(MessageThreadContext)

function MessageThread({ makeOnSelect, messages = {}, onSelect }) {
  return (
    <MessageThreadContext.Provider value={{ makeOnSelect, onSelect }}>
      <F7Page>
        <F7Messages>
          {Object.entries(messages).map(([key, { id, text, sender, createdAt }]) => (
            <Message key={key} {...{ id, sender, text }} />
          ))}
        </F7Messages>
      </F7Page>
    </MessageThreadContext.Provider>
  )
}

export default MessageThread;