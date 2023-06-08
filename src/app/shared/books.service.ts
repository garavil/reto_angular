import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  private books:Book[]
  constructor(){
    
  this.books = [
    new Book('Frankenstein', 'Tapa dura', 'Mary Shelley', 11.95,'https://cdn.agapea.com/Austral/Frankenstein-i6n12082138.jpg', 1 ),
    new Book('El gato que amaba los libros', 'Tapa blanda', 'Sosuke Natsukawa', 18.90,'https://cdn.agapea.com/GRIJALBO/El-gato-que-amaba-los-libros-i6n21462482.jpg', 2 ),
    new Book('Matilda', 'Tapa blanda', 'Roald Dahl', 10.40, 'https://cdn.agapea.com/Santillana-Educacion-S-L-/Matilda-i6n13414768.jpg', 3),
    new Book('Harry Potter', 'Tapa dura', 'J.K.Rowling', 23, 'https://m.media-amazon.com/images/I/51-g28vUNDL.jpg', 4),
    new Book('1984', 'Tapa blanda', 'George Orwell', 8.95,'https://m.media-amazon.com/images/I/51pAui14H6L._SX326_BO1,204,203,200_.jpg',5),
      
    ]

  }

  addBook(book: Book):void{
    this.books.push(book)
  }

  getBook():Book[]{    
    return this.books;
  }

  
  getAll(): Book[] {    
    return this.books;
  }

  getOne(id_libro: number): Book | undefined {
    return this.books.find(book => book.id_book === id_libro);
  }


  editBook(book: Book): boolean {
    let index = this.books.findIndex(b => b.id_book === book.id_book);
    console.log(index)
    if (index !== -1) {
      this.books[index] = book;
      return true;
    }
    return false;
  }

  delete(id_book: number): boolean {
    let index = this.books.findIndex(book => book.id_book === id_book);
    if (index !== -1) {
      this.books.splice(index, 1);
      return true;
    }
    return false;
  }
}
