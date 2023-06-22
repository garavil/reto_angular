import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { NgForm } from '@angular/forms';


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
    this.bookService.getAll().subscribe((data:Book[])=>{
      this.books = data;
    })
  }
  public title:string = '';
  public type:string = '';
  public author:string = '';
  public price:number;
  public photo:string = '';
  public id_book:number;

  editBook(title, type, author, price, photo, id_book, id_user){
    let nuevolibro = new Book(this.title,this.type,this.author,this.price,this.photo,this.id_book,0)

    this.bookService.editBook(nuevolibro).subscribe((data:Book[])=>{
      this.books = data;
      this.route.navigateByUrl("/books")
    });
    
  }
}
