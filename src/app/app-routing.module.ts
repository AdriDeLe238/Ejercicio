import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { InicioComponent } from './inicio/inicio.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: 'inicio', component: SigninComponent },
  { path: 'admin', component: InicioComponent },
  { path: 'coment', component:ComentariosComponent },
  { path: 'perfil', component: PerfilesComponent },
  { path: 'post', component: PostComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
