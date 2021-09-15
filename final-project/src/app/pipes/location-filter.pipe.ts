import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'locationFilter'
})
export class LocationFilterPipe implements PipeTransform {

  transform(arr: Product[], value: string): Product[] {
    return arr.filter(item => {
      return item.direct.includes(value)
    })
  }

}
