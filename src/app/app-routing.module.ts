import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTokenComponent } from './authentication/components/create-token/create-token.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { LoansComponent } from './dashboard/components/loans/loans.component';
import { NavbarComponent } from './dashboard/components/shared/navbar/navbar.component';
import { ShipDetailComponent } from './dashboard/components/ship-detail/ship-detail.component';
import { ShipTravelComponent } from './dashboard/components/ship-travel/ship-travel.component';
import { ShipsComponent } from './dashboard/components/ships/ships.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "create-token", component: CreateTokenComponent},
  {path: "home", component: NavbarComponent, children: [
    {path: "", redirectTo: 'dashboard', pathMatch: 'full'},
    {path: "dashboard", component: DashboardComponent},
    {path: "ships", component: ShipsComponent},
    {path: "ships/:id", component: ShipDetailComponent},
    {path: "ships/travel/:id", component: ShipTravelComponent},
    {path: "loans", component: LoansComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
