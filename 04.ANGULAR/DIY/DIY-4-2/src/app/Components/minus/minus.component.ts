import { Component , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-minus',
  templateUrl: './minus.component.html',
  styleUrls: ['./minus.component.css']
})

export class MinusComponent {
  @Output() decreaseEvent = new EventEmitter();

  minus() {
    this.decreaseEvent.emit();
  }
}
