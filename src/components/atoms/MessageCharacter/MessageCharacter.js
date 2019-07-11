import React from 'react';
import { useMessageId } from '../../organisms/Message';

function MessageCharacter({ character, highlighted = false, index }) {
  const id = useMessageId()

  return (
    <span id={`MessageCharacter-${id}-${index}`}>
      {character}
    </span>
  )
}

export default MessageCharacter;