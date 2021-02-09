import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { comments } from '../Classes/comments';

@Injectable({
  providedIn: 'root'
})
export class SpostService {

  constructor(private httpclient : HttpClient) { }

 // getpost():Observable<any>{
  //  return this.httpclient.get("https://jsonplaceholder.typicode.com/posts");
  //}
  getAllTasks(){
    const path = 'https://jsonplaceholder.typicode.com/posts';
    return this.httpclient.get<comments[]>(path);
  }

  getjustTask(idUser :number ){
    const path = `https://jsonplaceholder.typicode.com/posts/?userId=${idUser}`;
    return this.httpclient.get<comments>(path);
  }
  
}