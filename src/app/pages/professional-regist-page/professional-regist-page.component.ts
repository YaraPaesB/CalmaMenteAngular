import { Component } from '@angular/core';
import { BtnColors } from 'src/app/components/btn-pages/btn-pages.component';
import { ImgBorderColors } from 'src/app/components/card-img/card-img.component';
import { h2Colors } from 'src/app/components/card-info/card-info.component';
import { footerColors } from 'src/app/components/footer/footer.component';
import { btnColors, h1HeaderColors, headerColors, textColors } from 'src/app/components/header/header.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-professional-regist-page',
  templateUrl: './professional-regist-page.component.html',
  styleUrls: ['./professional-regist-page.component.css']
})
export class ProfessionalRegistPageComponent {
  public headerColors = headerColors;
  public btnColors = btnColors;
  public textColors = textColors;
  public footerColors = footerColors;
  public h2Colors = h2Colors;
  public h1HeaderColors = h1HeaderColors;
  public ImgBorderColors = ImgBorderColors;
  public BtnColors = BtnColors;

  public professionalRegisterForm = new FormGroup ({
    abordagem: new FormControl('')
  })
}
