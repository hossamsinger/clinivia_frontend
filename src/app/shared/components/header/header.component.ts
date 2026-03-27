import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.services';
import { ThemeService } from '../../services/theme.services';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;
  isDark = false;
  constructor(
    public sidebarService: SidebarService,
    private themeService: ThemeService,
  ) {}
  ngOnInit() {
    this.sidebarService.isCollapsed$.subscribe((state) => {
      this.isCollapsed = state;
    });
  }
  toggleSidebar() {
    this.sidebarService.toggle();
  }
  toggleTheme() {
    this.isDark = !this.isDark;
    this.themeService.toggleTheme();
  }
}
