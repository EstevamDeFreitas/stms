import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token = new FormControl('');

  error : string = "";

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  verifyUser(){
    AuthService.setToken(this.token.value);
    this.authService.getUser().subscribe({
      next: (n) => this.router.navigate(['home']),
      error: (e) => { this.error = e.error.error.message;
      }
    })
  }
}
