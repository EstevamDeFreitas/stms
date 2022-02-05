import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoanService } from 'src/app/dashboard/services/loan.service';
import { UserService } from 'src/app/dashboard/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string = '';

  credits : number = 0;

  loans: number = 0;

  constructor(private userService: UserService, private loanService: LoanService) { }

  ngOnInit(): void {
    this.updateUserInfo();
  }

  updateUserInfo(){
    this.userService.getUserInfo().subscribe({
      next: (n) => { this.username = n.user.username; this.credits = n.user.credits; }
    })
    
    this.loanService.getMyLoans().subscribe({
      next: (n: { loans: any[]; }) => {
        let temp = 0;
        
        n.loans.forEach(loan => {
          temp += loan.repaymentAmount;
        });

        this.loans = temp;
      }
    })
  }

}
