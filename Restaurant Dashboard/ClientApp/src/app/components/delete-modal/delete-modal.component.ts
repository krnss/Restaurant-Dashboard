import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})

export class DeleteModalComponent implements OnInit {

  @Input() title = "Delete";
  @Input() text = "You want delete?";

  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {
  }
}
