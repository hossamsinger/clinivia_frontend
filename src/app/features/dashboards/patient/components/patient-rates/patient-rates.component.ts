import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-rates',
  standalone: true,
  imports: [],
  templateUrl: './patient-rates.component.html',
  styleUrl: './patient-rates.component.scss',
})
export class PatientRatesComponent {
  series = [{ name: 'Heart Rate', data: [130, 120, 125, 119] }];

  chart = {
    type: 'line',
    height: 250,
    toolbar: { show: false },
  };

  xaxis = {
    categories: ['Tue', 'Wed', 'Thu', 'Fri'],
  };

  stroke = { curve: 'smooth', width: 4 };

  dataLabels = { enabled: true };

  grid = { borderColor: '#eee' };
}
