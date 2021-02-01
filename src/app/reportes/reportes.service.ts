import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert2';
import { map, catchError } from 'rxjs/operators';

import { Reporte } from "./reporte";
import { Horas } from "../calcular-horas/horas";

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  private endPoint: string = 'http://localhost:8080/api';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  create(reporte: Reporte): Observable<Reporte> {
    return this.http.post(`${this.endPoint}/reportes`, reporte, { headers: this.httpHeaders }).pipe(
      map((response: any) => response.reporte as Reporte),
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  getReportsByWeekAndIdTecnico(idTecnico: string, numeroSemana: string): Observable<Horas> {
    return this.http.get(`${this.endPoint}/calcularHoras?tecnicoId=${idTecnico}&numeroSemana=${numeroSemana}`).pipe(
      map((response: any) => response.horas as Horas),
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }
}