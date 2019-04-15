import {SHOW_MODAL, HIDE_MODAL} from "../constants";

export const loadModal = modalType => ({
  type: SHOW_MODAL,
  payload: modalType
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});

