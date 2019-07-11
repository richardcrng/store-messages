import React from 'react';
import { useMessageId } from '../../organisms/Message';
import { useMessageThreadContext } from '../../templates/MessageThread';

function MessageCharacter({ character, highlighted = false, index }) {
  const id = useMessageId()
  const { highlightedCharacters } = useMessageThreadContext()

  return (
    <span
      id={`MessageCharacter-${id}-${index}`}
      style={highlighted || highlightedCharacters[id][index] ? { backgroundColor: "#5ac8fa" } : null}
    >
      {character}
    </span>
  )
}

export default MessageCharacter;