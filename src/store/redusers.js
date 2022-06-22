export const CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME'
export const CHANGE_SECOND_NAME = 'CHANGE_SECOND_NAME'

const initialState = {
  firstName: 'Oleg',
  secondName: 'Pavlov',
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIRST_NAME:
      return { ...state, firstName: action.payload}
    case CHANGE_SECOND_NAME:
      return { ...state, secondName: action.payload}
  }
  return state
}