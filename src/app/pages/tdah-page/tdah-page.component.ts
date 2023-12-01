import { Component } from '@angular/core';
import { footerColors } from 'src/app/components/footer/footer.component';
import { btnColors, h1HeaderColors, headerColors, textColors } from 'src/app/components/header/header.component';
import { h2Colors } from 'src/app/components/card-info/card-info.component';
import { DisorderResponse } from 'src/app/types';

@Component({
  selector: 'app-tdah-page',
  templateUrl: './tdah-page.component.html',
  styleUrls: ['./tdah-page.component.css']
})
export class TdahPageComponent {
    public headerColors = headerColors;
    public btnColors = btnColors;
    public textColors = textColors;
    public footerColors = footerColors;
    public h2Colors = h2Colors;
    public h1HeaderColors = h1HeaderColors;
    public apiResponse: DisorderResponse = {
      title: "O que é TDAH?",
      description: "O Transtorno do Déficit de Atenção com Hiperatividade (TDAH) é um transtorno neurobiológico, de causas genéticas, que aparece na infância e freqüentemente acompanha o indivíduo por toda a sua vida. Ele se caracteriza por sintomas de desatenção, inquietude e impulsividade. Ele é chamado às vezes de DDA (Distúrbio do Déficit de Atenção). Em inglês, também é chamado de ADD, ADHD ou de AD/HD.<br/>Existe mesmo o TDAH?<br/>Ele é reconhecido oficialmente por vários países e pela Organização Mundial da Saúde (OMS). Em alguns países, como nos Estados Unidos, portadores de TDAH são protegidos pela lei quanto a receberem tratamento diferenciado na escola.<br/>Não existe controvérsia sobre a existência do TDAH?<br/>Não, nenhuma. Existe inclusive um Consenso Internacional publicado pelos mais renomados médicos e psicólogos de todo o mundo a este respeito. Consenso é uma publicação científica realizada após extensos debates entre pesquisadores de todo o mundo, incluindo aqueles que não pertencem a um mesmo grupo ou instituição e não compartilham necessariamente as mesmas idéias sobre todos os aspectos de um transtorno.<br/>Por que algumas pessoas insistem que o TDAH não existe?<br/>Pelas mais variadas razões, desde inocência e falta de formação científica até mesmo má-fé. Alguns chegam a afirmar que “o TDAH não existe”, é uma “invenção” médica ou da indústria farmacêutica, para terem lucros com o tratamento.<br/>No primeiro caso se incluem todos aqueles profissionais que nunca publicaram qualquer pesquisa demonstrando o que eles afirmam categoricamente e não fazem parte de nenhum grupo científico. Quando questionados, falam em “experiência pessoal” ou então relatam casos que somente eles conhecem porque nunca foram publicados em revistas especializadas. Muitos escrevem livros ou têm sítios na Internet, mas nunca apresentaram seus “resultados” em congressos ou publicaram em revistas científicas, para que os demais possam julgar a veracidade do que dizem.<br/>Os segundos são aqueles que pretendem “vender” alguma forma de tratamento diferente daquilo que é atualmente preconizado, alegando que somente eles podem tratar de modo correto.<br/>Tanto os primeiros quanto os segundos afirmam que o tratamento do TDAH com medicamentos causa conseqüências terríveis. Quando a literatura científica é pesquisada, nada daquilo que eles afirmam é encontrado em qualquer pesquisa em qualquer país do mundo. Esta é a principal característica destes indivíduos: apesar de terem uma “aparência” de cientistas ou pesquisadores, jamais publicaram nada que comprovasse o que dizem.<br/>Veja um texto a este respeito e a resposta dos Professores Luis Rohde e Paulo Mattos:<br/>Why I Believe that Attention Deficit Disorder is a Myth<br/>Porque desinformação, falta de raciocínio científico e ingenuidade constituem uma mistura perigosa.",
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
