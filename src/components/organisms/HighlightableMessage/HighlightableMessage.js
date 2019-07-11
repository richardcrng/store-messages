import * as R from 'ramda'
import React from 'react';
import SpanifiedMessage from '../SpanifiedMessage';
import useSelection from '../../../hooks/useSelection';
import { useMessageThreadContext } from '../../templates/MessageThread/MessageThread';

function HighlightableMessage({ children, sender, text }) {
  const { onSelect } = useMessageThreadContext()
  const selection = useSelection()

  React.useEffect(() => {
    if (selection && typeof onSelect === 'function') onSelect() 
  })

  return (
    <SpanifiedMessage sender={sender}>
      {R.defaultTo(text, children)}
    </SpanifiedMessage>
  )
}

export default HighlightableMessage;