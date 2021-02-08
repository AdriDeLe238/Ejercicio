import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms'; 
import {ErrorStateMatcher} from '@angular/material/core'; 
import { Router } from '@angular/router';
import { MensajesService } from '../Services/mensajes.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  contraFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private mensaje: MensajesService) { }

  ngOnInit(): void {
  }

  iniciar(correo,contra){
    //console.log(correo, contra); 
    const usr = "deleonadriana681@gmail.com";
    const pass = "adri123";

    if(correo == usr){
      if(contra == pass){
        console.log("si entro al la pagina");
        this.mensaje.mensaje('success', 'BIENVENIDO', '');
        this.router.navigate(['/admin']);
      }else{
        this.mensaje.mensaje('error', '', 'Correo o contraseña incorrecta');
      }
    }else {
      this.mensaje.mensaje('error', '', 'Correo o contraseña incorrecta');
    }
  }

}
