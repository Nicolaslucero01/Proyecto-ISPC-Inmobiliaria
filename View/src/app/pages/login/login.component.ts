import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/auth/login.service';
import { LoginRequest } from '../services/auth/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginError:string='';

  formLogin=this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })

  constructor(private formBuilder:FormBuilder, private router:Router, private loginService: LoginService){
    
  }

  get email(){
    return this.formLogin.get('email') as FormControl;
  }

  get password(){
    return this.formLogin.get('password') as FormControl;
  }

  login(){
    if(this.formLogin.valid){
      this.loginService.login(this.formLogin.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError=errorData;
        },
        complete: () =>{
          console.info("el login está completo");
          this.router.navigateByUrl('/users');
          this.formLogin.reset();
        }
      })
      
    }
    else{
      this.formLogin.markAllAsTouched()
      alert('Error al ingresar los datos.')
    }
  }

  

}
