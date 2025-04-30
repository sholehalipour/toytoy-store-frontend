import { Component, inject, Inject } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { BasketbuyService } from '../../../../+services/backetbuy.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BusyService } from '../../../../+services/busy.service';
import {MatCardModule} from '@angular/material/card';
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
  buy(p: any) {
    if (this.action == 'buy') {
      this.onBuy.emit(this.product);
    }
    else {
      this.onRemove.emit(p);
    }
  }

}
