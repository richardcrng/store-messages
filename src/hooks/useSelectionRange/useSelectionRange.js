import * as R from 'ramda'
import useSelection from '../useSelection/useSelection';

function useSelectionRange({ selectionProvided } = {}) {
  const selectionHook = useSelection()

  const selection = R.defaultTo(selectionHook, selectionProvided)

  return selection && selection.rangeCount
    ? selection.getRangeAt(0)
    : null
}

export default useSelectionRange