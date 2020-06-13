import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/Services/login.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users
  constructor(private srv: UsersService, private router: Router, private srvLogin: LoginService) { }

  ngOnInit(): void {
    this.getUsers();
    console.log(this.srvLogin.isLoggedIn());
  }

  //Get All Users
  getUsers() {
    this.srv.getUsers()
    .subscribe(res => {
      this.users = res;
      this.users = this.users.data;
      console.log(this.users);
    },
      err => {
        console.log(err);
      });
  }

  //Delete User
  onRemoveUser(id) {
    this.srv.removeUser(id);
    console.log(id);
  }

  //View One User
  onViewUser(id) {
    console.log(id);
    this.router.navigate([`Dashboard/Users/${id}`]);
  }

  //Update User
  onUpdateUser(id) {
    console.log(id);
    this.router.navigate([`Dashboard/UpdateUsers/${id}`]);
  }

  //Create User
  onCreateUser() {
    this.router.navigate(['Dashboard/CreateUser']);
  }
}
