import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-create-token',
  templateUrl: './create-token.component.html',
  styleUrls: ['./create-token.component.css']
})
export class CreateTokenComponent implements OnInit {

  username = new FormControl('');

  token : string = "";

  error : string = '';

  tokenCreated : boolean = false;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  createToken(){
    this.authService.createUser(this.username.value).subscribe({
      next: (n) => {
        this.token = n.token; 
        this.tokenCreated = true;
        AuthService.setToken(this.token);
      },
      error: (e) => this.error = e.error.error.message
    })
  }

}
