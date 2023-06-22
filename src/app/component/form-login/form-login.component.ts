import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  public email: string = '';
  public password: string ='';
  
  onSubmit(form:NgForm){
    console.log('Correo:', this.email);
    console.log('Contraseña:', this.password);
  }

}
