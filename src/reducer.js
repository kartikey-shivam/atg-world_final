import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  groupStatus: false,
  signPage: false,
  signinStatus: false,
};

export const customReducer = createReducer(initialState, {
  updateGroupStatus: (state, action) => {
    state.groupStatus = !state.groupStatus;
    state.signPage = true;
  },
  updateSignStatus: (state, action) => {
    state.signinStatus = !state.signinStatus;
  },
  closeHandler: (state, action) => {
    state.signPage = false;
    state.signinStatus = false;
  },
  updateSignPage: (state, action) => {
    state.signPage = !state.signPage;
  },
});
