//INTITIAL STATE
const initialState = {
  username: "",
  email: "",
  userImage: ""
};

//ACTION CONSTANTS
const SET_USER = "SET_USER";

//ACTION BUILDERS
export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}

//REDUCER

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      const { username, email, userImage } = payload;
      return { ...state, username, email, userImage };
    default:
      return state;
  }
};
