import { Component, EventEmitter, inject, Inject, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasketbuyService } from '../../../../+shared/+services/backetbuy.service';
import { KalaComponent } from "../../kala/ui/kala.component";
@Component({
  selector: 'app-backet',
  imports: [KalaComponent],
  templateUrl: './backet.component.html',
  styleUrl: './backet.component.scss'
})
export class BacketComponent {
  basketservice = inject(BasketbuyService);
  // @Input()cartcount:any[]=[];

  remove($event: any) {
    this.basketservice.basket = this.basketservice.basket.filter((m: any) => m != $event);
  }
}