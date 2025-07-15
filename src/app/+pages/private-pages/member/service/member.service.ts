import { inject, Injectable } from '@angular/core';
import { Member } from '../model/member.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MemberService {
  lastid = 3;

  private data: Member[] = [
    { id: '', name: 'شعله', family: 'علی پور', username: 'shap', password: '123' },
  ];
  http = inject(HttpClient);
  async list() {
    return await this.http.get("http://localhost:5196/members/list").toPromise();
  }
  async add(Member: Member) {

    return await this.http.post("http://localhost:5196/members/create", Member).toPromise();
  }
  async edit(id: string, Member: Member) {

    return await this.http.put("http://localhost:5196/members/update/" + id, Member).toPromise();
  }
  async remove(id: string, member: Member) {

    return await this.http.delete("http://localhost:5196/members/delete/" + id).toPromise();
  }
}
