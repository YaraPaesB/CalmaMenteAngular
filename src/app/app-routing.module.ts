import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepressaoPageComponent } from './pages/depressao-page/depressao-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AnsiedadePageComponent } from './pages/ansiedade-page/ansiedade-page.component';
import { TdahPageComponent } from './pages/tdah-page/tdah-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'ansiedade', component: AnsiedadePageComponent},
  {path: 'depressao', component: DepressaoPageComponent},
  {path: 'tdah', component: TdahPageComponent},
  {path: 'login', component:LoginPageComponent},
  {path: 'cadastro', component:RegisterPageComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
