import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  id;
  user;
  submitted = false;

  constructor(private srv: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );

    this.srv.getUser(this.id).subscribe(
      res => {
        this.user = res;
        this.user = this.user.data
        console.log(this.user);
      },
      err => {
        console.log(err);
      }
    );
    console.log(this.user);
  }

  onSubmit(form) {
    console.log(form.value);
    this.submitted = true;
    if (form.valid) {
      this.srv.updateUser(this.id, form.value).subscribe(
        res => {
          console.log(res);
          this.router.navigate(["Dashboard/Users"]);
        },
        err => { console.log(err) }
      );
    }
  }
}
