import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(public sidebarService: SidebarService) {}
  toggleSidebar() {
    this.sidebarService.toggle();
  }
}
