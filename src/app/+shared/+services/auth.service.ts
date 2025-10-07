import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  backend = inject(BackendService);
  check(username: string, password: string,) {
    return this
      .backend
      .post('/auth/login', { username: username, password: password })
  }
}
interface user {
  username: string;
  password: string;
  fullname: string;
  enabled: boolean;

}
