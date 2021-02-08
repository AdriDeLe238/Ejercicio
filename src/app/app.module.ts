import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './signin/signin.component';
import {AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { PostComponent } from './post/post.component'; 

import { SpostService } from './Services/spost.service';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    MenuComponent,
    FooterComponent,
    InicioComponent,
    PerfilesComponent,
    ComentariosComponent,
    PostComponent,
    PublicacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule, 
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule, NgbModule
  ],
  providers: [SpostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
