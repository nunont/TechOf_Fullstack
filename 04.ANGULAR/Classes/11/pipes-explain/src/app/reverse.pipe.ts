import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})

export class ReversePipe implements PipeTransform {

  givenString: string = "";

  transform(value: any, extension:string = " cool!"): unknown {
    this.givenString = value;

    let result = this.givenString.split("").reverse().join("");

    return result+extension;
  }

}
