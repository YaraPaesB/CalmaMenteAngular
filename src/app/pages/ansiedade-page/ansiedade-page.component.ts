import { h1HeaderColors } from './../../components/header/header.component';
import { Component } from '@angular/core';
import { footerColors } from 'src/app/components/footer/footer.component';
import { headerColors, btnColors, textColors } from 'src/app/components/header/header.component';
import { h2Colors } from 'src/app/components/card-info/card-info.component';
import { DisorderResponse } from 'src/app/types';

@Component({
  selector: 'app-ansiedade-page',
  templateUrl: './ansiedade-page.component.html',
  styleUrls: ['./ansiedade-page.component.css']
})
export class AnsiedadePageComponent {

  public headerColors = headerColors;
  public btnColors = btnColors;
  public textColors = textColors;
  public footerColors = footerColors;
  public h2Colors = h2Colors;
  public h1HeaderColors = h1HeaderColors;
  public apiResponse: DisorderResponse = {
    title: "O que é Ansiedade?",
    description: "Existem três tipos de tratamento para os transtornos de ansiedade:<br/>- Medicamentos (sempre com acompanhamento e receita médica);<br/>– Psicoterapia com psicólogo ou com médico psiquiatra;<br/>– Combinação dos dois tratamentos (medicamentos e psicoterapia).<br/>A maior parte das pessoas começa a ser sentir melhor e retoma suas atividades depois de algumas semanas de tratamento, por isso é importante procurar ajuda especializada na unidade de saúde mais próxima. O diagnóstico precoce e preciso, um tratamento eficaz e o acompanhamento por um prazo longo, são imprescindíveis para obter-se melhores resultados e menores prejuízos.<br/><br/>IMPORTANTE: Somente médicos e cirurgiões-dentistas devidamente habilitados podem diagnosticar doenças, indicar tratamentos e receitar remédios. As informações disponíveis em Dicas em Saúde possuem apenas caráter educativo.",
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
