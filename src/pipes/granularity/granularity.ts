import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the GranularityPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'granularity',
})
export class GranularityPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], searchText: string) {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();

    return items.filter(it => {
    	return it.toLowerCase().includes(searchText);
    });
  }
}
