import React, { Component } from 'react'
import styled from 'styled-components'
import MonthNav from 'containers/MonthNavButton'
import TitleButton from 'components/TitleButton'
import { connect } from 'react-redux'
import { monthNames } from 'Data'

const Bar = styled.div`
  grid-area: header;
  display:flex;
  justify-content:space-between;
`

const MonthNavButton = MonthNav(TitleButton)

const mapStateToProps = state => {
  return {
    month: state.CurrentMonth.month,
    year: state.CurrentMonth.year
  }
}

class TitleBar extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const month = monthNames[this.props.month]
    const year = this.props.year

    return (
      <Bar>
        <MonthNavButton />
        <h1>{month} {year}</h1>
        <MonthNavButton next={1} />
      </Bar>
    )
  }
}

export default connect(mapStateToProps)(TitleBar)
