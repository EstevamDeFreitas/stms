import { Component, OnInit } from '@angular/core';
import { AvailableLoan } from '../../models/loan';
import { LoanService } from '../../services/loan.service';

@Component({
  selector: 'app-newloan',
  templateUrl: './newloan.component.html',
  styleUrls: ['./newloan.component.css']
})
export class NewloanComponent implements OnInit {

  public availableLoans : Array<AvailableLoan> = new Array<AvailableLoan>();
  public selectedLoan !: AvailableLoan;

  constructor(private loanService : LoanService) { }

  ngOnInit(): void {
    this.getAvailableLoans();
  }

  getAvailableLoans(){
    this.loanService.getAvailableLoans().subscribe({
      next: (res) =>{
        this.availableLoans = res.loans
      }
    })
  }

  select(type : AvailableLoan){
    this.selectedLoan = type;
  }

  loanMaxDate(days : number) : Date{
    let date = new Date(Date.now());

    date.setDate(date.getDate() + days);

    return date;
  }

  takeLoan(type : string){
    this.loanService.takeALoan(type).subscribe();
  }

}
