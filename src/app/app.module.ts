import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportesComponent } from './reportes/reportes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ReportesService } from './reportes/reportes.service';
import { HttpClientModule } from '@angular/common/http';
import { CalcularHorasComponent } from './calcular-horas/calcular-horas.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportesComponent,
    HeaderComponent,
    FooterComponent,
    CalcularHorasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ReportesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
