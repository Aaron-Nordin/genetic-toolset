//---------------------------INTITIAL STATE-------------------------------

const initialState = {
  userId: null,
  username: "",
  email: "",
  userImage: "",
  bannerImageHeight: null,
  navbarHeight: null,
  showRegisterComp: false,
  selectedGene: []
};

//---------------------------ACTION CONSTANTS-----------------------------

const SET_USER = "SET_USER";
const LOGOUT_USER = "LOGOUT_USER";
const UPDATE_BANNER_HEIGHT = "UPDATE_BANNER_HEIGHT";
const UPDATE_NAV_HEIGHT = "UPDATE_NAV_HEIGHT";
const SET_SELECTED_GENE = "SELECTED_GENE";
const SHOW_REGISTER_COMP = "SHOW_REGISTER_COMP";

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

export function showRegisterCompFn(showRegisterCompBool) {
  return {
    type: SHOW_REGISTER_COMP,
    payload: showRegisterCompBool
  };
}

export function setSelectedGene(gene) {
  return {
    type: SET_SELECTED_GENE,
    payload: gene
  };
}

export function updateBannerHeight(height) {
  return {
    type: UPDATE_BANNER_HEIGHT,
    payload: height
  };
}

export function updateNavHeight(height) {
  return {
    type: UPDATE_NAV_HEIGHT,
    payload: height
  };
}

//-------------------------------REDUCER---------------------------------

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGOUT_USER:
      return initialState;
    case SHOW_REGISTER_COMP:
      return { ...state, showRegisterComp: payload };
    case SET_SELECTED_GENE:
      return { ...state, selectedGene: payload };
    case SET_USER:
      const { userId, username, email, userImage } = payload;
      return { ...state, userId, username, email, userImage };
    case UPDATE_BANNER_HEIGHT:
      return { ...state, bannerImageHeight: payload };
    case UPDATE_NAV_HEIGHT:
      return { ...state, navbarHeight: payload };
    default:
      return state;
  }
};
