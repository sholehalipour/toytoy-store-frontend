import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { KalasComponent } from "./+pages/public-pages/kalas/ui/kalas.component";
import { BacketComponent } from "./+pages/public-pages/backet/ui/backet.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'toytoy-store-frontend';
  

}
