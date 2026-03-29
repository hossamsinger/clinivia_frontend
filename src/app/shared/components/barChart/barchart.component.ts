import { NgApexchartsModule } from 'ng-apexcharts';
import { Component } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './barchart.component.html',
  styleUrl: './barchart.component.scss',
})
export class BarChartComponent {

  // ✅ Series
  series: ApexAxisChartSeries = [
    {
      name: 'Sales',
      data: [10, 20, 15, 30],
    },
  ];

  // ✅ Chart
  chart: ApexChart = {
    type: 'bar',
    height: 180,
  };

  plotOptions: ApexPlotOptions = {
    bar: {
      horizontal: false,
      columnWidth: "35%",
      borderRadius: 6, 
    }
  };

  // ✅ Labels
  dataLabels: ApexDataLabels = {
    enabled: false
  };

  // ✅ Stroke
  stroke: ApexStroke = {
    show: true,
    width: 2,
    colors: ["transparent"]
  };

  // ✅ X Axis
  xaxis: ApexXAxis = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr'],
  };

  // ✅ Fill
  fill: ApexFill = {
    opacity: 1
  };

  // ✅ Tooltip
  tooltip: ApexTooltip = {
    y: {
      formatter: (val: number) => `$ ${val} thousands`
    }
  };

  // ✅ Optional Y axis
  yaxis: ApexYAxis = {
    title: {
      text: "Sales (Thousands)"
    }
  };

  // ✅ Optional Legend
  legend: ApexLegend = {
    show: true
  };
}