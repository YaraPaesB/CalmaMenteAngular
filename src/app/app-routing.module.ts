import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepressaoPageComponent } from './pages/depressao-page/depressao-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AnsiedadePageComponent } from './pages/ansiedade-page/ansiedade-page.component';
import { TdahPageComponent } from './pages/tdah-page/tdah-page.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'ansiedade', component: AnsiedadePageComponent},
  {path: 'depressao', component: DepressaoPageComponent},
  {path: 'tdah', component: TdahPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
