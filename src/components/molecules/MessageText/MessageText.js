import React from 'react';
import classes from './MessageText.module.css';
import MessageCharacter from '../../atoms/MessageCharacter';

function MessageText({ children = '' }) {
  return (
    <span className={classes.MessageText}>
      {children.split('').map((character, index) => (
        <MessageCharacter key={index} character={character} />
      ))}
    </span>
  )
}

export default MessageText;