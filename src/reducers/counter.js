import * as types from "../actions/ActionTypes";

const initialState = {
  number: 0,
  dummy: 'dummy',
  dummyObject: {
    f: 0,
    t: 1
  }
}

export default function counter(state = initialState, action) {

  switch(action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1,
        dummyObject: {...state.dummyObject, f: 1}
      }
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      }
    default:
      return state;
  }

}
