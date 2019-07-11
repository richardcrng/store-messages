import React from 'react';
import classes from './MessageText.module.css';
import MessageCharacter from '../../atoms/MessageCharacter';
import useSelectionRange from '../../../hooks/useSelectionRange';
import { useMessageId } from '../../organisms/Message';
import { useMessageThreadContext } from '../../templates/MessageThread';
import usePrevious from '../../../hooks/usePrevious';

function MessageText({ children = '' }) {
  const messageId = useMessageId()
  const ref = React.useRef()
  const { onSelect } = useMessageThreadContext()

  const range = useSelectionRange()
  const rangeContents = range ? range.cloneContents() : { children: [] }
  const prevContents = usePrevious(rangeContents)

  React.useEffect(() => {
    if (range) {
      // Check to see if length of contents has actually changed
      if (rangeContents.children.length !== prevContents.children.length) {
        const { commonAncestorContainer: container } = range;
        if (container === ref.current) {
          const timeoutHandler = onSelect({ container, messageId, range })
          return function cleanup() {
            clearTimeout(timeoutHandler)
          }
        }
      }
    }
  }, [range, ref, onSelect])

  return (
    <span className={classes.MessageText} ref={ref}>
      {children.split('').map((character, index) => (
        <MessageCharacter key={index} {...{ character, index }} />
      ))}
    </span>
  )
}

export default MessageText;