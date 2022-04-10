import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { AuthInterceptor } from './authentication/services/auth.interceptor';
import { NavbarComponent } from './dashboard/components/shared/navbar/navbar.component';
import { CreateTokenComponent } from './authentication/components/create-token/create-token.component';
import { ShipsComponent } from './dashboard/components/ships/ships.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { ShipDetailComponent } from './dashboard/components/ship-detail/ship-detail.component';

import { CountdownModule } from 'ngx-countdown';
import { ModalComponent } from './dashboard/components/shared/modal/modal.component';
import { ShipTravelComponent } from './dashboard/components/ship-travel/ship-travel.component';
import { ConfigBarComponent } from './dashboard/components/shared/config-bar/config-bar.component';
import { LoansComponent } from './dashboard/components/loans/loans.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    CreateTokenComponent,
    ShipsComponent,
    DashboardComponent,
    ShipDetailComponent,
    ModalComponent,
    ShipTravelComponent,
    ConfigBarComponent,
    LoansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CountdownModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
