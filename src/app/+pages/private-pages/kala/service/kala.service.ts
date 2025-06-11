import { Injectable } from '@angular/core';
import { kala } from '../model/kala.model';

@Injectable({
  providedIn: 'root'
})
export class KalaService {
  lastid = 3;

  private data: kala[] = [
    { id: 1, title: 'کیف محافظ حیوون خونگی دیجیتالی بیتزی آبی', price: 200000 },
    { id: 2, title: 'ماگ سرامیک طرح هیپو', price: 500000 },
  ];
  list() {
    return this.data;
  }
  add(kala: kala) {
    kala.id = this.lastid++;

    this.data.push(kala);
  }
  edit(id: number, kala: kala) {
    let index = this.data.indexOf(this.data.filter(m => m.id == id)[0] = kala);
    this.data[index] = kala;
  }
  remove(id: number, kala: kala) {
    let index = this.data.indexOf(this.data.filter(m => m.id == id)[0] = kala);
    this.data=this.data.filter(m=>m.id!=id);
  }
}
