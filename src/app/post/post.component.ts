import { Component, OnInit } from '@angular/core';
import { SpostService } from '../Services/spost.service';
import { SperfilService } from '../Services/sperfil.service';
import { comments } from '../Classes/comments';
import { usuario } from '../Classes/usuario';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private spost : SpostService, private perfil : SperfilService) { }

array : comments[]; 
array2 : usuario[];

  ngOnInit(): void {
    this.spost.getAllTasks()
    .subscribe( todos => {
       //console.log(todos);
       return this.array = todos;
    });

    this.perfil.getAll()
    .subscribe( data => {
        return this.array2 = data;
    });
  }

}
