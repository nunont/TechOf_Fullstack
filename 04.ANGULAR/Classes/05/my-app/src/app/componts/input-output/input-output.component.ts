import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})

export class InputOutputComponent {
  @Input()name : string | undefined;

  @Output()deleteRequest = new EventEmitter<string>();
  
  lineThrough = "";

  delete() { 
    console.warn('Child says: emiting deleteRequest event with', this.name);
    this.deleteRequest.emit(this.name);
    this.lineThrough = this.lineThrough ? '' : "line-through";
  }
}
