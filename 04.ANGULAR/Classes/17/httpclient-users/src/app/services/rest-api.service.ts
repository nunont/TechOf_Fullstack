import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  URL = "http://localhost:3000/";

  httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  constructor(private http : HttpClient) { }

  getUsers() : Observable<User[]> {
    let allUsers = this.http.get<User[]>(URL + 'users');
    return allUsers;
  }

  createUser(user : User) : Observable<User> {
    return this.http.post<User>(
      URL + 'users',
      JSON.stringify(user),
      this.httpOptions
    );
  }

  getUser(id : string) : Observable<User> {
    return this.http.get<User>(URL + 'users/' + id);
  }

  deleteUser(id : string) {
    return this.http.delete<User>(URL + 'users/' + id);
  }

  updateUser(id : string, user : User) : Observable<User> {
    return this.http.put<User>(
      URL + 'users/' + id, 
      JSON.stringify(user), 
      this.httpOptions
    );
  }

}
