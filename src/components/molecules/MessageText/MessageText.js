import React from 'react';
import classes from './MessageText.module.css';
import MessageCharacter from '../../atoms/MessageCharacter';
import useSelectionRange from '../../../hooks/useSelectionRange';
import { useMessageId } from '../../organisms/Message';
import { useMessageThreadContext } from '../../templates/MessageThread';

function MessageText({ children = '' }) {
  const messageId = useMessageId()
  const ref = React.useRef()
  const { onSelect } = useMessageThreadContext()

  const range = useSelectionRange()

  React.useEffect(() => {
    if (range) {
      const { commonAncestorContainer: container } = range;
      if (container === ref.current) {
        onSelect({ container, messageId, range })
      }
    }
  })

  return (
    <span className={classes.MessageText} ref={ref}>
      {children.split('').map((character, index) => (
        <MessageCharacter key={index} {...{ character, index }} />
      ))}
    </span>
  )
}

export default MessageText;