import { RootState } from '..';

export function selectAuth(state: RootState) {
  return state.auth;
}

export function authLoading(state: RootState) {
  return state.auth.request.status === 1;
}

export function authLoaded(state: RootState) {
  return state.auth.request.status === 2;
}

export function authFailure(state: RootState) {
  return state.auth.request.error;
}
