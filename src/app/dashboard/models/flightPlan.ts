export class FlightPlan{
    id : string = '';
    shipId : string = '';
    createdAt : Date = new Date();
    arrivesAt : Date = new Date();
    destination : string = '';
    departure : string = '';
    distance : number = 0;
    fuelConsumed : number = 0;
    fueldRemaining : number = 0;
    terminatedAt : Date = new Date();
    timeRemainingInSeconds : number = 0;
}