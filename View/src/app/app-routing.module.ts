import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AboutComponent } from './shared/about/about.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';

//Rutas de navegacion
const routes: Routes = [
  {path: 'home', component: HomeComponent, children:[
    {path: 'home-nosotros', component: AboutComponent}
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'users', component: UsersComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'propiedades',  component:GaleriaComponent},
  //{path: '**', component: Pagina404Component},
  {path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
