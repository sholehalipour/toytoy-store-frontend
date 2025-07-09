import { inject, Injectable } from '@angular/core';
import { kala } from '../model/kala.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KalaService {
  lastid = 3;

  private data: kala[] = [
    { id: 1, productname: 'کیف محافظ حیوون خونگی دیجیتالی بیتزی آبی',description:'',category:'',brand:'',sku:'', price: 200000 },
  ];
  http=inject(HttpClient);
  async list() {
    return await this.http.get("http://localhost:5196/products/list").toPromise();
  }
  async add(kala: kala) {
    // kala.id = this.lastid++;
    // this.data.push(kala);
     return await this.http.post("http://localhost:5196/products/create",kala).toPromise();
  }
  async edit(id: number, kala: kala) {
    // let index = this.data.indexOf(this.data.filter(m => m.id == id)[0] = kala);
    // this.data[index] = kala;
    return await this.http.put("http://localhost:5196/products/update/"+id,kala).toPromise();
  }
 async remove(id: number, kala: kala) {
    // let index = this.data.indexOf(this.data.filter(m => m.id == id)[0] = kala);
    // this.data=this.data.filter(m=>m.id!=id);
    return await this.http.delete("http://localhost:5196/products/delete/"+id).toPromise();
  }
}
