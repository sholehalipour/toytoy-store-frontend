import { Routes } from '@angular/router';
import { PublicnavigationComponent } from './+navigations/publicnavigation/publicnavigation.component';
import { PrivatenavigationComponent } from './+navigations/privatenavigation/ui/privatenavigation.component';
import { LoginComponent } from './+pages/public-pages/login/ui/login.component';
import { KalaComponent } from './+pages/public-pages/kala/ui/kala.component';
import * as adminkala from './+pages/private-pages/kala/ui/kala.component';
import { BoysComponent } from './+pages/public-pages/boys/ui/boys.component';
import { GirlsComponent } from './+pages/public-pages/girls/ui/girls.component';
import { VideoComponent } from './+pages/public-pages/video/ui/video.component';
import { BrandComponent } from './+pages/public-pages/brand/ui/brand.component';
import { NewComponent } from './+pages/public-pages/new/ui/new.component';
import { OffComponent } from './+pages/public-pages/off/ui/off.component';
import { DashboardComponent } from './+pages/private-pages/dashboard/ui/dashboard.component';
import { BacketComponent } from './+pages/public-pages/backet/ui/backet.component';
import { KalasComponent } from './+pages/public-pages/kalas/ui/kalas.component';
import { SlideshowComponent } from './+pages/public-pages/slideshow/slideshow.component';

export const routes: Routes = [

    {
        path: 'public', component: PublicnavigationComponent, children: [
            { path: 'kala', component: KalasComponent },
            { path: 'boys', component: BoysComponent },
            { path: 'girls', component: GirlsComponent },
            { path: 'video', component: VideoComponent },
            { path: 'brand', component: BrandComponent },
            { path: 'new', component: NewComponent },
            { path: 'off', component: OffComponent },
            { path: 'backet', component: BacketComponent },
            {path:'home',component:SlideshowComponent},
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },

        ]
    },
    {
        path: 'admin', component: PrivatenavigationComponent, children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'kala', component: adminkala.KalaComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
        ]
    },

    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'public', pathMatch: 'full' },
];

