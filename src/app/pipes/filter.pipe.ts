import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchText'
})
export class FilterResults implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    } else {
    args = args.toLowerCase();
    const filteredData = value.filter(item =>{
      return JSON.stringify(item.strSport).toLowerCase().includes(args);
    });
       return filteredData;
    }
  }
}

