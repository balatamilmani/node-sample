import { Inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserServiceService {

  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get("http://localhost:8081/listUsers").toPromise();
  }  
  
}
