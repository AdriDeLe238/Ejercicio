import { Component } from '@angular/core';
import { SpostService } from './Services/spost.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(private spost : SpostService){

  }

  ngonInit(){
    
  }
}
