import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './app/shared/services/theme.services';
import { licenseKey } from './devextreme-license';
import config from 'devextreme/core/config';

config({
  licenseKey,
});

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.loadTheme();
  }
}
