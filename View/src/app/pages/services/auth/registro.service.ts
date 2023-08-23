import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { RegistroRequest } from './registroRequest';
import { UserRegistro } from './userRegistro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

  registro(credentials:RegistroRequest):Observable<UserRegistro>{
    return this.http.get<UserRegistro>('./assets/data.json').pipe(
      catchError(this.handleError)
    );
  }

  /*Manejo de error de los servicios que realizan peticiones Http*/
  /* Control de errores de respuesta por parte de la API REST*/ 
  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producido un error', error.error)
    }
    else{
      console.error('Backend retornó el código de estado', error.status, error.error)
    }
    return throwError(()=> new Error ('Algo falló. Por favor intente nuevamente.'));
  }
}
