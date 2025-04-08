import { Component, Inject, Input } from '@angular/core';
import { KalaComponent } from "../../kala/ui/kala.component";
import { BacketComponent } from "../../backet/ui/backet.component";
import { BacketbuyService } from '../../../../+services/backetbuy.service';

@Component({
  selector: 'app-kalas',
  imports: [KalaComponent],
  templateUrl: './kalas.component.html',
  styleUrl: './kalas.component.scss'
})
export class KalasComponent {
  backetservice = Inject(BacketbuyService);
  remove($event: any) {
    this.backetservice.backet = this.backetservice.backet.filter((m: any) => m != $event);
  }
  buy($event: any) {
  if(this.backetservice.backet.every((p: { id: any; }) => p.id != $event.id)) {
    this.backetservice.basket.push($event);
  }
}
products = [
  { id: 1000, title: 'عروسک رباتیک 45 سانتی استیچ Stitch', price: "9800000 تومان", pic: 'robaticarosak.jpg' },
  { id: 1001, title: 'عروسک رباتیک Furlings مدل Cleo', price: "4900000 تومان", pic: 'Furlings Cle.jpg' },
  { id: 1002, title: 'کیف جادویی پرس پتس هولوگرافیک مدل یونیکورن Purse Pets', price: "1800000 تومان", pic: 'bagmagic.jpg' },
  { id: 1003, title: 'پیشی رباتیک Purro', price: "4,200,000 تومان", pic: 'catrobatic.jpg' },
  { id: 1004, title: 'ست 2 در 1 بتموبیل تبدیل شونده بتمن DC Comics', price: "4200000 تومان", pic: 'batman.jpg' },
  { id: 1005, title: 'یخچال جادویی کوکیز Cookeez Makery', price: "3400000 تومان", pic: 'yakhchalmagic.jpg' },
  { id: 1006, title: 'پیشی رباتیک Purro', price: "4,200,000 تومان", pic: 'catrobatic.jpg' },
  { id: 1007, title: 'ست 2 در 1 بتموبیل تبدیل شونده بتمن DC Comics', price: "4200000 تومان", pic: 'batman.jpg' },
  { id: 1008, title: 'یخچال جادویی کوکیز Cookeez Makery', price: "3400000 تومان", pic: 'yakhchalmagic.jpg' },
];

}
