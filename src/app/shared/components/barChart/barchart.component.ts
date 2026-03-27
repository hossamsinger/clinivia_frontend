import { Component } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, NgApexchartsModule } from 'ng-apexcharts';
@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './barchart.component.html',
  styleUrl: './barchart.component.scss',
})
export class BarChartComponent {
  series: ApexAxisChartSeries = [
    {
      name: 'Sales',
      data: [10, 20, 15, 30],
    },
  ];

  chart: ApexChart = {
    type: 'bar',
    height: 350,
  };

  xaxis: ApexXAxis = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr'],
  };
}
