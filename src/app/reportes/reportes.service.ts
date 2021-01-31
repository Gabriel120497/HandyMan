import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert2';
import { map, catchError } from 'rxjs/operators';

import { Reporte } from "./reporte";

@Injectable({
    providedIn: 'root'
  })
export class ReportesService {

    private endPoint: string = 'http://localhost:8080/api/reportes';
    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

    constructor(private http: HttpClient) {}

    create(reporte: Reporte): Observable<Reporte> {
        return this.http.post(this.endPoint, reporte, { headers: this.httpHeaders }).pipe(
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
}