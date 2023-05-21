import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Book} from 'src/app/models/book';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() book: Book;
  @Output() datoslibro = new EventEmitter <string>();

  enviarTarjeta(){
    this.datoslibro.emit(this.book.title)
  }
}
