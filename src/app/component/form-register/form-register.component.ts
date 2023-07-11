import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  public registro :FormGroup;
  public user: User;

  constructor(public userService : UserService, public router: Router){}
  
  ngOnInit() {
    this.registro = new FormGroup({
      'nombre': new FormControl(null, Validators.required),
      'apellido': new FormControl(null,Validators.required),
      'correo': new FormControl(null, [Validators.required, Validators.email]),
      'pass': new FormControl(null, Validators.required),
      'pass2': new FormControl(null, Validators.required)
    });
  }
  // onSubmit(form:FormGroup){
  //   console.log('Nombre:', this.registro.get('nombre').value);
  //   console.log('Correo:', this.registro.get('correo').value);
  //   console.log('Contraseña:', this.registro.get('pass').value);
  //   console.log('Contraseña:', this.registro.get('pass2').value);
  // }

  onSubmit(){
    let nombre = this.registro.get('nombre')?.value
    let apellido = this.registro.get('apellido')?.value
    let correo = this.registro.get('correo')?.value
    let pass = this.registro.get('pass')?.value
    let pass2 = this.registro.get('pass2')?.value

    this.user = new User(0, nombre, apellido, correo, ".", pass)
    if (pass === pass2){
      this.userService.register(this.user).subscribe((data:any)=>{
        console.log(data);
        
      })
    } else{
      console.log("Las contraseñas no coinciden");
      
    }
  }

}
