import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';


@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent {
  public books: Book[];
  constructor(
    public route:Router,
    public bookService: BooksService
  ){
    this.bookService.getAll()
  }
  editar(title:string, type:string, author:string, price:number, photo:string, id_book:number, id_user:number){
    let nuevolibro = {
      title,
      type,
      author,
      price,
      photo,
      id_book,
      id_user
    }

    this.bookService.editBook(nuevolibro);
    this.route.navigateByUrl("/books")
  }
}
