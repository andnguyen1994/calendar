export const modalStatus = (type, year, month, day) => ({
  type: type,
  payload: { year: year, month: month, day: day }
})
