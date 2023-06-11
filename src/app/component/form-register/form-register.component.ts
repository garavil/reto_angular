import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  public registro :FormGroup;
  ngOnInit() {
    this.registro = new FormGroup({
      'nombre': new FormControl(null, Validators.required),
      'correo': new FormControl(null, [Validators.required, Validators.email]),
      'pass': new FormControl(null, Validators.required),
      'pass2': new FormControl(null, Validators.required)
    });
  }
  onSubmit(form:FormGroup){
    console.log('Nombre:', this.registro.get('nombre').value);
    console.log('Correo:', this.registro.get('correo').value);
    console.log('Contraseña:', this.registro.get('pass').value);
    console.log('Contraseña:', this.registro.get('pass2').value);
  }

}
