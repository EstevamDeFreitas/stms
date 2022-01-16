import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTokenComponent } from './authentication/components/create-token/create-token.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { NavbarComponent } from './dashboard/components/shared/navbar/navbar.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "create-token", component: CreateTokenComponent},
  {path: "home", component: NavbarComponent, children: [

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
