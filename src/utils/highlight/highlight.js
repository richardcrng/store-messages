function highlight(selection) {
  if (selection) {
    const range = selection && selection.rangeCount
      ? selection.getRangeAt(0)
      : null

    if (range) highlightRange(range, selection)
  }
}

const domChildrenOf = (elementOrFragment) => {
  const arr = Array.from(elementOrFragment.children)
  return arr.map(({ id }) => document.querySelector(`#${id}`))
}

const highlightRange = (range, selection) => {
  // const { startContainer, endContainer } = range

  // const arr = [startContainer, endContainer]

  // arr.forEach(node => {
  //   highlightTextNodeIfInRange(node, range)
  // })

  const domChildren = domChildrenOf(range.cloneContents())
  highlightSelectedElements(domChildren, selection, true)
}

const highlightElement = target => {
  target.style.backgroundColor = "#5ac8fa"
}

const highlightSelectedElements = (arrOfElements, selection, override = false) => {
  arrOfElements.forEach(ele => {
    if (ele.id) {
      const target = document.querySelector(`#${ele.id}`)
      if (shouldHighlight(target, selection, override)) {
        // console.log("gonna highlight", ele)
        highlightElement(target)
      }
      if (target.children) {
        highlightSelectedElements(Array.from(target.children), selection)
      }
    }
  })
}

const highlightTextNodeIfInRange = (node, range) => {
  if (node.nodeType === Node.TEXT_NODE) {
    const selectedElements = Array.from(range.cloneContents().children)
    console.log(node, "selectedElements", selectedElements)
  }
}

const shouldHighlight = (target, selection, override) => {
  const isContainedSpan = target.nodeName === "SPAN"
    && (override || targetIsInSelection(target, selection))

  return isContainedSpan || target.nodeType === Node.TEXT_NODE
}

const targetIsInSelection = (target, selection) => (
  selection && selection.containsNode(target)
)

export default highlight