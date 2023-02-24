import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Store } from '@ngrx/store';

import { User } from 'src/app/models/user.model';

import * as usersActions from '../../store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],

  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  user$: Observable<User | null>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>) {

    this.user$ = of(null);
  }

  ngOnInit(): void {
    this.user$ = this.store.select(appState => appState.userState.user);

    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');

      if (id) {
        this.store.dispatch(usersActions.getUser({ id }));
      }
    });
  }
}
