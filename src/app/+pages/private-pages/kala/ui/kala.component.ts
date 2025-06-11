import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { kala } from '../model/kala.model';
import { KalaService } from '../service/kala.service';
import { MatIconModule } from '@angular/material/icon';
import { ProductComponent } from "./product/ui/product.component";
@Component({
  selector: 'app-kala',
  imports: [MatButtonModule,
    MatTableModule,
    MatIconModule, ProductComponent],
  templateUrl: './kala.component.html',
  styleUrl: './kala.component.scss'
})
export class KalaComponent {
  action = "list";
  selected: kala | undefined;
  selectedid: number = 0;
  ok(kala: kala) {
    if (this.action == 'create') {
      this.Kalaservice.add(kala);
    }
    else if (this.action == 'edit') {
      this.Kalaservice.edit(this.selectedid, kala);
    }
    else if (this.action == 'remove') {
      this.Kalaservice.remove(this.selectedid,kala);
    }
    this.refresh();
    this.action = 'list';
  }
  cancel() {
    this.action = 'list';
  }
  refresh() {
    this.dataSource = this.Kalaservice.list();
  }
  create() {
    this.selected = undefined;
    this.action = 'create';
  }
  edit(kala: kala) {
    this.selected = { ...kala };
    this.selectedid = kala.id;
    this.action = 'edit';
  }
  remove(kala: kala) {
    this.selected = { ...kala };
    this.selectedid = kala.id;
    this.action = 'remove';

  }
  Kalaservice = inject(KalaService);
  displayedColumns: string[] = ['title', 'price', 'actions'];
  dataSource = this.Kalaservice.list();

}

