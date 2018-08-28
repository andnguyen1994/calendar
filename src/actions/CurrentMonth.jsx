const currentMonth = (type, year, month, start) => ({
  type: type,
  payload: { month: month, year: year, start: start }
})

export default currentMonth
