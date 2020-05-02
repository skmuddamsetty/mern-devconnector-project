import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];
export default function (state = initialState, action) {
  // destructuring the action object
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      // adds a new alert to the array
      return [...state, payload];
    case REMOVE_ALERT:
      // removes an alert based on the id
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
