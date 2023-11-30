import { Component, Input } from '@angular/core';

export enum h2Colors {
  ansiedade = "h2_ansiedade",
  tdah = "h2_tdah",
  depressao = "h2_depressao"
}

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent {
  @Input() h2Color: h2Colors = h2Colors.ansiedade;

  @Input() titulo = "";
}
