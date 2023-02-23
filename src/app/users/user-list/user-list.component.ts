import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],

  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private userService: UserService) {
    this.users$ = of([ ]);
  }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers(6).pipe((
      tap(users => console.log(users))
    ));
  }
}
