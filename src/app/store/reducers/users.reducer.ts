import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import * as usersActions from '../actions';

export interface UsersState {
  users: User[];
  laoded: boolean;
  loading: boolean;
  error: any
};

export const loadUsersInitialState: UsersState = {
  users: [ ],
  laoded: false,
  loading: false,
  error: null
};

export const usersReducer = createReducer(loadUsersInitialState,
  on(usersActions.loadUsers, state => ({ ...state, loading: true })),

  on(usersActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    users: [ ...users ]
  })),

  on(usersActions.loadUsersError, (state, { payload }) => ({
    ...state,
    loading: false,
    laoded: false,
    error: payload
  })),
);

/****** Get One User *****/

export interface UserState {
  id: string;
  user: User | null;
  laoded: boolean;
  loading: boolean;
  error: any
};

export const getUserInitialState: UserState = {
  id: '',
  user: null,
  laoded: false,
  loading: false,
  error: null
};

export const userReducer = createReducer(getUserInitialState,
  on(usersActions.getUser, (state, { id }) => ({ ...state, id, loading: true, error: null })),

  on(usersActions.getUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    user: { ...user },
    error: null
  })),

  on(usersActions.getUserError, (state, { payload }) => ({
    ...state,
    loading: false,
    laoded: false,
    error: payload
  })),
);
