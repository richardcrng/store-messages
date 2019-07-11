import React from 'react';
import { useSelector } from 'react-redux';
import MessageThread from '../../templates/MessageThread';

function Conversation() {
  const messages = useSelector(state => state.messages)

  return (
    <MessageThread
      messages={messages}
      onSelect={() => console.log('running onSelect')}  
    />
  )
}

export default Conversation;