const initialState = {
  modalState: false,
  year: null,
  month: null,
  day: null
}

const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MODAL_ON':
      return {
        ...state,
        modalState: true,
        year: action.payload.year,
        month: action.payload.month,
        day: action.payload.day
      }
    case 'MODAL_OFF':
      return { ...state, modalState: false, year: null, month: null, day: null }
    default:
      return state
  }
}

export default ModalReducer
