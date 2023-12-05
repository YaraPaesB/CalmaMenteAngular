import { Component } from '@angular/core';
import { ImgBorderColors } from 'src/app/components/card-img/card-img.component';
import { h2Colors } from 'src/app/components/card-info/card-info.component';
import { footerColors } from 'src/app/components/footer/footer.component';
import { btnColors, h1HeaderColors, headerColors, textColors } from 'src/app/components/header/header.component';
import { FormGroup, FormControl } from '@angular/forms';
import { BtnColors } from 'src/app/components/btn-pages/btn-pages.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  public headerColors = headerColors;
  public btnColors = btnColors;
  public textColors = textColors;
  public footerColors = footerColors;
  public h2Colors = h2Colors;
  public h1HeaderColors = h1HeaderColors;
  public ImgBorderColors = ImgBorderColors;
  public BtnColors = BtnColors;

  public userRegistForm = new FormGroup ({
    transtornos: new FormControl('')
  })
}
