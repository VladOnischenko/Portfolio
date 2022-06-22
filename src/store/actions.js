import { CHANGE_FIRST_NAME, CHANGE_SECOND_NAME } from './types'

export const changeFirstName = (firstName) => {
  return {
    type: CHANGE_FIRST_NAME,
    payload: firstName
  }
}
export const changeSecondName = (secondName) => {
  return {
    type: CHANGE_SECOND_NAME,
    payload: secondName
  }
}
