import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeBenevoleComponent } from './liste-benevole/liste-benevole.component';
import { ListePosteComponent } from './liste-poste/liste-poste.component';
import { FormBenevoleComponent } from './form-benevole/form-benevole.component';


const routes: Routes = [
  {path: 'benevole', component: ListeBenevoleComponent},
  {path: 'benevole/:id', component: FormBenevoleComponent},
  {path: 'poste', component: ListePosteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
