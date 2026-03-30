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
  appointments2 = [
    {
      image: 'assets/images/user9.jpg',
      name: 'Sarah Smith',
      gender: 'Female',
      date: '12/05/2016',
      diagnosis: 'Cholera',
      report: 'assets/reports/sarah.pdf'
    },
    {
      image: 'assets/images/user10.jpg',
      name: 'Airi Satou',
      gender: 'Male',
      date: '12/05/2016',
      diagnosis: 'Jaundice',
      report: 'assets/reports/airi.pdf'
    },
    {
      image: 'assets/images/user11.jpg',
      name: 'Sarah Smith',
      gender: 'Female',
      date: '12/05/2016',
      diagnosis: 'Cholera',
      report: 'assets/reports/sarah.pdf'
    },
    {
      image: 'assets/images/user12.jpg',
      name: 'Airi Satou',
      gender: 'Male',
      date: '12/05/2016',
      diagnosis: 'Jaundice',
      report: 'assets/reports/airi.pdf'
    },
    {
      image: 'assets/images/user13.jpg',
      name: 'Sarah Smith',
      gender: 'Female',
      date: '12/05/2016',
      diagnosis: 'Cholera',
      report: 'assets/reports/sarah.pdf'
    },
    {
      image: 'assets/images/user12.jpg',
      name: 'Airi Satou',
      gender: 'Male',
      date: '12/05/2016',
      diagnosis: 'Jaundice',
      report: 'assets/reports/airi.pdf'
    },
    {
      image: 'assets/images/user13.jpg',
      name: 'Airi Satou',
      gender: 'Male',
      date: '12/05/2016',
      diagnosis: 'Jaundice',
      report: 'assets/reports/airi.pdf'
    },
    // ... باقي المواعيد
  ];
}
