import { Component } from '@angular/core';
import { User } from 'src/app/models/user'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public user:User;
  public imagenPerfil:string;

  constructor(){
    this.user = new User (1, 'Gara', 'Vilches', 'garavilches@gmail.com', '', '12345')
    this.imagenPerfil = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOJnY9mCcLL3zqkGyqU-pI0fWKDZ-pq4sWQ&usqp=CAU"
  }

  public modificar(newName:string, newLast_name:string, newEmail:string){
    this.user.name = newName;
    this.user.last_name = newLast_name;
    this.user.email = newEmail;
    
  }


}
