import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], query: string, key: string): any[] {
    if (!query) {
      return items;
    }
    query = query.toLowerCase();
    return items.filter(item => item[key].toLowerCase().includes(query));
  }
}
