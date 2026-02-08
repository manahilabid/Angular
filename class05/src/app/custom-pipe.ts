import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    console.log(args)
    return `Value:${value}Args:${args}`;
  }

}
