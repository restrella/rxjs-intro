import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  map,
  of,
  tap,
} from 'rxjs';
import { User } from './models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  serverUrl = 'http://localhost:3000';

  subject = new Subject(); // simple observable hot observable
  behavior = new BehaviorSubject('John'); // Initial value
  replay = new ReplaySubject(4); // How many

  constructor(private http: HttpClient) {}

  // getUsers = () => {
  // return of(['Jane', 'Mike', 'Jose']).pipe(
  //   map((x: string[]) => {
  //     for (let a in x) {
  //       a = '';
  //     }
  //     return x;
  //   })
  // );
  // };

  getUsers = (): Observable<Object> => {
    return this.http.get(`${this.serverUrl}/users`);
  };
  getBooks = (): Observable<Object> => {
    return this.http.get(`${this.serverUrl}/books`);
  };

  createUser(user: User) {
    return this.http.post(`${this.serverUrl}/users`, user).pipe(
      tap((x) => {
        console.log('creating', x);
      })
    );
  }
  updateUser(user: User) {
    return this.http.put(`${this.serverUrl}/users/${user.id}`, user).pipe(
      tap((x) => {
        console.log('updating', x);
      })
    );
  }
  deleteUser(id: number) {
    return this.http.delete(`${this.serverUrl}/users/${id}`).pipe(
      tap((x) => {
        console.log('deleting', x);
      })
    );
  }
}
