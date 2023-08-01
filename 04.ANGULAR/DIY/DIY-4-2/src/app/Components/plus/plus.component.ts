import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css']
})

export class PlusComponent {
  @Input() currentValue: number = 0;
  @Output() increaseEvent = new EventEmitter<number>();

  plus() {
    if (this.currentValue == 10) {
      return;
    }
    this.currentValue++;

    this.increaseEvent.emit(this.currentValue);
  }
}
