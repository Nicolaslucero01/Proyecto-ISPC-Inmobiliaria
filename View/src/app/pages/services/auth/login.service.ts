import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { User } from './user';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(credentials:LoginRequest):Observable<User>{
    return this.http.get<User>('./assets/data.json').pipe(
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
