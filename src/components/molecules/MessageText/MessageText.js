import React from 'react';
import classes from './MessageText.module.css';
import MessageCharacter from '../../atoms/MessageCharacter';
import useSelectionRange from '../../../hooks/useSelectionRange';
import { useMessageId } from '../../organisms/Message';
import { useMessageThreadContext } from '../../templates/MessageThread';
import useSelection from '../../../hooks/useSelection';

function MessageText({ children }) {
  const messageId = useMessageId()
  const ref = React.useRef()
  const { onSelect } = useMessageThreadContext()

  const range = useSelectionRange()
  const selection = useSelection()

  React.useEffect(() => {
    if (range) {
      // Check to see if length of contents has actually changed
      const { commonAncestorContainer: container } = range;
      if (container === ref.current) {
        const timeoutHandler = onSelect({ container, messageId, range, selection })
        return function cleanup() {
          clearTimeout(timeoutHandler)
        }
      }
    }
  }, [ messageId, onSelect, range, ref, selection ])

  return (
    <span className={classes.MessageText} ref={ref}>
      {children.split('').map((character, index) => (
        <MessageCharacter key={index} {...{ character, index }} />
      ))}
    </span>
  )
}

export default MessageText;