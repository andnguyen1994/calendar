const setEvent = (type, year, month, day, message, time, color, index) => ({
  type: type,
  payload: {
    year: year,
    month: month,
    day: day,
    message: message,
    time: time,
    color: color,
    index: index
  }
})

export default setEvent
