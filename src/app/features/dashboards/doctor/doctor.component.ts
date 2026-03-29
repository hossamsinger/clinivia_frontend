import { Component } from '@angular/core';
import { AreaChartComponent } from '../../../shared/components/areaChart/areaChart.component';
import { BarChartComponent } from '../../../shared/components/barChart/barchart.component';
import { DonutChartComponent } from '../../../shared/components/donutChart/donutchart.component';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [AreaChartComponent , BarChartComponent , DonutChartComponent],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.scss',
})
export class DoctorDashboardComponent {}
