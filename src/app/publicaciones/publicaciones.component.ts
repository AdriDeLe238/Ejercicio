import { Component, OnInit } from '@angular/core';
import { SperfilService } from '../Services/sperfil.service';
import { ScomenService } from '../Services/scomen.service'; 
import { SpostService } from '../Services/spost.service'; 

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  constructor(private sperfil : SperfilService, private scomen : ScomenService, private spost : SpostService) { }

  ngOnInit(): void {
  }

}
