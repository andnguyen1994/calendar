import React from 'react'
import styled from 'styled-components'
import { colors } from 'Data'

const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.63);
  position: fixed;
  z-index: 10;
  /* display: ${props => (props.showModal ? 'flex' : 'none')}; */
  display:flex;
  justify-content: center;
  align-items: center;
`

const FormContainer = styled.div`
  background: white;
  height: 25%;
  width: 25%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 20;
  
`

const DivBackground = styled.div`
  position:fixed;
  height: 100%;
  width: 100%;
  z-index:15;
`

const InputForm = styled.input`
  border: 1px solid ${props => (props.error ? 'red' : 'black')};
`
const ColorSelect = styled.select`
  background-color: ${props => props.color};
`

const ColorOption = styled.option`
  background-color: ${props => props.color};
`

const ModalInput = props => {
  const options = colors.map(color => (
    <ColorOption key={color} value={color} color={color} />
  ))

  return (
    <ModalContainer>
      <DivBackground onClick={props.toggleModal} />
      <FormContainer>
        <h1>{props.date.month}/{props.date.day}/{props.date.year}</h1>
        <form onSubmit={props.handleSubmit}>
          <ColorSelect
            value={props.color}
            onChange={props.handleChangeColor}
            color={props.color}
          >
            {options}
          </ColorSelect>
          <InputForm
            type='text'
            value={props.message}
            onChange={props.handleChangeMessage}
            error={props.error}
          />
          <input
            type='time'
            value={props.time}
            onChange={props.handleChangeTime}
          />
        </form>
      </FormContainer>

    </ModalContainer>
  )
}

export default ModalInput
