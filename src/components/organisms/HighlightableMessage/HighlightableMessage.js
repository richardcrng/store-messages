import * as R from 'ramda'
import React from 'react';
import SpanifiedMessage from '../SpanifiedMessage';
import useSelection from '../../../hooks/useSelection';
import highlight from '../../../utils/highlight';

function HighlightableMessage({ children, sender, text }) {
  const selection = useSelection()

  React.useEffect(() => {
    if (selection) highlight(selection)
  })

  return (
    <SpanifiedMessage sender={sender}>
      {R.defaultTo(text, children)}
    </SpanifiedMessage>
  )
}

export default HighlightableMessage;