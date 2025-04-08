import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BacketbuyService } from '../../../../+services/backetbuy.service';
import { KalaComponent } from "../../kala/ui/kala.component";
import { KalasComponent } from "../../kalas/ui/kalas.component";

@Component({
  selector: 'app-backet',
  imports: [KalaComponent],
  templateUrl: './backet.component.html',
  styleUrl: './backet.component.scss'
})
export class BacketComponent {
 backetservice = Inject(BacketbuyService);
  remove($event: any) {
    this.backetservice.backet = this.backetservice.basket.filter((m: any) => m != $event);
  }
}