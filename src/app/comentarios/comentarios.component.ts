import { Component, OnInit } from '@angular/core';
import { ScomenService } from '../Services/scomen.service';
import { comments } from '../Classes/comments';


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
