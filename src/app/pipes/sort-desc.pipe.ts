import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortDesc'
})
export class SortDescPipe implements PipeTransform {
  transform(value: string, args?: any): any {
//    console.log(value.length)
    let limit = args.length > 0 ? parseInt(args[0], 180) : 100;
    let trail = args.length > 1 ? args[1] : '...';
  //  console.log(trail);
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
