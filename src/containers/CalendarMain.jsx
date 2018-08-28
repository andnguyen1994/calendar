import React, { Component } from 'react'
import styled from 'styled-components'
import LabelContainer from 'containers/LabelContainer'
import CalendarBody from 'containers/CalendarBody'
import TitleBar from 'containers/TitleBar'
import ModalContainer from 'containers/ModalContainer'

const Calendar = styled.div`
  display: grid;
  grid-gap:2px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 50px 50px auto;
  grid-template-areas: "header header header header header header header"
  'label label label label label label label'
  'body body body body body body body'
;


  height: 100vh;
`

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <React.Fragment>
        <ModalContainer />
        <Calendar><TitleBar /><LabelContainer /><CalendarBody /></Calendar>
      </React.Fragment>
    )
  }
}

export default Main
