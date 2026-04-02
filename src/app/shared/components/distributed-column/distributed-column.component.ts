import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexXAxis,
  ApexLegend,
  ApexGrid,
  ApexStroke,
  ApexTooltip,
  NgApexchartsModule,
} from 'ng-apexcharts';

@Component({
  selector: 'app-distributed-column',
  standalone: true,
  imports: [NgApexchartsModule],

  templateUrl: './distributed-column.component.html',
  styleUrl: './distributed-column.component.scss',
})
export class DistributedColumnComponent {
  // ✅ Series
  series: ApexAxisChartSeries = [
    {
      name: 'Distributed',
      data: [21, 22, 10, 28, 16, 21, 13, 30],
    },
  ];

  // ✅ Chart
  chart: ApexChart = {
    type: 'bar',
    height: '320px',
    width: '100%',
    fontFamily: 'Cairo, sans-serif',
  };

  // ✅ Colors (important for distributed)
  colors: string[] = [
    '#008FFB',
    '#00E396',
    '#FEB019',
    '#FF4560',
    '#775DD0',
    '#546E7A',
    '#26a69a',
    '#D10CE8',
  ];

  // ✅ Plot Options
  plotOptions: ApexPlotOptions = {
    bar: {
      horizontal: false,
      columnWidth: '45%',
      borderRadius: 1,
      distributed: true, // 🔥 أهم حاجة
    },
  };

  // ✅ Labels
  dataLabels: ApexDataLabels = {
    enabled: false,
  };

  // ✅ Stroke
  stroke: ApexStroke = {
    show: true,
    width: 2,
    colors: ['transparent'],
  };

  // ✅ X Axis
  xaxis: ApexXAxis = {
    categories: [
      'احمد',
      'حسام',
      'سيف',
      'وسام',
      'روفان',
      'مايان',
      'محمود',
      'ليلي',
    ],
    labels: {
      style: {
        fontFamily: 'Cairo',
      },
    },
  };
  yaxis = {
    show: true,
    labels: {
      show: true,
    },
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: true,
    },
  };

  // ✅ Grid
  grid: ApexGrid = {
    show: true,
  };

  // ✅ Legend
  legend: ApexLegend = {
    show: false,
  };

  // ✅ Tooltip
  tooltip: ApexTooltip = {
    y: {
      formatter: (val: number) => `${val}`,
    },
  };
}
