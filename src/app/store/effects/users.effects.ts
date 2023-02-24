import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from 'rxjs';

import * as usersActions from '../actions';
import { UserService } from "src/app/services/user.service";

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private usersService: UserService) {

    }

  loadusers$ = createEffect(
    () => this.actions$.pipe(
      ofType(usersActions.loadUsers),
      switchMap(() =>
        this.usersService.getUsers(6).pipe(
          map(users => usersActions.loadUsersSuccess({ users })),
          catchError(error => of(usersActions.loadUsersError({ payload: error })))
        )
      )
    )
  );

  getUser$ = createEffect(() => this.actions$.pipe(
    ofType(usersActions.getUser),
    switchMap(action =>
      this.usersService.getUser(action.id).pipe(
        map(user => usersActions.getUserSuccess({ user })),
        catchError(error => of(usersActions.getUserError({ payload: error })))
      )
    )
  ));
}
