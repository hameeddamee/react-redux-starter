import isEmpty from "../../helpers/is-empty";

import {
  SET_CURRENT_USER,
  AUTH_ERRORS,
  CLEAR_ERRORS,
  IS_REGISTERING
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  isRegistering: false,
  errorMsg: null,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        isRegistering: false
      };
    case AUTH_ERRORS:
      return { ...state, errorMsg: action.payload, isRegistering: false };
    case CLEAR_ERRORS:
      return { ...state, errorMsg: "" };
    case IS_REGISTERING:
      return { ...state, isRegistering: true };
    default:
      return state;
  }
}
