import {  Component, EventEmitter, Input, input, OnChanges, Output, output, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Member } from '../../../model/member.model';
@Component({
  selector: 'app-members',
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class membersComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (this.current) {
      this.data = this.current;
    }
  }
  @Output() onCancel = new EventEmitter();
  @Output() onOk = new EventEmitter<Member>();
  @Input() current: Member | undefined;
  @Input() action: string = '';
  data: Member = { id: 0, name: '', family: '', username: '', password: '' };

  ok() {
    this.onOk.emit(this.data);
  }
}
