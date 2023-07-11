import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  public email: string = '';
  public password: string ='';
  public user : User
  public formulario: FormGroup

  constructor(public userService : UserService, public router : Router){}
  
  onSubmit() {

    let correo = this.formulario.get("email")?.value
    let contrasena = this.formulario.get("password")?.value

    this.user = new User(0," "," ",correo," ",contrasena)

    this.userService.login(this.user).subscribe((data:any)=>{
      if(data.error == false){
        this.userService.logueado = true;
        this.userService.user = data.result[0];
        this.router.navigateByUrl('/books');

      }else{
        console.log("No es posible iniciar sesion")
      }

    })
  }

}

