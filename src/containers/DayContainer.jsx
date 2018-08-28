import React, { Component } from 'react'
import { connect } from 'react-redux'
import { monthDays } from 'Data'
import Day from 'components/CalendarDay'
import { modalStatus } from 'actions/index'
import setEvents from 'actions/CalendarEvents'

const mapDispatchToProps = dispatch => {
  return {
    setEvent: (type, year, month, day, index) =>
      dispatch(setEvents(type, year, month, day, '', '', '', index)),
    setModal: (set, year, month, day) =>
      dispatch(modalStatus(set, year, month, day))
  }
}

const mapStateToProps = state => {
  return {
    events: state.CalendarEvent.data
  }
}

const sortEventByTime = (a, b) => {
  const timeA = a.time
  const timeB = b.time

  return timeA > timeB
}

class DayContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  handleClick = e => {
    e.preventDefault()
    this.props.setModal(
      'MODAL_ON',
      this.props.year,
      this.props.month,
      this.props.date
    )
  }

  handleRemove = index => e => {
    e.preventDefault()
    this.props.setEvent(
      'REMOVE_EVENT',
      this.props.year,
      this.props.month,
      this.props.date,
      index
    )
  }

  render () {
    let reminders = this.props.events[
      `${this.props.year}_${this.props.month}_${this.props.date}`
    ]

    reminders = reminders ? reminders.sort(sortEventByTime) : ''

    return (
      <Day
        date={this.props.date}
        handleClick={this.handleClick}
        handleRemove={this.handleRemove}
        reminders={reminders}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DayContainer)
