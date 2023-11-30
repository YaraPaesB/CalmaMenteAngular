import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css']
})
export class ArtigoComponent {
  @Input() action!: () => void;

  @Input() titulo = "";
}
