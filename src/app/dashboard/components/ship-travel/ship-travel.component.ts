import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Ship } from '../../models/ship';
import { ShipService } from '../../services/ship.service';
import { Location } from '../../models/location';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-ship-travel',
  templateUrl: './ship-travel.component.html',
  styleUrls: ['./ship-travel.component.css']
})
export class ShipTravelComponent implements OnInit {

  ship : Ship = new Ship();
  shipId : string = '';

  searchTerm : FormControl = new FormControl();

  availableLocations : Array<Location> = new Array<Location>();

  error:string = '';

  constructor(private shipService : ShipService, private route : ActivatedRoute, private systemService : SystemService) { }

  ngOnInit(): void {

    this.getRouteParams();
    this.getShip();

  }

  getRouteParams(){
    this.route.params.subscribe(par =>{
      this.shipId = par['id'];
    });
  }

  getShip(){
    this.shipService.getShip(this.shipId).subscribe(res =>{
      this.ship = res.ship;
    })
  }

  search(){
    this.systemService.getSystemLocations(this.searchTerm.value).subscribe({
      next: (res) => {
        this.availableLocations = res.locations;
        this.error = '';
      },
      error: (err) =>{
        this.error = 'This system does not exist';
        this.availableLocations = new Array<Location>();
      }
    });
  }

}
