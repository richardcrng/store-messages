import * as R from 'ramda'
import React from 'react';
import Spanify from '../Spanify';
import Message from '../Message';

function SpanifiedMessage({ children, sender, text }) {
  return (
    <Message {...{ sender, text }}>
      <Spanify>
        {R.defaultTo(text, children)}
      </Spanify>
    </Message>
  )
}

export default SpanifiedMessage;