import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './Components/users/users.component';
import { ViewComponent } from './Components/view/view.component';
import { UpdateComponent } from './Components/update/update.component';
import { CreateComponent } from './Components/create/create.component';
import { AuthGuardsService } from './Services/auth-guards.service';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      
      { path: 'Users', component: UsersComponent, canActivate:[AuthGuardsService] }, //All Users
      { path: 'Users/:id', component: ViewComponent, canActivate:[AuthGuardsService] },  //View one User
      { path: 'UpdateUsers/:id', component: UpdateComponent, canActivate:[AuthGuardsService] }, //Update User
      { path: 'CreateUser', component: CreateComponent, canActivate:[AuthGuardsService] } //Create new User


    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
