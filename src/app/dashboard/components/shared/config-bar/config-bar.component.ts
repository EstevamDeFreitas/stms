import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'config-bar',
  templateUrl: './config-bar.component.html',
  styleUrls: ['./config-bar.component.css']
})
export class ConfigBarComponent implements OnInit {

  @Input() button : string = '';
  @Output() buttonClicked = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  onButtonClicked(){
    this.buttonClicked.emit("Click");
  }

}
