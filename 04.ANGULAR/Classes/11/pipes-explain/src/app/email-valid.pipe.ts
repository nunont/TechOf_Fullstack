import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailValid'
})
export class EmailValidPipe implements PipeTransform {

  transform(value: any ): unknown {
    if(value.includes("@")){
      return value;
    }
    else {
      return "email is not valid";
    }
  }

}
