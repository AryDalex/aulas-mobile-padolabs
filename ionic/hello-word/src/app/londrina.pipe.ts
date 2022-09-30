import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'londrina'
})
export class LondrinaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
