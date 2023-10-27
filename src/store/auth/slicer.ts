/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, api } from '..';

const initialState = {
  authed: false,
  request: {
    status: 0,
    error: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    pending: state => {
      state.request.status = 1;
      state.request.error = null;
    },
    loaded: (state, { payload }) => {
      state.authed = payload;
      state.request.status = 2;
    },
    failure: (state, { payload }) => {
      state.request.error = payload;
      state.request.status = 3;
    },
    clear: state => {
      state.authed = false;
      state.request.status = 0;
      state.request.error = null;
    },
  },
});

const { pending, loaded, failure, clear } = authSlice.actions;
export default authSlice.reducer;

export const sendTelNumber = (number: string) => async (dispatch: AppDispatch) => {
  dispatch(pending());

  try {
    const req = await new Promise((res, err) =>
      setTimeout(() => res({ number, status: 'ok' }), 500),
    );

    const data = req as any;
    console.log(data);

    if (data?.status === 'ok') {
      dispatch(loaded(true));
    } else dispatch(clear());
    //
  } catch (err) {
    console.log(err);
    dispatch(failure(err));
  }
};
