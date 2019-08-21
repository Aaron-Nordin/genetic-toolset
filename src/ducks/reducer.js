//---------------------------INTITIAL STATE-------------------------------

const initialState = {
  userId: null,
  username: "",
  email: "",
  userImage: "",
  bannerImageHeight: null,
  navbarHeight: null,
  selectedGene: []
};

//---------------------------ACTION CONSTANTS-----------------------------

const SET_USER = "SET_USER";
const LOGOUT_USER = "LOGOUT_USER";
const UPDATE_BANNER_HEIGHT = "UPDATE_BANNER_HEIGHT";
const UPDATE_NAV_HEIGHT = "UPDATE_NAV_HEIGHT";
const SET_SELECTED_GENE = "SELECTED_GENE";

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

export function setSelectedGene(gene) {
  return {
    type: SET_SELECTED_GENE,
    payload: gene
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
    case UPDATE_BANNER_HEIGHT:
      return { ...state, bannerImageHeight: payload };
    case UPDATE_NAV_HEIGHT:
      return { ...state, navbarHeight: payload };
    case SET_SELECTED_GENE:
      return { ...state, selectedGene: payload };
    default:
      return state;
  }
};
