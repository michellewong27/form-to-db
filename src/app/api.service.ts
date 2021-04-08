//create a Service, which is responsible to send HTTP Requests

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from './person';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({providedIn:'root'})
export class ApiService {
 
  baseURL: string = "http://localhost:3000/";

 //inject HttpClient using the Dependency Injection
  constructor(private http: HttpClient) {
  }
 
  //getPeople() sends an HTTP GET request to get the list of persons
  getPeople(): Observable<Person[]> {
    console.log('getPeople method'+this.baseURL + 'people')
    return this.http.get<Person[]>(this.baseURL + 'people')
  }


 //addPerson(), send HTTP POST request to insert a new person in the backend
  //Since sending data as JSON, need to set 'content-type': 'application/json' in the HTTP header
  //The JSON.stringify(person) converts the person object into a JSON string
  addPerson(person:Person): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log("content for it",body)
    //then use http.post() using URL, body & headers
      // post() returns an observable. Hence we need to subscribe to it
    return this.http.post(this.baseURL + 'people', body,{'headers':headers})
  }
 
}