import React from 'react';
import { F7Messages, F7Page } from 'framework7-react';
import Message from '../../organisms/Message/Message';

const MessageThreadContext = React.createContext()
export const useMessageThreadContext = () => React.useContext(MessageThreadContext)

function MessageThread({ highlightedCharacters, messages = {}, onSelect }) {
  return (
    <MessageThreadContext.Provider value={{ highlightedCharacters, onSelect }}>
      <F7Page>
        <F7Messages scrollMessages={false}>
          {Object.entries(messages).map(([key, { id, text, sender, createdAt }]) => (
            <Message key={key} {...{ id, sender, text }} />
          ))}
        </F7Messages>
      </F7Page>
    </MessageThreadContext.Provider>
  )
}

export default MessageThread;