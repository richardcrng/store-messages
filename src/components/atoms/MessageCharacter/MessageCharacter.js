import React from 'react';

function MessageCharacter({ character, highlighted = false }) {
  return (
    <span>{character}</span>
  )
}

export default MessageCharacter;