import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { map, Observable, shareReplay } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { Login } from './models/login';
import { Router, RouterLink } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BusyService } from '../../../../+shared/+services/busy.service';
import { AuthService } from '../../../../+shared/+services/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    RouterLink,
    MatProgressSpinnerModule

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // busy = inject(BusyService);
  auth=inject(AuthService);
  router=inject(Router);
  busy = false;
  massage:string='';
  check() {
    this.busy = true;
   if(this.auth.check(this.login.username,this.login.password)) {
this.router.navigateByUrl('/admin');
  }
  else{
    this.massage=' نام کاربری یا کلمه عبور اشتباه است';
  }
  this.busy=false;
    setTimeout(() => {
      console.log(this.login);
      this.busy = false;
    }, 3000);
  }
  login: Login = { username: '', password: '', keepme: false };
  isvalid() {
    if (this.login.username.trim() == '' || this.login.password == '') {

      return false;
    }
    return true;
  }
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map((result: { matches: any; }) => result.matches),
      shareReplay()
    );
}


