import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatNumberService {

  constructor() { }

  formatNumber(number: number) {
    return number.toLocaleString('it-IT',
      {
        style: 'currency',
        currency: 'VND'
      });
  }
}
