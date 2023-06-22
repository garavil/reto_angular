import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public books: Book[];
  // public buscar: string = '';
  // public filtrar: Book[];

  constructor(public bookService: BooksService){
    this.bookService.getAll().subscribe((data:Book[])=>{
      this.books = data;
    })
  }

  filtrarLibro(id_book){
    if(id_book != ""){
      for (let i = 0; i < this.books.length; i++) {
        if (Number(id_book) == this.books[i].id_book) {
          this.bookService.getOne(Number(id_book)).subscribe((data:Book[])=>{
            this.books = data;
          })
        }else{
          let filtrarLibroarr:Book[] = [];
          for (const book of this.books) {
            if (book.id_book.toString().indexOf(id_book) !== -1) {
              filtrarLibroarr.push(book);
            }
          }
          this.books = filtrarLibroarr;
        }
      }
      
    } else {
      this.bookService.getAll().subscribe((data:Book[])=>{
        this.books = data;
      })
      
    }}


  borrarLibro(id_book){

    this.bookService.deleteBook(id_book).subscribe((data)=>{
      if(data){
        this.bookService.getAll().subscribe((data:Book[])=>{
          this.books = data;
        }); 
      }
    })
  }
}
