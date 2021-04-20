import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Domaine } from '../modele/domaine';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {
  private baseUrl = 'http://localhost:8090/domaines ';

  constructor(private http: HttpClient) { }


      getAllDomaines(): Observable<any> {
              return this.http.get(`${this.baseUrl}`);
      }
      deletedomaine(id: number,token :string): Observable<any> {
        var headers_object = new HttpHeaders();
        headers_object.append('Content-Type', 'application/json');
        headers_object.append('Bearer',token );

        const httpOptions = {
          headers: headers_object
        };
      return this.http.delete(`http://localhost:8090/deletedomaine/${id}`, {responseType: 'text'});
      }

      getDomaineById(id: number,token :string): Observable<Domaine>{
        var headers_object = new HttpHeaders();
        headers_object.append('Content-Type', 'application/json');
        headers_object.append('Bearer',token );
        const httpOptions = {
          headers: headers_object
        };
      return this.http.get<Domaine>(`http://localhost:8090/domaine/${id}`);
      }

      addDomaine(domaine:Domaine,token:string): Observable<Object> {
        var headers_object = new HttpHeaders();
        headers_object.append('Content-Type', 'application/json');
        headers_object.append('Bearer',token );
        const httpOptions = {
          headers: headers_object
        };
           return this.http.post(`http://localhost:8090/adddomaine`, domaine);
           }

      updateDomaine(id: number,domaine: Domaine,token :string): Observable<Object> {
        var headers_object = new HttpHeaders();
        headers_object.append('Content-Type', 'application/json');
        headers_object.append('Bearer',token );
        const httpOptions = {
          headers: headers_object
        };
        return this.http.put(`http://localhost:8090/updatedomaine/${id}`, domaine);
           }
}
