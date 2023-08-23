import { Injectable } from '@angular/core';
import { Inmueble } from '../model/inmueble.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  URL= '....';

  constructor(private http: HttpClient) { }
    get(): Observable<Inmueble[]>{
    console.log("El servicio inmueble esta corriendo");
    return this.http.get<Inmueble[]>(this.URL + 'lista');
  }

  detail(id: number): Observable<Inmueble>{
    return this.http.get<Inmueble>(this.URL + `detail/${id}`);
  } 

 save(inmueble: Inmueble): Observable<any>{
    return this.http.post<any>(this.URL + 'create', inmueble);
  }

  edit(inmueble: Inmueble): Observable<any>{
    return this.http.put<any>(this.URL + 'update', inmueble);
  }

 delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}
