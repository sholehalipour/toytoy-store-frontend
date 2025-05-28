import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busy = false;
  busyservice() {
    this.busy = true;
    setTimeout(() => {
      this.busy = false;
    }, 3000);
  }
}
