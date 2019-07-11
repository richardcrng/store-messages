import * as R from 'ramda'
import React from 'react';
import useSelection from '../useSelection/useSelection';

function useSelectionRange({ selectionProvided } = {}) {
  const selectionHook = useSelection()
  const selection = R.defaultTo(selectionHook, selectionProvided)

  const [range, setRange] = React.useState(getRangeFrom(selection))
  
  // Used to force refresh components hooked in
  //  when selectionchange event fires
  //  (since the Selection object itself does not update)
  const [num, setNum] = React.useState(0)   // eslint-disable-line

  const updateRange = React.useCallback(() => {
    const newRange = getRangeFrom(selection)
    setRange(newRange)    // typically it's the same object
    setNum(n => n + 1)           // forces the re-render
  }, [selection, setRange, setNum])

  React.useEffect(() => {
    document.addEventListener('selectstart', updateRange)
    document.addEventListener('selectionchange', updateRange)

    return function cleanup() {
      document.removeEventListener('selectstart', updateRange)
      document.removeEventListener('selectionchange', updateRange)
    }
  }, [updateRange])

  return range
}

const getRangeFrom = selection => {
  return selection && selection.rangeCount
    ? selection.getRangeAt(0)
    : null
}


export default useSelectionRange