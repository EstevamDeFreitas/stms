import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token = new FormControl('');

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  verifyUser(){
    AuthService.setToken(this.token.value);
    this.authService.getUser().subscribe(res => {
      console.log("Success",res);
      
    })
  }
}
