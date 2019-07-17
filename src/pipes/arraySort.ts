import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySort',
})
export class ArraySortPipe implements PipeTransform {

    transform(value: String, ...args) {
        
        return value.substring(0,1);
      }

}