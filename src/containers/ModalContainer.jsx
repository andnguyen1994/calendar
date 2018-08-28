import React, { Component } from 'react'
import { connect } from 'react-redux'
import { modalStatus } from 'actions/index'
import ModalInput from 'components/ModalInput'
import setEvents from 'actions/CalendarEvents'

const mapStateToProps = state => {
  return {
    ...state.ModalStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setModal: () => dispatch(modalStatus('MODAL_OFF')),
    setEvent: (year, month, day, message, time, color) =>
      dispatch(setEvents('SET_EVENT', year, month, day, message, time, color))
  }
}

class ModalContainer extends Component {
  constructor (props) {
    super(props)
    this.state = { message: 'hello', time: '00:00', color: 'blue' }
  }

  handleChangeMessage = e => {
    e.preventDefault()
    this.setState({ message: e.target.value })
  }

  handleChange = type => e => {
    e.preventDefault()
    let newState = {}
    newState[type] = e.target.value
    this.setState(newState)
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.message.length > 30) {
      this.setState({ error: true })
    } else {
      this.props.setEvent(
        this.props.year,
        this.props.month,
        this.props.day,
        this.state.message,
        this.state.time,
        this.state.color
      )
      this.props.setModal()
      this.setState({ error: false })
    }
  }

  render () {
    return (
      this.props.modalState &&
      <ModalInput
        toggleModal={this.props.setModal}
        handleChangeMessage={this.handleChange('message')}
        handleChangeTime={this.handleChange('time')}
        handleChangeColor={this.handleChange('color')}
        message={this.props.message}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
        time={this.state.time}
        color={this.state.color}
        date={{
          year: this.props.year,
          month: this.props.month + 1,
          day: this.props.day
        }}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
