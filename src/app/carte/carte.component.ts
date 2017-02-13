import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Carte } from '../carte'

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent {

  @Input() carte: Carte
  @Output() carteEvent = new EventEmitter()

  select() {
    if (this.carte.clickable) {
      this.carte.clickable = false
      this.carte.selected = true
      this.carteEvent.emit(this.carte)
    }
  }

}
