import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: Http) { }
  //1. receive the data from components
  create(contactObj){
    //2. send the data to reset api
    return this.http.post('http://localhost:3000/api/contact', contactObj)
      .pipe(map(response => {
          //3. receive rest from rest api
         // console.log(response.json());
          return response.json();
          //4. sent the same resp to components
      }))

  }

  getcontacts(){
    return this.http.get('http://localhost:3000/api/contact')
    .pipe(map(response => {
        //3. receive rest from rest api
       // console.log(response.json());
        return response.json();
        //4. sent the same resp to components
    }))  
  }

  getcontactByid(id){
    return this.http.get('http://localhost:3000/api/contact/'+ id)
    .pipe(map(response => {
        //3. receive rest from rest api
       // console.log(response.json());
        return response.json();
        //4. sent the same resp to components
    }))
  }

  updatecontactByid(data){
    return this.http.put('http://localhost:3000/api/contact/'+ data.contactId, data)
    .pipe(map(response => {
        return response.json();
    }))
  }

  deletecontactByid(data){
    return this.http.delete('https://jsonplaceholder.typicode.com/users/'+ data.id)
    .pipe(map(response => {
        return response.json();
    }))
  }
  
}
