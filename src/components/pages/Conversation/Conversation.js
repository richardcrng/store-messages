import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MessageThread from '../../templates/MessageThread';
import actions from '../../../redux';
import generatePushID from '../../../utils/generatePushID';
import selectors from '../../../redux/selectors';

function Conversation() {
  const dispatch = useDispatch()
  const messages = useSelector(selectors.getMessages)
  const highlightedCharacters = useSelector(selectors.getSnippetsHighlightedCharacters)

  const onSelect = ({ callback, container, messageId, range, selection }) => {
    const timeoutHandle = setTimeout(() => {
      const containedSpans = range.cloneContents().children
      const [startIdx, endIdx] = [containedSpans[0], containedSpans[containedSpans.length - 1]]
        .map(span => parseInt(span.id.split('-')[2]))
      const snippetId = generatePushID()
      selection.empty()
      dispatch(actions.snippets.create.set(snippetId, {
        id: snippetId,
        message: messageId,
        index: {
          start: startIdx,
          end: endIdx + 1   // for some reason selection range seems to cut off the last character
        }
      }))
      typeof callback === 'function' && callback()
      window.alert('snippet saved!')
    }, 100);
    return timeoutHandle
  }

  return (
    <MessageThread {...{ highlightedCharacters, messages, onSelect }} />
  )
}

export default Conversation;