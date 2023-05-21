import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public books: Book[];

  constructor(){
    this.books = [
      new Book('Frankenstein', 'Tapa dura', 'Mary Shelley', 11.95,'https://cdn.agapea.com/Austral/Frankenstein-i6n12082138.jpg' ),
      new Book('El gato que amaba los libros', 'Tapa blanda', 'Sosuke Natsukawa', 18.90,'https://cdn.agapea.com/GRIJALBO/El-gato-que-amaba-los-libros-i6n21462482.jpg' ),
      new Book('Matilda', 'Tapa blanda', 'Roald Dahl', 10.40, 'https://cdn.agapea.com/Santillana-Educacion-S-L-/Matilda-i6n13414768.jpg'),
      new Book('Harry Potter', 'Tapa dura', 'J.K.Rowling', 23, 'https://m.media-amazon.com/images/I/51-g28vUNDL.jpg'),
      // new Book('1984', 'Tapa blanda', 'George Orwell', 8.95,'https://m.media-amazon.com/images/I/51pAui14H6L._SX326_BO1,204,203,200_.jpg'),
      
    ]
  }

  insertar(titulo:string, tapa:string, autor:string, precio:number, foto:string, codigo:number){
    let nuevo = new Book (titulo, tapa, autor, precio, foto, codigo)
    this.books.push(nuevo)

  }

}
