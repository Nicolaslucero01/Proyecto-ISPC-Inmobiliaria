import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { UsersComponent } from './users/users.component';
import { SharedModule } from '../shared/shared.module';
import { Pagina404Component } from './pagina404/pagina404.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    GaleriaComponent,
    UsersComponent,
    Pagina404Component,
    RegistroComponent
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    GaleriaComponent,
    UsersComponent,
    RegistroComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
