import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books:Book[] = []
  constructor() { }
  getAll():Book[]{
    return this.books
  }
  getOne(id_libro:number):Book{
    return this.books.find(book => book.id_book == id_libro);
  }
  add(book:Book):void{
    this.books.push(book);
  }
  // edit(book:Book):boolean{
    
  // }
  // delete(id_book:number):boolean{

  // }
}
