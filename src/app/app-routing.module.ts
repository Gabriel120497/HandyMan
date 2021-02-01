import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularHorasComponent } from './calcular-horas/calcular-horas.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  {path: '', redirectTo: '/reportes', pathMatch: 'full'},
  {path: 'reportes', component: ReportesComponent},
  {path: 'calcularHoras', component: CalcularHorasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
