import { inject, Injectable } from '@angular/core';
import { kala } from '../model/kala.model';
import { HttpClient } from '@angular/common/http';
import { BackendService } from '../../../../+shared/+services/backend.service';
@Injectable({
  providedIn: 'root'
})
export class KalaService {
  backend = inject(BackendService);
  list() {
    return this.backend.get('/products/list');
  }
  add(kala: kala) {
    return this.backend.post('/products/create', kala);
  }
  edit(id: string, kala: kala) {
    return this.backend.put('/products/update' + id, kala);
  }
  remove(id: string) {
    return this.backend.delete('/products/delete' + id);
  }
}
