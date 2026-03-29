import { Component, ViewChild } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ChartComponent,
  ApexChart,
  ApexTooltip,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  tooltip: ApexTooltip;
  legend: ApexLegend;
  responsive: ApexResponsive[];
};

@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './donutChart.component.html',
  styleUrls: ['./donutChart.component.scss'],
})
export class DonutChartComponent {
  @ViewChild('chart') chart!: ChartComponent;

  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      // ✅ Values
      series: [44, 55, 13, 33],

      // ✅ Chart config
      chart: {
        type: 'donut',
        height: 250,
      },

      // ✅ Labels
      // labels: ['Completed', 'Pending', 'Cancelled', 'In Progress'],
      labels: ['مكتمل', 'معلق', 'ملغي', 'تحت الانشاء  '],

      // ✅ Tooltip
      tooltip: {
        y: {
          formatter: (val) => `${val} appointments`,
        },
      },

      // ✅ Legend
      legend: {
        position: 'bottom',
      },

      // ✅ Responsive
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
}