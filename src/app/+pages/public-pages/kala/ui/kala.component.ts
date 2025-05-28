import { Component, inject, Inject } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { BasketbuyService } from '../../../../+shared/+services/backetbuy.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BusyService } from '../../../../+shared/+services/busy.service';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-kala',
  imports: [MatProgressSpinnerModule,
    MatCardModule
  ],
  templateUrl: './kala.component.html',
  styleUrl: './kala.component.scss'
})
export class KalaComponent {
  busyalarm = inject(BusyService);
  basketservice = inject(BasketbuyService);
  @Input() product: any;
  @Output() onBuy = new EventEmitter<any>;
  @Output() onRemove = new EventEmitter<any>;
  @Input() action = 'buy';
  @Output() itemadd = new EventEmitter<any>();
  cartcount: any;

  addtocart() {
    this.itemadd.emit();
    this.cartcount++
  }

buy(p: any) {
  if (this.action == 'buy') {
    this.onBuy.emit(this.product);
  }
  else {
    this.onRemove.emit(p);
  }
}

}
