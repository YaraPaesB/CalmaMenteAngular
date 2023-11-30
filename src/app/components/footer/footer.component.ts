import { Component, Input } from '@angular/core';

export enum footerColors {
  home = "footer_home",
  ansiedade = "footer_ansiedade",
  tdah = "footer_tdah",
  depressao = "footer_depressao",
  api = "footer_api"
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() color: footerColors = footerColors.home;
}
