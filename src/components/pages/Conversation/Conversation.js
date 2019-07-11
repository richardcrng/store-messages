import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MessageThread from '../../templates/MessageThread';
import actions from '../../../redux';
import generatePushID from '../../../utils/generatePushID';

function Conversation() {
  const dispatch = useDispatch()
  const messages = useSelector(state => state.messages)

  const makeOnSelect = (messageId, characterIndex) => (selection) => {
    console.log('selection', selection)
    console.log('messageId', messageId)
    console.log('characterIndex', characterIndex)
  }

  const onSelect = ({ container, messageId, range }) => {
    const timeoutHandle = setTimeout(() => {
      const containedSpans = range.cloneContents().children
      const [startIdx, endIdx] = [containedSpans[0], containedSpans[containedSpans.length - 1]]
        .map(span => span.id.split('-')[2])
      const snippetId = generatePushID()
      dispatch(actions.snippets.create.set(snippetId, {
        id: snippetId,
        message: messageId,
        index: {
          start: startIdx,
          end: endIdx
        }
      }))
    }, 250);
    return timeoutHandle
  }

  return (
    <MessageThread {...{ makeOnSelect, messages, onSelect }} />
  )
}

export default Conversation;