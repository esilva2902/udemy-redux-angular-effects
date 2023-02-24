import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadUsers = createAction('[Users] Load Users');

export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersError = createAction(
  '[Users] Load Users Error',
  props<{ payload: any }>()
);

export const getUser = createAction(
  '[Users] Get User',
  props<{ id: string }>()
);

export const getUserSuccess = createAction(
  '[Users] Get User Success',
  props<{ user: User }>()
);

export const getUserError = createAction(
  '[Users] Get User Error',
  props<{ payload: any }>()
);
