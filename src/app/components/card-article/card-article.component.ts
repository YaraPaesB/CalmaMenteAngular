import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.css']
})
export class ArtigoComponent {
  @Input() action!: () => void;

  @Input() titulo = "";
}
