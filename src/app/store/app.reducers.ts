import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
  usersState: reducers.UsersState,
  userState: reducers.UserState
};

export const appReducers: ActionReducerMap<AppState> = {
  usersState: reducers.usersReducer,
  userState: reducers.userReducer
};

