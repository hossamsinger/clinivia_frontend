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
  ApexDataLabels,
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
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss'],
})
export class LineChartComponent {
  @ViewChild('chart') chart!: ChartComponent;

  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Heart Rate',
          data: [69, 75, 72, 69, 75, 80, 87],
        },
      ],

      chart: {
        type: 'line', // 👈 الفرق الأساسي
        height: 250,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        fontFamily: 'Cairo, sans-serif',
      },

      grid: {
        show: true,
        borderColor: '#eee',
        strokeDashArray: 4,
      },

      stroke: {
        curve: 'smooth',
        width: 4,
        colors: ['#f5a623'],
      },

      dataLabels: {
        enabled: true,
        style: {
          fontSize: '10px',
        },
      },

      fill: {
        type: 'solid', // 👈 مفيش gradient زي area
        colors: ['#f5a623'],
      },

      tooltip: {
        enabled: true,
        y: {
          formatter: (val) => `${val} bpm`,
        },
      },

      xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        labels: {
          style: {
            colors: '#999',
          },
        },
      },

      plotOptions: {
        bar: {
          columnWidth: '50%',
          borderRadius: 4,
        },
      },
    };
  }
}
