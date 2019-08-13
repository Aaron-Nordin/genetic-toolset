//---------------------------INTITIAL STATE-------------------------------

const initialState = {
  userId: null,
  username: "",
  email: "",
  userImage: ""
};

//---------------------------ACTION CONSTANTS-----------------------------

const SET_USER = "SET_USER";
const LOGOUT_USER = "LOGOUT_USER";

//---------------------------ACTION BUILDERS------------------------------

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER
  };
}

//-------------------------------REDUCER---------------------------------

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      const { userId, username, email, userImage } = payload;
      return { ...state, userId, username, email, userImage };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};
