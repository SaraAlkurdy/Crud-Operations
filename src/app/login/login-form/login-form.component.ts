import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../Services/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  submitted: boolean = false;

  constructor(private srv: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      localStorage.setItem('isLogged', 'true');
      const value = form.value;
      console.log(value);
      this.srv.login(form.value);
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      this.router.navigate([returnUrl || '/Dashboard/Users']);
    }
  }

}
