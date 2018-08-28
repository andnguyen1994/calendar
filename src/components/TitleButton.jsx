import React, { Component } from 'react'
import styled from 'styled-components'

const TitleButton = props => {
  return (
    <button onClick={props.handleClick}>
      {props.next ? 'Next' : 'Previous'}
    </button>
  )
}

export default TitleButton
