import React from 'react';
import { useSelector } from 'react-redux';
import MessageThread from '../../templates/MessageThread';
import highlight from '../../../utils/highlight';
import useSelection from '../../../hooks/useSelection';

function Conversation() {
  const messages = useSelector(state => state.messages)

  return (
    <MessageThread messages={messages} />
  )
}

export default Conversation;