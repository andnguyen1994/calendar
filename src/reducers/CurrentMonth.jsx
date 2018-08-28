const getDate = () => {
  const date = new Date()
  const month = date.getMonth()
  const year = date.getFullYear()
  const start = new Date(year, month, 1).getDay()
  return { start, month, year }
}

const initialState = {
  month: getDate().month,
  year: getDate().year,
  start: getDate().start
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET':
      return {
        ...state,
        month: action.payload.month,
        year: action.payload.year,
        start: action.payload.start
      }
    default:
      return state
  }
}
