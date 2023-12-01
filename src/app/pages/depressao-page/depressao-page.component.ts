import { Component } from '@angular/core';
import { footerColors } from 'src/app/components/footer/footer.component';
import { btnColors, h1HeaderColors, headerColors, textColors } from 'src/app/components/header/header.component';
import { h2Colors } from 'src/app/components/card-info/card-info.component';
import { DisorderResponse } from 'src/app/types';

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
    public apiResponse: DisorderResponse = {
      title: "O que é Ansiedade?",
      description: "Depressão (CID 10 – F33) é uma doença psiquiátrica crônica e recorrente que produz uma alteração do humor caracterizada por uma tristeza profunda, sem fim, associada a sentimentos de dor, amargura, desencanto, desesperança, baixa autoestima e culpa, assim como a distúrbios do sono e do apetite.<br/>É importante distinguir a tristeza patológica daquela transitória provocada por acontecimentos difíceis e desagradáveis, mas que são inerentes à vida de todas as pessoas, como a morte de um ente querido, a perda de emprego, os desencontros amorosos, os desentendimentos familiares, as dificuldades econômicas etc.<br/>Diante das adversidades, as pessoas sem a doença sofrem, ficam tristes, mas encontram uma forma de superá-las. Nos quadros de depressão, a tristeza não dá tréguas, mesmo que não haja uma causa aparente. O humor permanece deprimido praticamente o tempo todo, por dias e dias seguidos. Desaparece o interesse pelas atividades que antes davam satisfação e prazer e a pessoa não tem perspectiva de que algo possa ser feito para que seu quadro melhore.",
      articles: [
        {
          title: "Artigo 1",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          title: "Artigo 2",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          title: "Artigo 3",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ]
    }
}
