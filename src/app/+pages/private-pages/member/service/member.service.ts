import { inject, Injectable } from '@angular/core';
import { Member } from '../model/member.model';
import { HttpClient } from '@angular/common/http';
// import { membersComponent } from '../ui/members/ui/members.component';
@Injectable({
  providedIn: 'root'
})

export class MemberService {
  lastid = 3;

  private data: Member[] = [
    { id: 1, name: 'شعله', family: 'علی پور', username: 'shap', password: '123' },
  ];
  http = inject(HttpClient);
  async list() {
    return await this.http.get("http://localhost:5196/members/list").toPromise();
  }
  async add(Member: Member) {
    // kala.id = this.lastid++;
    // this.data.push(kala);
    return await this.http.post("http://localhost:5196/members/create", Member).toPromise();
  }
  async edit(id: number, member: Member) {
    // let index = this.data.indexOf(this.data.filter(m => m.id == id)[0] = kala);
    // this.data[index] = kala;
    return await this.http.put("http://localhost:5196/members/update/" + id, member).toPromise();
  }
  async remove(id: number, member: Member) {
    // let index = this.data.indexOf(this.data.filter(m => m.id == id)[0] = kala);
    // this.data=this.data.filter(m=>m.id!=id);
    return await this.http.delete("http://localhost:5196/memberss/delete/" + id).toPromise();
  }
}
