import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SidebarService } from '../shared/services/sidebar.services';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isCollapsed = false;
  
  constructor(private sidebarService: SidebarService) {
    this.sidebarService.isCollapsed$.subscribe((state) => {
      this.isCollapsed = state;
    });
  }
}
