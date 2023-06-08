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
  public buscar: string = '';
  public filtrar: Book[];

  constructor(public bookService: BooksService){
    this.books = this.bookService.getAll();
    this.filtrar = this.books;
  }

  filtrarLibro(){
    if(this.buscar.trim() === ""){
      this.filtrar = this.books;
    } else {
      let numero_id = Number(this.buscar);
      let libroEncontrado = numero_id ? this.bookService.getOne(numero_id): undefined;
      this.filtrar = libroEncontrado ? [libroEncontrado]:[];
    }
  }

  borrarLibro(datoslibro:number){

    let borrar = this.bookService.delete(datoslibro);
    if(borrar){
      this.books = this.bookService.getAll();
      this.filtrarLibro();
    }
  }
}
