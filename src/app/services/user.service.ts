import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://reqres.in/api';
  }

  getUsers(qtyPerPage: number): Observable<User[]> {
    const url = `${this.baseUrl}/users?per_page=${qtyPerPage}`;
    return this.httpClient.get<any>(url).pipe(
      map(response => response['data'] as User[]),
      delay(2000)
    );
  }

  getUser(id: string): Observable<User> {
    const url = `${this.baseUrl}/users/${id}`;
    return this.httpClient.get<any>(url).pipe(
      map(response => response['data'] as User)
    );
  }
}
