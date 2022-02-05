import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Ship } from '../../models/ship';
import { ShipService } from '../../services/ship.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  ships : Ship[] = [];

  constructor(private shipService : ShipService, private router : Router, private route : ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.getMyShips();
  }

  getMyShips(){
    this.shipService.getMyShips().subscribe(res =>{
      this.ships = res.ships;
    });
  }

  openDetails(shipId : string){
    this.router.navigate([`${shipId}`], {relativeTo: this.route});
  }

}
