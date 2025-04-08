import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BacketbuyService } from '../../+services/backetbuy.service';
import { KalasComponent } from "../../+pages/public-pages/kalas/ui/kalas.component";
import { BoysComponent } from "../../+pages/public-pages/boys/ui/boys.component";
import { GirlsComponent } from "../../+pages/public-pages/girls/ui/girls.component";
import { VideoComponent } from "../../+pages/public-pages/video/ui/video.component";
import { BrandComponent } from "../../+pages/public-pages/brand/ui/brand.component";
import { NewComponent } from "../../+pages/public-pages/new/ui/new.component";
import { BacketComponent } from "../../+pages/public-pages/backet/ui/backet.component";
import { OffComponent } from "../../+pages/public-pages/off/ui/off.component";
import { LoginComponent } from "../../+pages/public-pages/login/ui/login.component";
import { KalaComponent } from "../../+pages/public-pages/kala/ui/kala.component";

@Component({
  selector: 'app-publicnavigation',
  templateUrl: './publicnavigation.component.html',
  styleUrl: './publicnavigation.component.scss',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterLink,
    KalasComponent,
    BoysComponent,
    GirlsComponent,
    VideoComponent,
    BrandComponent,
    NewComponent,
    BacketComponent,
    OffComponent,
    LoginComponent,
   ]
})
export class PublicnavigationComponent {


  openmenu: string = '';
  boyon() {
    this.openmenu = this.openmenu == '' ? 'boys' : '';
  }
  kalaon() {
    this.openmenu = this.openmenu == '' ? 'kala' : '';
  }
  girlon() {
    this.openmenu = this.openmenu == '' ? 'girls' : '';
  }
  videoon() {
    this.openmenu = this.openmenu == '' ? 'video' : '';
  }
  brandon() {
    this.openmenu = this.openmenu == '' ? 'brand' : '';
  }
  newon() {
    this.openmenu = this.openmenu == '' ? 'new' : '';
  }
  backeton() {
    this.openmenu = this.openmenu == '' ? 'backet' : '';

  }
  offon() {
    this.openmenu = this.openmenu == '' ? 'off' : '';
    }
    loginon() {
      this.openmenu = this.openmenu == '' ? 'login' : '';
      }
  }
