import { GET_LIST } from "./action-type";

const INITIAL_STATE = {
  list: []
}

const broadcast = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        list: action.list
      }
    default:
      return state
  }
}
export default broadcast
