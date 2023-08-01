import { Component , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-minus',
  templateUrl: './minus.component.html',
  styleUrls: ['./minus.component.css']
})
export class MinusComponent {
  
  @Output() minusNumber = new EventEmitter<any>();

  decrease(){
    this.minusNumber.emit();
  }
}
