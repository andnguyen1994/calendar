import React, { Component } from 'react'
import styled from 'styled-components'
import Day from 'components/DayLabel'

const Container = styled.div`
  display: grid;
  grid-area: label;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  align-content: contain;
  align-items: center;

`

class TitleContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <Container>
        <Day val={1} />
        <Day val={2} />
        <Day val={3} />
        <Day val={4} />
        <Day val={5} />
        <Day val={6} />
        <Day val={7} />
      </Container>
    )
  }
}

export default TitleContainer
