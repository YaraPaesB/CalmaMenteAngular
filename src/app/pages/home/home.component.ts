import { Component } from '@angular/core';
import { Colors } from 'src/app/components/card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public Colors = Colors;
  public teste = "sou lindo"
}
