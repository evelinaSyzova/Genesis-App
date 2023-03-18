import { Component } from '@angular/core';
import { LoadingService } from './servises/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Genesis-App';
  constructor(public loadingService: LoadingService) {}
}
