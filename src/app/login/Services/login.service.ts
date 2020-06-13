import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

   }

   login(form) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', 'QpwL5tke4Pnpja7X4');
     this.http.post(`${environment.url}login`,form, {headers}).subscribe(
       res=>{
         console.log(res);
       },
       err=>{        
         console.log(err);
         
       }
     )
   }

   isLoggedIn() {
    if (localStorage.getItem('isLogged') == 'true') return true;
    else return false;
  }
}
