import { createSelector } from "reselect";

export const getMessages = state => state.messages
export const getMessagesEmpty = createSelector(
  getMessages,
  messages => messages.keys().reduce(
    (acc, val) => ({ ...acc, [val]: {} }),
    {}
  )
)

export const getSnippets = state => state.snippets

export const getSnippetsHighlightedCharacters = createSelector(
  getMessagesEmpty,
  getSnippets,
  (emptyMessages, snippets) => snippets.reduce(
    (acc, { message, index: { start, end } }) => {
      const indexDict = [...Array(start - end).keys()]
        .map(n => n + start)
        .reduce((accDict, n) => ({ ...accDict, n: true }), {})
      return {
        ...acc,
        [message]: { ...acc[message], ...indexDict }
      }
    },
    emptyMessages
  )
)