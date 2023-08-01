import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-iotest',
  templateUrl: './iotest.component.html',
  styleUrls: ['./iotest.component.css']
})


export class IotestComponent {

  @Input()name: string | undefined;
  @Output()newPersonEvent = new EventEmitter<string>();

  addPerson(value : string) {
    this.newPersonEvent.emit(value);
  }
}
