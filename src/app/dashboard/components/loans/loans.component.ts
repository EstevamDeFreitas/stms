import { Component, OnInit } from '@angular/core';
import { Loan } from '../../models/loan';
import { LoanService } from '../../services/loan.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {

  public myLoans : Array<Loan> = new Array<Loan>();

  constructor(private loanService : LoanService) { }

  ngOnInit(): void {
    this.getMyLoans();
  }

  getMyLoans(){
    this.loanService.getMyLoans().subscribe({
      next: (res) => {
        this.myLoans = res.loans;
      }
    })
  }

  select(id : string){

  }

}
