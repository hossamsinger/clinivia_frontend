import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { SidebarService } from '../../services/sidebar.services';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(public sidebarService: SidebarService) {}
  openMenu: string | null = null;
  isCollapsed = false;
  isDarkMode = false;
  ngOnInit() {
    this.sidebarService.isCollapsed$.subscribe((state) => {
      this.isCollapsed = state;
    });
  }

  toggleMenu(menu: string) {
    this.openMenu = this.openMenu === menu ? null : menu;
  }
}
