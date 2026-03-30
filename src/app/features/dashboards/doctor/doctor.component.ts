import { Component } from '@angular/core';
import { AreaChartComponent } from '../../../shared/components/areaChart/areaChart.component';
import { BarChartComponent } from '../../../shared/components/barChart/barchart.component';
import { DonutChartComponent } from '../../../shared/components/donutChart/donutchart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [AreaChartComponent ,CommonModule, BarChartComponent , DonutChartComponent],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.scss',
})
export class DoctorDashboardComponent {
   appointments = [
    {
      name: 'Cara Stevens',
      case: 'Fever',
      date: '12 June',
      time: '09:00-10:00',
      image: 'assets/images/user1.jpg'
    },
    {
      name: 'Airi Satou',
      case: 'Cholera',
      date: '13 June',
      time: '11:00-12:00',
      image: 'assets/images/user2.jpg'
    },
    {
      name: 'Cara Stevens',
      case: 'Fever',
      date: '12 June',
      time: '09:00-10:00',
      image: 'assets/images/user3.jpg'
    },
    {
      name: 'Airi Satou',
      case: 'Cholera',
      date: '13 June',
      time: '11:00-12:00',
      image: 'assets/images/user4.jpg'
    },
    {
      name: 'Cara Stevens',
      case: 'Fever',
      date: '12 June',
      time: '09:00-10:00',
      image: 'assets/images/user5.jpg'
    },
    {
      name: 'Airi Satou',
      case: 'Cholera',
      date: '13 June',
      time: '11:00-12:00',
      image: 'assets/images/user6.jpg'
    },
    {
      name: 'Cara Stevens',
      case: 'Fever',
      date: '12 June',
      time: '09:00-10:00',
      image: 'assets/images/user7.jpg'
    },
    {
      name: 'Airi Satou',
      case: 'Cholera',
      date: '13 June',
      time: '11:00-12:00',
      image: 'assets/images/user8.jpg'
    }
  ];
}
