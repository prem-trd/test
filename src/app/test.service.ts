import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Test } from '../app/model/test.model';




const headerOption={
  headers:new HttpHeaders({ 'content-Type':'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TestService {
mockUrl = ' http://localhost:3000/Test';

currentEmployee:Test = {
  id:null,
  firstName: null,
  middleName:null,
  lastName: null,
  email:null
}

  constructor(private http:HttpClient) { }
getAllTest(){
return this.http.get(this.mockUrl, headerOption);
}
  // getAllEmployees():Observable<Test[]> {
  //   return this.http.get<Test[]>(this.mockUrl, headerOption);
  // }
}
