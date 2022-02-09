import { Component, Input, OnInit, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() title = '';

  @Output() saveEvent = new EventEmitter<string>();

  @ViewChild('content')
  private content!: TemplateRef<any>;

  closeResult = '';

  constructor(private modalService : NgbModal) { }

  ngOnInit(): void {
  }

  open(){
    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result)=>{
      this.closeResult = `Closed with: ${result}`;
    }, (reason) =>{
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
    })
  }

  private getDismissReason(reason : any):string{
    if(reason == ModalDismissReasons.ESC){
      return 'By pressing ESC';
    }
    else if(reason == ModalDismissReasons.BACKDROP_CLICK){
      return 'by clicking on backdrop';
    }
    else{
      return `with: ${reason}`;
    }
  }

  save(){
    console.log("Save event");
    
    this.saveEvent.emit("Save");
  }

}
