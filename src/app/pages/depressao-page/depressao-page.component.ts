import { Component } from '@angular/core';
import { footerColors } from 'src/app/components/footer/footer.component';
import { btnColors, h1HeaderColors, headerColors, textColors } from 'src/app/components/header/header.component';
import { h2Colors } from 'src/app/components/modal-info/modal-info.component';

@Component({
  selector: 'app-depressao-page',
  templateUrl: './depressao-page.component.html',
  styleUrls: ['./depressao-page.component.css']
})
export class DepressaoPageComponent {
    public headerColors = headerColors;
    public btnColors = btnColors;
    public textColors = textColors;
    public footerColors = footerColors;
    public h2Colors = h2Colors;
    public h1HeaderColors = h1HeaderColors;
}
