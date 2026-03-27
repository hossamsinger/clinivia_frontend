import { Component } from '@angular/core';
import { AreaChartComponent } from '../../../shared/components/areaChart/areaChart.component';
import { BarChartComponent } from '../../../shared/components/barChart/barchart.component';
import { DataGridComponent } from '../../../shared/components/dataGrid/datagrid.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AreaChartComponent, BarChartComponent, DataGridComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminDashboardComponent {}
