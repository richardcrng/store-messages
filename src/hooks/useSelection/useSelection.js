import React from 'react'

function useSelection() {
  // Stores a Selection object
  // https://developer.mozilla.org/en-US/docs/Web/API/Selection 
  const [selection, setSelection] = React.useState(document.getSelection())

  // Used to force refresh components hooked in
  //  when selectionchange event fires
  //  (since the Selection object itself does not update)
  const [num, setNum] = React.useState(0) // eslint-disable-line

  const updateSelection = React.useCallback(() => {
    const newSelection = document.getSelection()
    setSelection(newSelection)    // typically it's the same object
    setNum(n => n + 1)           // forces the re-render
  }, [setSelection, setNum])

  React.useEffect(() => {
    document.addEventListener('selectstart', updateSelection)
    document.addEventListener('selectionchange', updateSelection)

    return function cleanup() {
      document.removeEventListener('selectstart', updateSelection)
      document.removeEventListener('selectionchange', updateSelection)
    }
  }, [updateSelection])

  return selection
}

export default useSelection