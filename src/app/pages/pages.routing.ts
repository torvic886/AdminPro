import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';


const routes: Routes = [
{ 
    path: 'dashboard', 
    component: PagesComponent,
    children: [
     { path: '', component: DashboardComponent},
     { path: 'progress', component: ProgressComponent},
     { path: 'grafica1', component: Grafica1Component},
     { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
   ]
   },   

  // path: '/dashboard' PagesRouting
  // path: '/progress' PagesRouting
  // path: '/grafica1' PagesRouting

  // path: '/login' AuthRoutingModule
  // path: '/register' AuthRoutingModule

 // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //{ path: '**', component: NopagefoundComponent } // si no tiene las rutas de arriba se redireccione a este componente
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
