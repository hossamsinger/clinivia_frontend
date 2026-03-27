import { Component, ViewChild } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ChartComponent,
  ApexChart,
  ApexStroke,
  ApexTooltip,
  ApexFill,
  ApexAxisChartSeries,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  fill: ApexFill;
};

@Component({
  selector: 'app-area-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './areaChart.component.html',
  styleUrls: ['./areaChart.component.scss'],
})
export class AreaChartComponent {
  @ViewChild('chart') chart!: ChartComponent;

  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Appointments',
          data: [30, 40, 35, 50, 45, 60, 55, 70, 60, 65],
        },
      ],
      chart: {
        type: 'line',
        height: 80,
        sparkline: {
          enabled: true, // مهم عشان الشكل الصغير
        },
      },
      stroke: {
        curve: 'smooth',
        width: 3,
        colors: ['#7B3FF2'],
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.1,
        },
      },
      tooltip: {
        enabled: false,
      },
    };
  }
}
