import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {

  public books: Book[];
  public title:string = '';
  public type:string = '';
  public author:string = '';
  public price:number;
  public photo:string = '';
  public id_book:number;
  constructor(private booksService: BooksService){}
  
  addBook(title:string, type:string, author:string, price:number, photo:string, id_book:number, id_user = 0){
    let newBook = new Book(title, type, author, price, photo, id_book, id_user);

    this.booksService.addBook(newBook).subscribe((data:boolean)=>{
      if(data){
        this.books.push(newBook);
        console.log(data);
        
      }
    })
  }
}




  // constructor(private booksService : BooksService){}

  // addnuevo(title:string, type:string, author:string, price:number, photo:string, id_book:number, id_user:number){
  //   let nuevolibro = {
  //     title,
  //     type,
  //     author,
  //     price,
  //     photo,
  //     id_book,
  //     id_user
  //   }

  //   this.booksService.addBook(nuevolibro);
  // }



