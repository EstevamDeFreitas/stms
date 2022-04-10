import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'config-bar',
  templateUrl: './config-bar.component.html',
  styleUrls: ['./config-bar.component.css']
})
export class ConfigBarComponent implements OnInit {

  @Input() button : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
