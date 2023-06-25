import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Book} from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() book: Book;
  @Input() par:boolean;
  @Output() datoslibro = new EventEmitter <number>();

  constructor(private bookService: BooksService){}

  enviarTarjeta(){
    const borrado = this.bookService.deleteBook(this.book.id_book);
    if(borrado){
      this.datoslibro.emit(this.book.id_book)
    }
  }
}
