import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  //Get All Users
  getUsers() {
    return this.http.get(`${environment.url}users`);
  }

  //Delete User
  removeUser(id) {
    this.http.delete(`${environment.url}users/${id}`).subscribe(
      res => { console.log(res) },
      err => { console.log(err) }
    )
  }

  //View One User
  getUser(id) {
    return this.http.get(`${environment.url}users/${id}`);
  }

  //Update User
  updateUser(id, form) {
    return this.http.put(`${environment.url}users/${id}`, form);
  }

  //Create User
  createUser(form) {
    return this.http.post(`${environment.url}users`, form);
  }
}
