import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Reporte } from './reporte';
import { ReportesService } from './reportes.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  reportesForm: FormGroup
  public reporte: Reporte = new Reporte();
  public errors: string[];

  constructor(private reporteService: ReportesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.reportesForm = new FormGroup({
      idTecnico: new FormControl('', [Validators.required]),
      idServicio: new FormControl('', [Validators.required]),
      fechaInicio: new FormControl('', [Validators.required]),
      fechaFin: new FormControl('', [Validators.required]),
    })
  }

  createReport() {
    this.reporte = this.reportesForm.value;
    console.log(this.reporte);
    
    if (this.reporte.fechaInicio < this.reporte.fechaFin) {
      this.reporteService.create(this.reporte).subscribe(
        response => {
          Swal.fire('Reporte Nuevo', `Reporte ${response.id} creado con éxito`, 'success');
          this.createForm();
        },
        err => {
          this.errors = err.error.errors as string[];
          console.log(this.errors);
        }
      );
    } else {
      Swal.fire('Error', 'La fecha y hora de inicio debe ser menor a la final', 'error');
    }
  }

}
