import { Component, inject, Inject, Pipe } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { BasketbuyService } from '../../../../+shared/+services/backetbuy.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BusyService } from '../../../../+shared/+services/busy.service';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { BadgeService } from '../../../../+shared/+services/badge.service';
@Component({
  selector: 'app-kala',
  imports: [MatProgressSpinnerModule,
    MatCardModule,
    CurrencyPipe,
  ],
  templateUrl: './kala.component.html',
  styleUrl: './kala.component.scss',
})
export class KalaComponent {
  busyalarm = inject(BusyService);
  basketservice = inject(BasketbuyService);
  @Input() product: any;
  @Output() onBuy = new EventEmitter<any>;
  @Output() onRemove = new EventEmitter<any>;
  @Input() action = 'buy';
  @Output() itemadd = new EventEmitter<any>();
  badgservice = inject(BadgeService)
  addToCart(item: any) {

    this.badgservice.increment();
    this.badgservice.getcartcount();
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
