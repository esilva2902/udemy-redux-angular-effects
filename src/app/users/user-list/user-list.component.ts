import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { User } from 'src/app/models/user.model';
import { AppState } from 'src/app/store/app.reducers';
import * as usersActions from '../../store/actions';

//import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],

  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {

  error$: Observable<any>;
  isLoading$: Observable<boolean>;
  users$: Observable<User[]>;

  constructor(private store: Store<AppState>) {
    this.error$ = of(null);
    this.isLoading$ = of(false);
    this.users$ = of([ ]);
  }

  ngOnInit(): void {
    // The traditional way:
    // this.users$ = this.userService.getUsers(6).pipe((
    //   tap(users => console.log(users))
    // ));

    // Is loading?:
    this.isLoading$ = this.store.select(appState => appState.usersState.loading);

    // Listen for the new state of users:
    this.users$ = this.store.select(appState => appState.usersState.users);

    // Is there an error?:
    this.error$ = this.store.select(appState => appState.usersState.error);

    // Using the Store with Effects:
    this.store.dispatch(usersActions.loadUsers())
  }
}
