import { Component } from '@angular/core';
import { Colors, btnColors, textColors } from './components/header/header.component';
import { footerColors } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalmaMenteAngular';
  public Colors = Colors;
  public btnColors = btnColors;
  public textColors = textColors;
  public footerColors = footerColors;
}
