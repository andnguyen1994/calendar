import React, { Component } from 'react'
import styled from 'styled-components'

const DayBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  background-color: ${props => (props.date ? 'white' : 'lightgrey')};
`

const Add = styled.button`
  align-self: flex-end;
`

const EventBox = styled.p`
  display: flex;
  justify-content: space-between;
  color: ${props => props.color};
`

const CalendarDay = props => {
  const { date, handleClick, reminders } = props

  let displayEvents = ''
  if (reminders) {
    displayEvents = reminders.map((i, index) => (
      <EventBox key={i.index} color={i.color}>
        {i.message + ' at ' + i.time}
        <button onClick={props.handleRemove(index)}>-</button>
      </EventBox>
    ))
  }
  return (
    <DayBox date={date}>
      <p>{date || null}</p>
      {displayEvents}
      {date ? <Add onClick={handleClick}>+</Add> : null}
    </DayBox>
  )
}

export default CalendarDay
