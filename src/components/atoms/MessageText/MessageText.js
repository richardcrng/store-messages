import React from 'react';
import classes from './MessageText.module.css';

function MessageText({ children }) {
  return (
    <span className={classes.MessageText}>
      {children}
    </span>
  )
}

export default MessageText;