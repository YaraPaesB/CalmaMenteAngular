import { Component, Input } from '@angular/core';

export enum headerColors {
  home = "header_home",
  ansiedade = "header_ansiedade",
  tdah = "header_tdah",
  depressao = "header_depressao",
  api = "header_api"
}

export enum h1HeaderColors {
    home = "h1_header_home",
    ansiedade = "h1_header_ansiedade",
    tdah = "h1_header_tdah",
    depressao = "h1_header_depressao",
    api = "h1_header_api"
  }

export enum btnColors {
  home = "btn_nav_home",
  ansiedade = "btn_nav_ansiedade",
  tdah = "btn_nav_tdah",
  depressao = "btn_nav_depressao",
  api = "btn_nav_api"
}

export enum textColors {
  home = "text_home",
  ansiedade = "text_ansiedade",
  tdah = "text_tdah",
  depressao = "text_depressao",
  api = "text_api"
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
