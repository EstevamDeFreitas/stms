export class Ship{
    id : string = '';
    location : string = '';
    x : number = 0;
    y : number = 0;
    cargo : Cargo[] = [];
    spaceAvailable : number = 0;
    type : string = '';
    class : string = '';
    maxCargo : number = 0;
    loadingSpeed : number = 0;
    speed : number = 0;
    manufacturer : string = '';
    plating : number = 0;
    weapons : number = 0;
}

export class Cargo{
    good : string = '';
    quantity : number = 0;
    totalVolume : number = 0; 
}