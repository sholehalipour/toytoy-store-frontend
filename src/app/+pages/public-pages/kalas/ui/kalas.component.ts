import { Component, EventEmitter, inject, Inject, Input, Output } from '@angular/core';
import { KalaComponent } from "../../kala/ui/kala.component";
import { BasketbuyService } from '../../../../+shared/+services/backetbuy.service';
import { BusyService } from '../../../../+shared/+services/busy.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BadgeService } from '../../../../+shared/+services/badge.service';
@Component({
  selector: 'app-kalas',
  imports: [KalaComponent,
    MatProgressSpinnerModule,

  ],
  templateUrl: './kalas.component.html',
  styleUrl: './kalas.component.scss'
})
export class KalasComponent {
  busyalarm = inject(BusyService);
  basketservice = inject(BasketbuyService);

  remove($event: any) {
    this.basketservice.basket = this.basketservice.basket.filter((m: any) => m != $event);
  }
  buy($event: any) {

    if (this.basketservice.basket.every((p: { id: any; }) => p.id != $event.id)) {
      this.basketservice.basket.push($event);

    }
  }
  products = [
    { id: 1000, title: 'عروسک رباتیک 45 سانتی استیچ Stitch', price: "9800000", pic: 'robaticarosak.jpg' },
    { id: 1001, title: 'عروسک رباتیک Furlings مدل Cleo', price: "4900000", pic: 'Furlings Cle.jpg' },
    { id: 1002, title: 'کیف جادویی پرس پتس هولوگرافیک مدل یونیکورن Purse Pets', price: "1800000", pic: 'bagmagic.jpg' },
    { id: 1003, title: 'پیشی رباتیک Purro', price: "4200000", pic: 'catrobatic.jpg' },
    { id: 1004, title: 'ست 2 در 1 بتموبیل تبدیل شونده بتمن DC Comics', price: "4200000", pic: 'batman.jpg' },
    { id: 1005, title: 'یخچال جادویی کوکیز Cookeez Makery', price: "3400000", pic: 'yakhchalmagic.jpg' },
    { id: 1006, title: 'پیشی رباتیک Purro', price: "4200000", pic: 'catrobatic.jpg' },
    { id: 1007, title: 'ست 2 در 1 بتموبیل تبدیل شونده بتمن DC Comics', price: "4200000", pic: 'batman.jpg' },
    { id: 1008, title: 'یخچال جادویی کوکیز Cookeez Makery', price: "3400000", pic: 'yakhchalmagic.jpg' },
  ];

}
