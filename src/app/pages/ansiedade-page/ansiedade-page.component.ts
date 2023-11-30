import { h1HeaderColors } from './../../components/header/header.component';
import { Component } from '@angular/core';
import { footerColors } from 'src/app/components/footer/footer.component';
import { headerColors, btnColors, textColors } from 'src/app/components/header/header.component';
import { h2Colors } from 'src/app/components/modal-info/modal-info.component';

@Component({
  selector: 'app-ansiedade-page',
  templateUrl: './ansiedade-page.component.html',
  styleUrls: ['./ansiedade-page.component.css']
})
export class AnsiedadePageComponent {

  public teste(): void {
    alert("a");
  }

  public headerColors = headerColors;
  public btnColors = btnColors;
  public textColors = textColors;
  public footerColors = footerColors;
  public h2Colors = h2Colors;
  public h1HeaderColors = h1HeaderColors;

}
