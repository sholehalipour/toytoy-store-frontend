import { Component, EventEmitter, Input, input, OnChanges, Output, output, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { kala } from '../../../model/kala.model';
@Component({
  selector: 'app-product',
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (this.current) {
      this.data = this.current;
    }
  }
  @Output() onCancel = new EventEmitter();
  @Output() onOk = new EventEmitter<kala>();
  @Input() current: kala | undefined;
  @Input()action:string='';
  data: kala = { id: 0, title: '', price: 0 }

  ok() {
    this.onOk.emit(this.data)
  }
}
