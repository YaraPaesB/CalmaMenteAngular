import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() onClose: EventEmitter<void> = new EventEmitter();

  public handleClose() {
    this.onClose.emit()
  }
}
