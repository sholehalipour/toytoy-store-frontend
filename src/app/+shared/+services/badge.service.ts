import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

 private cartcount = 0;

  getcartcount(): number {
    return this.cartcount;
  }

  setcartcount(count: number): void {
    this.cartcount = count;
  }

  increment(): void {
    this.cartcount++;
  }
}
