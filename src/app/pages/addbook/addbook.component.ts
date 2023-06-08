import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {

  constructor(private booksService : BooksService){}

  addnuevo(title:string, type:string, author:string, price:number, photo:string, id_book:number, id_user:number){
    let nuevolibro = {
      title,
      type,
      author,
      price,
      photo,
      id_book,
      id_user
    }

    this.booksService.addBook(nuevolibro);
  }

  }

