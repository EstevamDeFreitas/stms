import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTokenComponent } from './authentication/components/create-token/create-token.component';
import { LoginComponent } from './authentication/components/login/login.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "create-token", component: CreateTokenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
