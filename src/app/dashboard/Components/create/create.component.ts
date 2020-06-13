import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  submitted = false;

  constructor( private srv: UsersService, private router: Router ) { }

  ngOnInit(): void {
  }

  onCreate(form) {
    this.submitted = true;
    if (form.valid) {
      this.srv.createUser(form.value).subscribe (
        res => { 
          console.log(res);
          this.router.navigate(['Dashboard/Users']);
         },
        err => { console.log(err) }
      );
    }
  }

}
