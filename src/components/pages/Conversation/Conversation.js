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
    const timeoutHandle = setTimeout(() => {
      const containedSpans = range.cloneContents().children
      const firstAndLast = [containedSpans[0], containedSpans[containedSpans.length - 1]]
        .map(span => span.id.split('-').slice(1))
      console.log(firstAndLast)
    }, 250);
    return timeoutHandle
  }

  return (
    <MessageThread {...{ makeOnSelect, messages, onSelect }} />
  )
}

export default Conversation;