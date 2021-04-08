import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  title = 'Get from db.json & Post to db.json';
  people:Person[];
  person = new Person();
  
  constructor(private apiService:ApiService) {}
 
  //on initial load, invoke refreshPeople method
  ngOnInit() {
    this.refreshPeople()
  }

  //invoke getPeople() from api.service.ts
    //subscribe to getPeople() method of our ApiService to make an HTTP get() request to get the list of people.
  refreshPeople() {
    this.apiService.getPeople()
      .subscribe(data => {
        console.log(data)
        this.people=data;
      })      
 
  }

  //subscribe to the apiService.addPerson()
    //Once the post request finishes, call refreshPeople() to get updated list of people
   addPerson() {
    console.log("Person obj w/ name & email: ",this.person)
    this.apiService.addPerson(this.person)
      .subscribe(data => {
        this.refreshPeople();
      })      
  }
  
}
