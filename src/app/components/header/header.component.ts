import { Component, Input } from '@angular/core';

export enum headerColors {
  home = "header_home",
  ansiedade = "header_ansiedade",
  tdah = "header_tdah",
  depressao = "header_depressao",
  clinicas = "header_clinicas"
}

export enum h1HeaderColors {
    home = "h1_header_home",
    ansiedade = "h1_header_ansiedade",
    tdah = "h1_header_tdah",
    depressao = "h1_header_depressao",
    clinicas = "h1_header_clinicas"
  }

export enum btnColors {
  home = "btn_nav_home",
  ansiedade = "btn_nav_ansiedade",
  tdah = "btn_nav_tdah",
  depressao = "btn_nav_depressao",
  clinicas = "btn_nav_clinicas"
}

export enum textColors {
  home = "text_home",
  ansiedade = "text_ansiedade",
  tdah = "text_tdah",
  depressao = "text_depressao",
  clinicas = "text_clinicas"
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() color: headerColors = headerColors.depressao;

  @Input() h1HeaderColor: h1HeaderColors = h1HeaderColors.depressao;

  @Input() titulo="";

  @Input() btnColor: btnColors = btnColors.depressao;

  @Input() textColor: textColors = textColors.depressao;
}
