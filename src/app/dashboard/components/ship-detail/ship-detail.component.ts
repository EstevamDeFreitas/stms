import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightPlan } from '../../models/flightPlan';
import { Selectable } from '../../models/selectable';
import { SellOrder } from '../../models/sellOrder';
import { Cargo, Ship } from '../../models/ship';
import { FlightService } from '../../services/flight.service';
import { SellService } from '../../services/sell.service';
import { ShipService } from '../../services/ship.service';

@Component({
  selector: 'app-ship-detail',
  templateUrl: './ship-detail.component.html',
  styleUrls: ['./ship-detail.component.css']
})
export class ShipDetailComponent implements OnInit {

  ship : Ship = new Ship();

  selectedGoods : Selectable[] = [];

  flightPlan : FlightPlan = new FlightPlan();

  constructor(
      private route : ActivatedRoute, 
      private shipService : ShipService, 
      private flightService : FlightService,
      private sellService : SellService
    ) { }

  ngOnInit(): void {
    this.getShipInfo();
  }

  getShipInfo(){
    let id:string = '';

    this.route.params.subscribe(pam => {
      id = pam['id'];
      this.shipService.getShip(id).subscribe(res => {
        this.ship = res.ship;

        if(this.ship.flightPlanId != undefined){
          this.flightService.getFlightPlan(this.ship.flightPlanId).subscribe(res => {
            this.flightPlan = res.flightPlan;
          })
        }
      });
    });
  }

  sellItem(good : Cargo){
    while(good.quantity > 0){

      let sell : SellOrder  = new SellOrder();

      sell.shipId = this.ship.id;
      sell.good = good.good;
      sell.quantity = good.quantity > this.ship.loadingSpeed ? this.ship.loadingSpeed : good.quantity;

      good.quantity -= good.quantity > this.ship.loadingSpeed ? this.ship.loadingSpeed : good.quantity;

      this.sellService.sellItem(sell).subscribe(res => {
        this.getShipInfo();
      });
    }
  }

}
