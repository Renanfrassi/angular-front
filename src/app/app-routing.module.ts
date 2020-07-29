import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtorComponent } from './ator/ator.component';
import { DiretorComponent } from './diretor/diretor.component';
import { ClasseComponent } from './classe/classe.component';
import { TituloComponent } from './titulo/titulo.component';
import { ItemComponent } from './item/item.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LocacaoComponent } from './locacao/locacao.component';


const routes: Routes = [
  {path: 'ator', component: AtorComponent},
  {path: 'diretor', component: DiretorComponent},
  {path: 'classe', component: ClasseComponent},
  {path: 'titulo', component: TituloComponent},
  {path: 'item', component: ItemComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'locacao', component: LocacaoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
