import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CountdownEvent, CountdownEventAction } from 'ngx-countdown';
import { FlightPlan } from '../../models/flightPlan';
import { GoodMarket } from '../../models/goodMarket';
import { OperationSucceded } from '../../models/onOperationSucceded';
import { Selectable } from '../../models/selectable';
import { SellOrder } from '../../models/sellOrder';
import { Cargo, Ship } from '../../models/ship';
import { CommonTasksService } from '../../services/common-tasks.service';
import { FlightService } from '../../services/flight.service';
import { LocationService } from '../../services/location.service';
import { SellService } from '../../services/sell.service';
import { ShipService } from '../../services/ship.service';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-ship-detail',
  templateUrl: './ship-detail.component.html',
  styleUrls: ['./ship-detail.component.css']
})
export class ShipDetailComponent implements OnInit {

  @ViewChild('sellModal')
  sellModal : ModalComponent;
  sellSelectedGood : Cargo = new Cargo();
  sellGoodQuantity = new FormControl('');

  @Output() operationSucceded = new EventEmitter<string>();

  ship : Ship = new Ship();

  flightDone : boolean = false;
  flightPlan : FlightPlan = new FlightPlan();

  market : Array<GoodMarket> = new Array<GoodMarket>();

  constructor(
      private route : ActivatedRoute,
      private shipService : ShipService,
      private flightService : FlightService,
      private sellService : SellService,
      private modalService : NgbModal,
      private locationServie : LocationService,
      private commonTasksServices : CommonTasksService
    )
  {
    this.sellModal = new ModalComponent(modalService);
    this.sellGoodQuantity.setValue(1);

  }

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
        else{
          this.locationServie.getMarketPlaceInfo(this.ship.location).subscribe(res =>{
            this.market = res.marketplace;

          });
        }
      });
    });
  }

  sellItem(sellGood : SellOrder){
    this.sellService.sellItem(sellGood).subscribe(res => {
      this.getShipInfo();
      this.OnOperationSucceded();
    });
  }

  countdownEvent(event : CountdownEvent){

    let done : CountdownEventAction = 'done';

    if(event.action == done){
      this.flightDone = true;

      this.getShipInfo();
    }
  }

  openSellModal(good : Cargo){
    this.sellSelectedGood = good;

    this.sellModal.open();
  }

  sellEventHandler(){
    let sellGood = new SellOrder();

    sellGood.good = this.sellSelectedGood.good;
    sellGood.quantity = this.sellGoodQuantity.value;
    sellGood.shipId = this.ship.id;

    this.sellItem(sellGood);
  }

  maxSellInput(){
    this.sellGoodQuantity.setValue(this.sellSelectedGood.quantity > this.ship.maxCargo ? this.ship.maxCargo : this.sellSelectedGood.quantity);
  }

  getGoodMarketValueFromArray(goodSymbol : string):any{
    return this.market.find(x => x.symbol == goodSymbol)?.sellPricePerUnit;
  }

  OnOperationSucceded(): void {
    this.commonTasksServices.sendTask("operationSucceded");
  }

}
