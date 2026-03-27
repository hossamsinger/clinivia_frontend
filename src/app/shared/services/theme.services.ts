import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDark = false;

  toggleTheme() {
    this.isDark = !this.isDark;
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  loadTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      this.isDark = true;
    }
  }
}
