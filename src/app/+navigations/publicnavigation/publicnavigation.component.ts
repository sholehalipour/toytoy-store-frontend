import { Component, inject, Input } from '@angular/core';
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
import { MatBadgeModule } from '@angular/material/badge';
import { BasketbuyService } from '../../+shared/+services/backetbuy.service';
import { MatInputModule } from '@angular/material/input';
import { ForoshgahComponent } from "../../+pages/public-pages/foroshgah/foroshgah.component";
import { SlideshowComponent } from "../../+pages/public-pages/slideshow/slideshow.component";

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
    MatBadgeModule,
    MatIconModule,
    MatInputModule,
    ForoshgahComponent,
    SlideshowComponent
  ]
})
export class PublicnavigationComponent {
  // @Input() cartcount: number = 0;
  // itemaddtocart() {
  //   this.cartcount++
  // }
  activepage: 'home' | 'kala' | 'backet' | 'فروشگاه های توی توی' | 'boys' | 'girls' | 'video' | 'login' | 'off' | 'brand' | 'new' = 'home';
  goto(page: 'home' | 'kala' | 'backet' | 'فروشگاه های توی توی' | 'boys' | 'girls' | 'video' | 'login' | 'off' | 'brand' | 'new') {
    this.activepage = page;
  }
}
