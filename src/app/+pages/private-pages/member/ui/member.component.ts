import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MemberService } from '../service/member.service';
import { MatIconModule } from '@angular/material/icon';
import { membersComponent } from './members/ui/members.component';
import { Member } from '../model/member.model';
@Component({
  selector: 'app-member',
  imports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    membersComponent
  ],
  templateUrl: './member.component.html',
  styleUrl: './member.component.scss'
})
export class MemberComponent implements OnInit {

  ngOnInit(): void {
    this.refresh();
  }
  action = "list";
  selected: Member | undefined;
  selectedid: string = '';
  async ok(member: Member) {
    if (this.action == 'create') {
      await this.memberservice.add(member);
    }
    else if (this.action == 'edit') {
      await this.memberservice.edit(this.selectedid, member);
    }
    else if (this.action == 'remove') {
      await this.memberservice.remove(this.selectedid, member);
    }
    this.refresh();
    this.action = 'list';
  }
  cancel() {
    this.action = 'list';
  }
  async refresh() {
    this.dataSource = await this.memberservice.list();
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
  memberservice = inject(MemberService);
  displayedColumns: string[] = ['name', 'family', 'username', 'actions'];
  dataSource: any;

}

