import React from 'react';
import { useSelector } from 'react-redux';
import MessageThread from '../../templates/MessageThread';

function Conversation() {
  const messages = useSelector(state => state.messages)

  const makeOnSelect = (messageId, characterIndex) => (selection) => {
    console.log('selection', selection)
    console.log('messageId', messageId)
    console.log('characterIndex', characterIndex)
  }

  const onSelect = ({ container, messageId, range }) => {
    console.log(container, messageId)
    console.log(range.cloneContents().children)
  }

  return (
    <MessageThread {...{ makeOnSelect, messages, onSelect }} />
  )
}

export default Conversation;