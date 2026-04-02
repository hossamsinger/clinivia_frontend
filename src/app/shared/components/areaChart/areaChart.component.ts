import { Component, ViewChild } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ChartComponent,
  ApexChart,
  ApexStroke,
  ApexTooltip,
  ApexFill,
  ApexAxisChartSeries,
  ApexPlotOptions,
  ApexXAxis,
  ApexGrid,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  fill: ApexFill;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  grid: ApexGrid;
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
      grid: {
        show: true,
      },
      chart: {
        type: 'area',
        height: 170,
        sparkline: {
          enabled: true,
        },
        fontFamily: 'Cairo, sans-serif',
      },

      plotOptions: {
        bar: {
          columnWidth: '50%',
          borderRadius: 4,
        },
      },

      stroke: {
        show: false, // bars don’t need stroke usually
      },

      fill: {
        colors: ['#4d07db'], // solid color instead of gradient
      },

      tooltip: {
        enabled: true,
        y: {
          formatter: (val) => `${val} appointments`,
        },
      },

      xaxis: {
        categories: [],
      },
    };
  }
}
