import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { kala } from '../model/kala.model';
import { KalaService } from '../service/kala.service';
import { MatIconModule } from '@angular/material/icon';
import { ProductComponent } from "./product/ui/product.component";
import { MatProgressBarModule } from '@angular/material/progress-bar';
@Component({
  selector: 'app-kala',
  imports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    ProductComponent,
    MatProgressBarModule],
  templateUrl: './kala.component.html',
  styleUrl: './kala.component.scss'
})
export class KalaComponent implements OnInit {
  Kalaservice = inject(KalaService);
  ngOnInit(): void {
    this.refresh();
  }
  action = "list";
  selected: kala | undefined;
  selectedid: string = '';
  busy = false;
  ok(kala: kala) {
    this.busy = true;
    if (this.action == 'create') {
      this.Kalaservice.add(kala).subscribe(result => {
        this.refresh();
        this.action = 'list';
        this.busy = false;
      });
    }
    else if (this.action == 'edit') {
      this.Kalaservice.edit(this.selectedid, kala).subscribe(result => {
        this.refresh();
        this.action = 'list';
        this.busy = false;

      });
    }
    else if (this.action == 'remove') {
      this.Kalaservice.remove(this.selectedid).subscribe(result => {
        this.refresh();
        this.action = 'list';
        this.busy = false;
      });
    }
  }
  cancel() {
    this.action = 'list';
  }
  refresh() {
    this.busy = true;
    this.Kalaservice.list().subscribe(result => {
      this.dataSource = result;
      this.busy = false;
    });
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
  displayedColumns: string[] = ['productname', 'description', 'category', 'brand', 'sku', 'price', 'actions'];
  dataSource: any;

}

