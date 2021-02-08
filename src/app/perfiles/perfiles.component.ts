import { Component, OnInit } from '@angular/core';
import { SperfilService } from '../Services/sperfil.service';
import { usuario } from '../Classes/usuario';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent implements OnInit {

  constructor(private perfil : SperfilService) { }
  array : usuario[]; 

  ngOnInit() {
    this.perfil.getAll()
    .subscribe( todos => {
        console.log(todos);
        return this.array = todos;
    });
  }
  }
  /*getAll(){
    this.perfil.getAll()
    .subscribe( todos => {
        console.log(todos);
        return this.array = todos;
    });
  }*/

