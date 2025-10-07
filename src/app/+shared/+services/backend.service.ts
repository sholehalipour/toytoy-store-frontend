import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  http = inject(HttpClient)
  post(api: string, data: any) {
    return this.http.post(environment.server + api, data).pipe(delay(environment.fakeDelay));
  }
  get(api: String) {
    return this.http.get(environment.server + api).pipe(delay(environment.fakeDelay));
  };

}


