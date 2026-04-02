import { NgApexchartsModule } from 'ng-apexcharts';
import { Component } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexStroke,
  ApexFill,
  ApexLegend,
} from 'ng-apexcharts';

@Component({
  selector: 'app-radial-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './radialbarchart.component.html',
  styleUrl: './radialbarchart.component.scss',
})
export class RadialChartComponent {
  // ✅ Series
  series: ApexNonAxisChartSeries = [75, 65, 55];

  // ✅ Chart
  chart: ApexChart = {
    type: 'radialBar',
    height: 260,
  };

  // ✅ Labels
  labels: string[] = ['Face To Face', 'E-Consult', 'Available'];

  // ✅ Colors
  colors: string[] = ['#f39c12', '#3498db', '#2ecc71'];

  // ✅ Stroke
  stroke: ApexStroke = {
    lineCap: 'round',
  };

  // ✅ Fill
  fill: ApexFill = {
    opacity: 1,
  };

  // ✅ Plot Options (أهم جزء 🔥)
  plotOptions: ApexPlotOptions = {
    radialBar: {
      inverseOrder: true,
      hollow: {
        size: '45%',
      },
      track: {
        background: '#eee',
        margin: 8,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: false,
        },
        total: {
          show: true,
          label: 'Total',
          formatter: () => '249',
        },
      },
    },
  };

  // ✅ Legend (اختياري)
  legend: ApexLegend = {
    show: false,
  };
}
