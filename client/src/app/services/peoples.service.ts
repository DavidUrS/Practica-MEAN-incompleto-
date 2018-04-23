import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Peoples } from "../components/peoples/models/peoples";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PeoplesService {
  private  api: string = 'http://localhost:3000/users';
  constructor(private http : HttpClient) {
  }

  getPeoples(): Observable<Peoples[]>{
    return this.http.get<Peoples[]>(this.api);
  }

  addPeople(newPeople:Peoples): Observable<any>{
     let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post<Peoples[]>(this.api,newPeople, {headers: headers});
  }

  deletePeople(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.delete<Peoples>(this.api+'/'+id, {headers: headers});
  }


}
