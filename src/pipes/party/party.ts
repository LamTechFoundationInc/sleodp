import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PartyPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'party',
})
export class PartyPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, ...args) {
    // return value.toLowerCase();
    let keys = [];
	for (let key in value) {
		keys.push({key: key, value: value[key]});
	}
	return keys;
  }
}
