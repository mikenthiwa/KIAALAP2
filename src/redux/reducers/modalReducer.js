import {SHOW_MODAL, HIDE_MODAL} from "../constants";

const initialState = {
  modalType: null
};

export default (state=initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {...initialState, modalType: action.payload};
    case HIDE_MODAL:
      return {...initialState};
    default:
      return state
  }
}