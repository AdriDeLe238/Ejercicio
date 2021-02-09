import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { comen } from '../Classes/comen.';

@Injectable({
  providedIn: 'root'
})

export class ScomenService {

  constructor(private httpclient : HttpClient) { }

  get(idPost: number){
    const path = `https://jsonplaceholder.typicode.com/posts/${idPost}/comments`;
    return this.httpclient.get<comen[]>(path);
  }
}
