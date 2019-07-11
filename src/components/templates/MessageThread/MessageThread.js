import React from 'react';
import { F7Messages, F7Page } from 'framework7-react';
import HighlightableMessage from '../../organisms/HighlightableMessage';

const MessageThreadContext = React.createContext()
export const useMessageThreadContext = () => React.useContext(MessageThreadContext)

function MessageThread({ messages = {}, onSelect }) {
  return (
    <MessageThreadContext.Provider value={{ onSelect }}>
      <F7Page>
        <F7Messages>
          {Object.entries(messages).map(([key, { text, sender, createdAt }]) => (
            <HighlightableMessage key={key} {...{ sender, text }} />
          ))}
        </F7Messages>
      </F7Page>
    </MessageThreadContext.Provider>
  )
}

export default MessageThread;