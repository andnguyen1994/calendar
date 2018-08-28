import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Day from 'containers/DayContainer'
import { monthDays } from 'Data'

const Grid = styled.div`
  background-color: navy;
  height:100%;
  grid-area: body;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
`

const mapStateToProps = state => {
  return {
    month: state.CurrentMonth.month,
    start: state.CurrentMonth.start,
    year: state.CurrentMonth.year
  }
}

class CalendarBody extends Component {
  constructor (props) {
    super(props)
    this.state = {
      squares: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34
      ]
    }
  }

  getDate = (val, start) => {
    const dif = val - start

    if (dif >= 0 && dif < monthDays[this.props.month]) {
      // need to add leap year
      return dif + 1
    } else {
      return 0
    }
  }

  render () {
    const items = this.state.squares.map(val => (
      <Day
        key={val}
        date={this.getDate(val, this.props.start)}
        month={this.props.month}
        year={this.props.year}
      />
    ))
    return (
      <Grid>
        {items}
      </Grid>
    )
  }
}

const ConnectedCalendarBody = connect(mapStateToProps)(CalendarBody)

export default ConnectedCalendarBody
