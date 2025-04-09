import { Component, inject, Inject } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { BasketbuyService } from '../../../../+services/backetbuy.service';
@Component({
  selector: 'app-kala',
  imports: [],
  templateUrl: './kala.component.html',
  styleUrl: './kala.component.scss'
})
export class KalaComponent {
  basketservice = inject(BasketbuyService);
  @Input() product: any;
  @Output() onBuy = new EventEmitter<any>;
  @Output() onRemove = new EventEmitter<any>;
  @Input() action = 'buy';
  buy(p: any) {
    if (this.action == 'buy') {

      this.onBuy.emit(this.product);
    }
    else {
      this.onRemove.emit(p);
    }
  }

}
