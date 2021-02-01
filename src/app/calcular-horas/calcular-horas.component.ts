import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ReportesService } from '../reportes/reportes.service';
import { Horas } from './horas';

@Component({
  selector: 'app-calcular-horas',
  templateUrl: './calcular-horas.component.html',
  styleUrls: ['./calcular-horas.component.css']
})
export class CalcularHorasComponent implements OnInit {

  public response: boolean;
  public horas: Horas;
  public formCalculo: FormGroup;
  public errors: string;

  constructor(private calcularHorasService: ReportesService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formCalculo = new FormGroup({
      idTecnico: new FormControl('', [Validators.required]),
      numeroSemana: new FormControl('', [Validators.required])
    })
  }

  calcularHoras() {
    console.log('this.formCalculo.value.idTecnico', this.formCalculo.value.idTecnico);
    console.log('this.formCalculo.value.numeroSemana',  this.formCalculo.value.numeroSemana);
    
    this.calcularHorasService.getReportsByWeekAndIdTecnico(this.formCalculo.value.idTecnico, this.formCalculo.value.numeroSemana).subscribe(
      response => {
        this.response = true;
        this.horas = response;
        /*Swal.fire('Horas del Técnico', `Reporte ${response.hSemana} creado con éxito`, 'success');
        this.createForm();*/
      },
      err => {
        this.errors = err.error.error as string;
        Swal.fire('Horas del Técnico', `${this.errors}`, 'error');
      }
    )
  }

}
