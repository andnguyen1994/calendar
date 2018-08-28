import React, { Component } from 'react'
import styled from 'styled-components'
import { dates } from 'Data'

const Day = styled.div`
  background-color:lightgray;
  text-align:center;
  vertical-align:center;
  height: 100%;
`

const Weekday = props => {
  const { val } = props
  return (
    <Day>
      <p>
        {dates[val - 1]}
      </p>
    </Day>
  )
}

export default Weekday
