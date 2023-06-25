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
  public title:string = '';
  public type:string = '';
  public author:string = '';
  public price:number;
  public photo:string = '';
  public id_book:number;
  
  constructor(
    public route:Router,
    public bookService: BooksService
  ){
    this.bookService.getAll().subscribe((data:Book[])=>{
      this.books = data;
    })
  }
 
  editBook(title:string, type:string, author:string, price:number, photo:string, id_book:number, id_user:number){
    let nuevolibro = new Book(title,type, author, price, photo, id_book,0)

    this.bookService.editBook(nuevolibro).subscribe((data:Book[])=>{
      this.books = data;
      this.route.navigateByUrl("/books")
    });
    
  }
}
