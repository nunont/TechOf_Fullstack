import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {


PATH = 'http://localhost:3000/users';
httpOptions = {
  headers: {
    'Content-Type': 'application/json'
  }
};

  constructor(private http : HttpClient, private router : Router) { }

  getAll(){
    return this.http.get(this.PATH);
  }

  getById(id : number){
    return this.http.get(`${this.PATH}/${id}`);
  }

  create(user : User) : Observable<User>{
    return this.http.post<User>(this.PATH, user, this.httpOptions);
  }

  update(user : any){
    return this.http.put(`${this.PATH}/${user.id}`, user);
  }

  delete(id : number){
    return this.http.delete(`${this.PATH}/${id}`);
  }

  login(email : string, password : string) : Observable<User[]>{
    return this.http.get<User[]>(`${this.PATH}?email=${email}&password=${password}`);
  }

  setLoggedUser(user : User) {
    var anyUser = user as any;
    anyUser.password = '';
    anyUser.expireDate = new Date().getTime() + 1000 * 60 * 60;
    sessionStorage.setItem('loggedUser', JSON.stringify(user));
  }

  getLoggedUser() : User {
    let loggedUser = sessionStorage.getItem('loggedUser');

    if (!loggedUser) return {} as User;;

    let user = JSON.parse(loggedUser);

    if (user.expireDate < new Date().getTime()) {
      this.router.navigate(['/login']);
      return {} as User;
    }
    else {
      return user;
    }


    return user;
  }
}
