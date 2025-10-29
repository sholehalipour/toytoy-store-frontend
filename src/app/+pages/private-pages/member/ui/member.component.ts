import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MemberService } from '../service/member.service';
import { MatIconModule } from '@angular/material/icon';
import { membersComponent } from './members/ui/members.component';
import { Member } from '../model/member.model';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@Component({
  selector: 'app-member',
  imports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    membersComponent,
    MatProgressBarModule
  ],
  templateUrl: './member.component.html',
  styleUrl: './member.component.scss'
})
export class MemberComponent implements OnInit {
  memberservice = inject(MemberService);

  ngOnInit(): void {
    this.refresh();
  }
  action = "list";
  selected: Member | undefined;
  selectedid: string = '';
  busy = false;
  ok(member: Member) {
    this.busy = true;
    if (this.action == 'create') {
      this.memberservice.add(member).subscribe(result => {
        this.refresh();
        this.action = 'list';
        this.busy = false;
      });
    }
    else if (this.action == 'edit') {
      this.memberservice.edit(this.selectedid, member).subscribe(result => {
        this.refresh();
        this.action = 'list';
        this.busy = false;

      });
    }
    else if (this.action == 'remove') {
      this.memberservice.remove(this.selectedid).subscribe(result => {
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
    this.memberservice.list().subscribe(result => {
      this.dataSource = result;
      this.busy = false;

    });
  }
  create() {
    this.selected = undefined;
    this.action = 'create';
  }
  edit(member: Member) {
    this.selected = { ...member };
    this.selectedid = member.id;
    this.action = 'edit';
  }
  remove(member: Member) {
    this.selected = { ...member };
    this.selectedid = member.id;
    this.action = 'remove';
  }
  displayedColumns: string[] = ['name', 'family', 'username', 'actions'];
  dataSource: any;
}