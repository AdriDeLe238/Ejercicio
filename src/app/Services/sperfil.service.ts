import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuario } from '../Classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class SperfilService {

  constructor(private httpclient : HttpClient) { }

  getAll(){
    const path = 'https://jsonplaceholder.typicode.com/users';
    return this.httpclient.get<usuario[]>(path);
  }
}
