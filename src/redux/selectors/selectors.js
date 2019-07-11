import { createSelector } from "reselect";

export const getMessages = state => state.messages
export const getMessagesEmpty = createSelector(
  getMessages,
  messages => Object.keys(messages).reduce(
    (acc, val) => ({ ...acc, [val]: {} }),
    {}
  )
)

export const getSnippets = state => state.snippets

export const getSnippetsHighlightedCharacters = createSelector(
  getMessagesEmpty,
  getSnippets,
  (emptyMessages, snippets) => Object.values(snippets).reduce(
    (acc, { message, index: { start, end } }) => {
      const indexDict = [...Array(end - start).keys()]
        .map(n => parseInt(n) + parseInt(start))
        .reduce((accDict, n) => ({ ...accDict, [n]: true }), {})
      return {
        ...acc,
        [message]: { ...acc[message], ...indexDict }
      }
    },
    emptyMessages
  )
)