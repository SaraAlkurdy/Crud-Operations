import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  id;
  user;

  constructor ( private srv: UsersService, private route: ActivatedRoute ) { }

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

  

}
