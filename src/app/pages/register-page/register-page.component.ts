import { Component } from '@angular/core';
import { ImgBorderColors } from 'src/app/components/card-img/card-img.component';
import { h2Colors } from 'src/app/components/card-info/card-info.component';
import { footerColors } from 'src/app/components/footer/footer.component';
import { btnColors, h1HeaderColors, headerColors, textColors } from 'src/app/components/header/header.component';
import { FormGroup, FormControl } from '@angular/forms';
import { BtnColors } from 'src/app/components/btn-pages/btn-pages.component';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  public headerColors = headerColors;
  public btnColors = btnColors;
  public textColors = textColors;
  public footerColors = footerColors;
  public h2Colors = h2Colors;
  public h1HeaderColors = h1HeaderColors;
  public ImgBorderColors = ImgBorderColors;
  public BtnColors = BtnColors;

  public registerForm = new FormGroup ({
    nome: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    userType: new FormControl(false),
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
    confirmSenha: new FormControl('', Validators.required),
    crp: new FormControl('')
  });

  constructor(private route: Router) {}

  public validateCrp() {
    
    if(!this.registerForm.controls.userType.value) return true;
    
    const crp = this.registerForm.controls.crp.value;
    if(!crp || crp.length === 0) return false;

    return true;
  }
  
  public onSubmit() {
    console.log(this.registerForm.value);
    this.route.navigate([`/perfil-${this.registerForm.value.userType ? "profissional" : "usuario"}`])
  }
}
