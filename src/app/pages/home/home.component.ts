import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public imagenPortada:string;

  constructor(){
    this.imagenPortada = "https://i.pinimg.com/564x/ef/cf/8d/efcf8d889fba2a71baa638165d6076f3.jpg"
  }
}
