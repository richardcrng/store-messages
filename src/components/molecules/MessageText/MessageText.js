import React from 'react';
import classes from './MessageText.module.css';
import MessageCharacter from '../../atoms/MessageCharacter';
import useSelectionRange from '../../../hooks/useSelectionRange';
import { useMessageId } from '../../organisms/Message';

function MessageText({ children = '' }) {
  const id = useMessageId()
  const ref = React.useRef()

  const range = useSelectionRange()

  React.useEffect(() => {
    if (range) {
      const { commonAncestorContainer: container } = range;
      if (container === ref.current) {
        console.log(`found selection in message id ${id}`)
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