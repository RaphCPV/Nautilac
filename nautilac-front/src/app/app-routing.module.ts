import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeBenevoleComponent } from './liste-benevole/liste-benevole.component';
import { ListePosteComponent } from './liste-poste/liste-poste.component';


const routes: Routes = [
  {path: 'benevole', component: ListeBenevoleComponent },
  {path: 'poste', component: ListePosteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
