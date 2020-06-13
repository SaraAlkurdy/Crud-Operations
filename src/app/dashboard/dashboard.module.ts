import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { UsersComponent } from './Components/users/users.component';
import { UsersService } from './Services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './Components/view/view.component';
import { UpdateComponent } from './Components/update/update.component';
import { FormsModule }   from '@angular/forms';
import { CreateComponent } from './Components/create/create.component';
import { LoginService } from '../login/Services/login.service';
import { AuthGuardsService } from './Services/auth-guards.service';


@NgModule({
  declarations: [DashboardComponent, HeaderComponent, UsersComponent, ViewComponent, UpdateComponent, CreateComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UsersService,
    LoginService,
    AuthGuardsService
  ]
})
export class DashboardModule { }
