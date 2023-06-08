import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {

  books = []

  insertar(titulo:string, tapa:string, autor:string, precio:number, foto:string, codigo:number){
    let nuevo = new Book (titulo, tapa, autor, precio, foto, codigo)
    this.books.push(nuevo)

  }
}
