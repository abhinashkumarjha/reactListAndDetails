import { FETCH_A_POST } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_A_POST:
      return action.payload.data
  }
  return state;
}