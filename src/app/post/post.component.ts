import { Component, OnInit } from '@angular/core';
import { SpostService } from '../Services/spost.service';
import { comments } from '../Classes/comments';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private spost : SpostService) { }

array : comments[]; 

 getAllTasks(){
   this.spost.getAllTasks()
   .subscribe( todos => {
      //console.log(todos);
      this.array = todos;
   });
 }
  ngOnInit(): void {

  }

}
