import * as R from 'ramda'
import React from 'react'

let n = 0

function Spanify({ children }) {
  const [state] = React.useState(n++)

  const contents = recursivelyCreateSpans(children, [state])

  return (
    <span id={generateSensibleId([state])}>
      {contents}
    </span>
  )
}

const recursivelyCreateSpans = (children, path = []) => {
  if (typeof children === "string") {
    return children.split('').map((l, idx) => {
      const id = generateSensibleId(path, idx)
      return <span key={id} id={id}>{l}</span>
    })
  }

  if (React.isValidElement(children)) {
    const ElementType = children.type
    return (
      <ElementType id={generateSensibleId(path)} >
        {recursivelyCreateSpans(children.props.children, [...path])}
      </ElementType>
    )
  }

  if (Array.isArray(children)) {
    return React.Children.map(children, (child, idx) => {
      return recursivelyCreateSpans(child, [...path, idx])
    })
  }
}

const generateSensibleId = (path, idx) => {
  return `spanify-${[...path, idx].filter(R.complement(R.isNil)).join('-')}`
}

export default Spanify