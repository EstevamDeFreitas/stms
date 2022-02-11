import { Component, Input, OnInit, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() title = '';

  @Input() buttonTitle = '';

  @Output() saveEvent = new EventEmitter<string>();

  @ViewChild('content')
  private content!: TemplateRef<any>;

  closeResult = '';

  constructor(private modalService : NgbModal) { }

  ngOnInit(): void {
  }

  open(){
    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result)=>{

    }, (reason) =>{

    });
  }

  save(){
    this.saveEvent.emit("Save");
  }

}
