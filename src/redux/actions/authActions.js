import axios from "axios";
import setAuthToken from "../../helpers/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  AUTH_ERRORS,
  SET_CURRENT_USER,
  CLEAR_ERRORS,
  IS_REGISTERING
} from "./types";
import config from "../../config";

// check token existence in localstorage and act accordingly
export const checkAuthState = () => dispatch => {
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decoded = jwt_decode(localStorage.jwtToken);
    const currentTime = Date.now() / 1000;

    dispatch(setCurrentUser(localStorage.user));

    if (decoded.exp < currentTime) {
      dispatch(logoutUser());
      dispatch(setCurrentUser({}));
      window.location.href = "/login";
    }
  }
};

// Register User
export const registerUser = userData => dispatch => {
  dispatch(setRegStatus());
  axios
    .post(`${config.Urls.base}/auth/local/register`, userData)
    .then(res => {
      const { jwt, user } = res.data;
      localStorage.setItem("jwtToken", jwt);
      localStorage.setItem("user", JSON.stringify(user));

      setAuthToken(jwt);

      // const decoded = jwt_decode(jwt);

      dispatch(setCurrentUser(user));
    })
    .catch(err => {
      dispatch({
        type: AUTH_ERRORS,
        payload: err.response.data.message[0].messages[0].message
      });
    });
};

export const loginUser = userData => dispatch => {
  dispatch(setRegStatus());
  axios
    .post(`${config.Urls.base}/auth/local`, userData)
    .then(res => {
      const { jwt, user } = res.data;
      localStorage.setItem("jwtToken", jwt);
      localStorage.setItem("user", JSON.stringify(user));

      setAuthToken(jwt);
      dispatch(setCurrentUser(user));
    })
    .catch(err => {
      dispatch({
        type: AUTH_ERRORS,
        payload: err.response.data.message[0].messages[0].message
      });
    });
};

// Set logged in user
export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  console.log("got here");
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("user");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

export const clearSignupError = () => {
  return {
    type: CLEAR_ERRORS
  };
};
export const setRegStatus = () => {
  return {
    type: IS_REGISTERING
  };
};
