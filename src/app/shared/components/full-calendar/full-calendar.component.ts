import { Component } from '@angular/core';
// import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-full-calendar',
  standalone: true,
  // imports: [MatDatepickerModule],
  templateUrl: './full-calendar.component.html',
  styleUrl: './full-calendar.component.scss',
})
export class FullCalendarComponent {
  dateClass = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;

    const events: any = {
      '2026-3-5': ['follow', 'ward'],
      '2026-3-8': ['ward', 'consult'],
      '2026-3-14': ['consult', 'consult'],
      '2026-3-18': ['poly', 'surgery'],
      '2026-3-19': ['consult'],
      '2026-3-23': ['surgery'],
      '2026-3-26': ['follow', 'follow'],
      '2026-3-27': ['evaluation'],
      '2026-3-30': ['poly', 'follow'],
      '2026-3-31': ['poly', 'consult'],
    };

    const key = `2026-${month}-${day}`;

    if (events[key]) {
      return ['has-events', ...events[key]];
    }

    return '';
  };
}
