import { Injectable } from '@angular/core';
import { Persona } from '../model/Persona.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona>{
    return this.http.get<Persona>(this.URL+'/traer/perfil');
  }

  public save(persona: Persona): Observable<any>{
    return this.http.post<Persona>(this.URL + 'crear', persona);
  }
  public update(persona: Persona): Observable<any>{
    return this.http.put<any>(this.URL + 'update', persona);
  }



}
