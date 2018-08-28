import { combineReducers } from 'redux'
import CurrentMonth from 'reducers/CurrentMonth'
import CalendarEvent from 'reducers/CalendarEvents'
import ModalStatus from 'reducers/ModalStatus'

export default combineReducers({
  CurrentMonth,
  CalendarEvent,
  ModalStatus
})
