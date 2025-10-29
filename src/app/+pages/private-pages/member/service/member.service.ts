import { inject, Injectable } from '@angular/core';
import { Member } from '../model/member.model';
import { HttpClient } from '@angular/common/http';
import { BackendService } from '../../../../+shared/+services/backend.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  backend = inject(BackendService);
  list() {
    return this.backend.get('/members/list');
  }
  add(member: Member) {
    return this.backend.post('/members/create', member);
  }
  edit(id: string, member: Member) {
    return this.backend.put('/members/update' + id, member);
  }
  remove(id: string) {
    return this.backend.delete('/members/delete' + id);
  }
}
