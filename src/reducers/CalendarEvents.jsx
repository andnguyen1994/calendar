const initialState = {
  data: {}
}

const EventReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EVENT':
      let year = action.payload.year
      let month = action.payload.month
      let day = action.payload.day
      let content = {
        message: action.payload.message,
        time: action.payload.time,
        color: action.payload.color
      }
      let data = { ...state.data }
      if (!data[`${year}_${month}_${day}`]) {
        data[`${year}_${month}_${day}`] = []
        content.index = 0
      } else {
        let size = data[`${year}_${month}_${day}`].length
        content.index = data[`${year}_${month}_${day}`][size - 1].index + 1
      }
      data[`${year}_${month}_${day}`].push(content)
      return { ...state, data: data }
    case 'REMOVE_EVENT':
      year = action.payload.year
      month = action.payload.month
      day = action.payload.day
      data = { ...state.data }
      data[`${year}_${month}_${day}`].splice(action.payload.index, 1)
      if (action.payload.index === 0) {
        delete data[`${year}_${month}_${day}`]
      }
      return { ...state, data: data }
    default:
      return state
  }
}

export default EventReducer
