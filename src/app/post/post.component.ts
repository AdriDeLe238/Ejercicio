import { Component, OnInit } from '@angular/core';
import { SpostService } from '../Services/spost.service';
import { SperfilService } from '../Services/sperfil.service';
import { comments } from '../Classes/comments';
import { usuario } from '../Classes/usuario';
import { comen } from '../Classes/comen.'; 
import { ScomenService } from '../Services/scomen.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private spost : SpostService, private perfil : SperfilService, private comen : ScomenService) { }

array : comments; 
array2 : usuario;
c : comen[];

ar: comments;
arr: usuario; 
co : comen[]; 

  ngOnInit(): void {
    this.spost.getjustTask(1)
    .subscribe( todos => {
       //console.log(todos);
       return this.array = todos;
    });

    this.perfil.justuser(1)
    .subscribe( data =>{
      return this.array2 = data; 
    });

    this.comen.get(1)
    .subscribe( dt =>{
      return this.c =dt;
    });

    this.spost.getjustTask(2)
    .subscribe( todo => {
       //console.log(todos);
       return this.ar = todo;
    });

    this.perfil.justuser(2)
    .subscribe( d =>{
      return this.arr = d; 
    });

    this.comen.get(2)
    .subscribe( dat =>{
      return this.co = dat;
    });
  }

}
