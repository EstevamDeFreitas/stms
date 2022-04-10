export class AvailableLoan{
  type : string = "";
  amount : number = 0;
  rate : number = 0;
  termInDays : number = 0;
  collateralRequired : boolean = false;
}

export class Loan{
  id : string = "";
  due : Date = new Date();
  repaymentAmount : number = 0;
  status : string = "";
  type : string = ""
}
