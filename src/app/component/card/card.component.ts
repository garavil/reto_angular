import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Book} from 'src/app/models/book';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() book: Book;
  @Input() par:boolean;
  @Output() datoslibro = new EventEmitter <number>();

  enviarTarjeta(){
    this.datoslibro.emit(this.book.id_book)
  }
}
