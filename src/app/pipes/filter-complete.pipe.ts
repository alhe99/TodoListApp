import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

@Pipe({
  name: 'filterComplete',
  pure: false
})
export class FilterCompletePipe implements PipeTransform {

  transform(listas: List[], complete: boolean = true): List[] {
    return listas.filter(data => data.complete === complete);
  }

}
