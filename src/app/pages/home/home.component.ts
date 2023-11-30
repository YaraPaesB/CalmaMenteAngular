import { headerColors, h1HeaderColors } from './../../components/header/header.component';
import { Component } from '@angular/core';
import { Colors } from 'src/app/components/card/card.component';
import { footerColors } from 'src/app/components/footer/footer.component';
import { btnColors, textColors } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    public Colors = Colors;
    public headerColors = headerColors;
    public btnColors = btnColors;
    public textColors = textColors;
    public footerColors = footerColors;
    public h1HeaderColors = h1HeaderColors;

}
