import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPrice'
})
export class PriceFilterPipe implements PipeTransform {

  transform(items: any[], price: number): any[] {
    if (!items) {
      return []
    }
    if (price <= 0) {
      return items
    }
    return items.filter((item) => {
      return item.price > price
    })
  }

}
