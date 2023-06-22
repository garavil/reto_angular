import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {

  public books: Book[]
  constructor(public booksService: BooksService, public router:Router){
    this.booksService.getAll().subscribe((data:Book[]) => {
      this.books = data;
    })
  }
  public title:string = '';
  public type:string = '';
  public author:string = '';
  public price:number;
  public photo:string = '';
  public id_book:number;

  addBook(title:string, type:string, author:string, price:number, photo:string, id_book:number, id_user = 0){
    let newBook = new Book(this.title,this.type,this.author,this.price,this.photo,this.id_book,0);
    this.booksService.addBook(newBook).subscribe((data:Book[])=>{
      this.books = data;
      this.router.navigateByUrl('/books');
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



