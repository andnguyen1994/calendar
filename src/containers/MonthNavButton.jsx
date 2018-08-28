import React, { Component } from 'react'
import CurrentMonth from 'actions/CurrentMonth'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
  return {
    setMonth: (year, month, start) =>
      dispatch(CurrentMonth('SET', year, month, start))
  }
}

const mapStateToProps = state => {
  return {
    month: state.CurrentMonth.month,
    year: state.CurrentMonth.year
  }
}

function MonthNav (WrappedComponent) {
  class MonthNavButton extends Component {
    constructor (props) {
      super(props)
      this.state = {}
    }

    handleClick = e => {
      e.preventDefault()
      let month = null
      let year = this.props.year
      if (this.props.next) {
        month = this.props.month + 1
        if (month > 11) {
          month = 0
          year = this.props.year + 1
        }
      } else {
        month = this.props.month - 1
        if (month < 0) {
          month = 11
          year = this.props.year - 1
        }
      }
      let start = new Date(year, month, 1).getDay()
      this.props.setMonth(year, month, start)
    }

    render () {
      return (
        <WrappedComponent
          handleClick={this.handleClick}
          next={this.props.next}
        />
      )
    }
  }
  return connect(mapStateToProps, mapDispatchToProps)(MonthNavButton)
}

export default MonthNav
