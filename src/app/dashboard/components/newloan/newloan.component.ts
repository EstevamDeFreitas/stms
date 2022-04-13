import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AvailableLoan } from '../../models/loan';
import { OperationSucceded } from '../../models/onOperationSucceded';
import { CommonTasksService } from '../../services/common-tasks.service';
import { LoanService } from '../../services/loan.service';

@Component({
  selector: 'app-newloan',
  templateUrl: './newloan.component.html',
  styleUrls: ['./newloan.component.css']
})
export class NewloanComponent implements OnInit {
  @Output('operationSucceded') operationSucceded = new EventEmitter<string>();

  public availableLoans : Array<AvailableLoan> = new Array<AvailableLoan>();
  public selectedLoan !: AvailableLoan;



  constructor(private loanService : LoanService, private commonTasksServices : CommonTasksService) {

  }

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
    this.loanService.takeALoan(type).subscribe(res =>{
      this.OnOperationSucceded();
      this.commonTasksServices.sendTask("operationSucceded")
    });
  }

  OnOperationSucceded(): void {
    this.operationSucceded.emit("operationSucceded");
  }

}
