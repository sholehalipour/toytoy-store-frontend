import { inject, Injectable } from '@angular/core';
import { kala } from '../model/kala.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KalaService {
  http = inject(HttpClient);
  async list() {
    return await this.http.get("http://localhost:5196/products/List").toPromise();
  }
  async add(kala: kala) {

    return await this.http.post("http://localhost:5196/products/Create", kala).toPromise();
  }
  async edit(id: string, kala: kala) {

    return await this.http.put("http://localhost:5196/products/Update/" + id, kala).toPromise();
  }
  async remove(id: string, kala: kala) {

    // this.data=this.data.filter(m=>m.id!=id);
    return await this.http.delete("http://localhost:5196/products/Delete/" + id).toPromise();
  }
}
