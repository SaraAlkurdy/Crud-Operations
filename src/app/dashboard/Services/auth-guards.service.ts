import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from 'src/app/login/Services/login.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardsService implements CanActivate {

  constructor(private srvLogin: LoginService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    if (this.srvLogin.isLoggedIn()) return true;

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}