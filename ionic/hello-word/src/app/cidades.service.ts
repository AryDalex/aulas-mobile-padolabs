import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  constructor(private http: HttpClient) { }

  getCitiesByRegion(regiao: any): Observable<object> {

    const url = 'http://172.16.107.82:8080/regions/' + regiao;
    return this.http.get(url);
    
  }

}
