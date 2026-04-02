import { Component } from '@angular/core';
import { AreaChartComponent } from '../../../shared/components/areaChart/areaChart.component';
import { BarChartComponent } from '../../../shared/components/barChart/barchart.component';
import { DonutChartComponent } from '../../../shared/components/donutChart/donutchart.component';
import { CommonModule } from '@angular/common';
import { FullCalendarComponent } from '../../../shared/components/full-calendar/full-calendar.component';
import { FormsModule } from '@angular/forms';
import { RadialChartComponent } from '../../../shared/components/radialbarChart/radialbarChart.component';
import { DistributedColumnComponent } from '../../../shared/components/distributed-column/distributed-column.component';

interface Todo {
  title: string;
  priority: 'High' | 'Normal' | 'Low';
}
interface Doctor {
  name: string;
  qualification: string;
  status: 'Available' | 'Absent';
  image: string;
}
@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [
    AreaChartComponent,
    CommonModule,
    FormsModule,
    BarChartComponent,
    DonutChartComponent,
    FullCalendarComponent,
    RadialChartComponent,
    DistributedColumnComponent,
  ],
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
      image: 'assets/images/user1.jpg',
    },
    {
      name: 'Airi Satou',
      case: 'Cholera',
      date: '13 June',
      time: '11:00-12:00',
      image: 'assets/images/user2.jpg',
    },
    {
      name: 'Cara Stevens',
      case: 'Fever',
      date: '12 June',
      time: '09:00-10:00',
      image: 'assets/images/user3.jpg',
    },
    {
      name: 'Airi Satou',
      case: 'Cholera',
      date: '13 June',
      time: '11:00-12:00',
      image: 'assets/images/user4.jpg',
    },
    {
      name: 'Cara Stevens',
      case: 'Fever',
      date: '12 June',
      time: '09:00-10:00',
      image: 'assets/images/user5.jpg',
    },
    {
      name: 'Airi Satou',
      case: 'Cholera',
      date: '13 June',
      time: '11:00-12:00',
      image: 'assets/images/user6.jpg',
    },
    {
      name: 'Cara Stevens',
      case: 'Fever',
      date: '12 June',
      time: '09:00-10:00',
      image: 'assets/images/user7.jpg',
    },
    {
      name: 'Airi Satou',
      case: 'Cholera',
      date: '13 June',
      time: '11:00-12:00',
      image: 'assets/images/user8.jpg',
    },
  ];
  appointments2 = [
    {
      image: 'assets/images/user9.jpg',
      name: 'Sarah Smith',
      gender: 'Female',
      date: '12/05/2016',
      diagnosis: 'Cholera',
      report: 'assets/reports/sarah.pdf',
    },
    {
      image: 'assets/images/user10.jpg',
      name: 'Airi Satou',
      gender: 'Male',
      date: '12/05/2016',
      diagnosis: 'Jaundice',
      report: 'assets/reports/airi.pdf',
    },
    {
      image: 'assets/images/user11.jpg',
      name: 'Sarah Smith',
      gender: 'Female',
      date: '12/05/2016',
      diagnosis: 'Cholera',
      report: 'assets/reports/sarah.pdf',
    },
    {
      image: 'assets/images/user12.jpg',
      name: 'Airi Satou',
      gender: 'Male',
      date: '12/05/2016',
      diagnosis: 'Jaundice',
      report: 'assets/reports/airi.pdf',
    },
    {
      image: 'assets/images/user13.jpg',
      name: 'Sarah Smith',
      gender: 'Female',
      date: '12/05/2016',
      diagnosis: 'Cholera',
      report: 'assets/reports/sarah.pdf',
    },
    {
      image: 'assets/images/user12.jpg',
      name: 'Airi Satou',
      gender: 'Male',
      date: '12/05/2016',
      diagnosis: 'Jaundice',
      report: 'assets/reports/airi.pdf',
    },
  ];

  todos: Todo[] = [
    { title: 'Attend medical staff meeting', priority: 'High' },
    { title: 'Update medical records', priority: 'High' },
    { title: 'Plan continuing medical education', priority: 'Low' },
    { title: 'Review latest medical reports', priority: 'Low' },
    { title: 'Check in with medical assistant', priority: 'Normal' },
    { title: 'Schedule surgery or procedures', priority: 'High' },
    { title: 'Check in with medical assistant', priority: 'Normal' },
    { title: 'Schedule surgery or procedures', priority: 'High' },
  ];

  doctors: Doctor[] = [
    {
      name: 'Jay Soni',
      qualification: 'MBBS,MD',
      status: 'Available',
      image: 'assets/images/user1.jpg',
    },
    {
      name: 'Sarah Smith',
      qualification: 'BDS,MDS',
      status: 'Absent',
      image: 'assets/images/user2.jpg',
    },
    {
      name: 'Megha Trivedi',
      qualification: 'BHMS',
      status: 'Available',
      image: 'assets/images/user3.jpg',
    },
    {
      name: 'John Deo',
      qualification: 'MBBS,MS',
      status: 'Available',
      image: 'assets/images/user4.jpg',
    },
    {
      name: 'Jacob Ryan',
      qualification: 'MBBS,MD',
      status: 'Absent',
      image: 'assets/images/user5.jpg',
    },
    {
      name: 'Jay Soni',
      qualification: 'MBBS',
      status: 'Available',
      image: 'assets/images/user6.jpg',
    },
    {
      name: 'Jacob Ryan',
      qualification: 'MBBS,MD',
      status: 'Absent',
      image: 'assets/images/user5.jpg',
    },
    {
      name: 'Jay Soni',
      qualification: 'MBBS',
      status: 'Available',
      image: 'assets/images/user6.jpg',
    },
  ];

  emergencyCases = [
    {
      name: 'John Doe',
      label: 'Cardiac Arrest',
      type: 'red',
      time: '10 min ago',
    },
    {
      name: 'Sarah Smith',
      label: 'Severe Trauma',
      type: 'orange',
      time: '25 min ago',
    },
    { name: 'Mike Johnson', label: 'Stroke', type: 'red', time: '45 min ago' },
    {
      name: 'Emily Davis',
      label: 'Severe Burns',
      type: 'orange',
      time: '1 hr ago',
    },
    {
      name: 'David Wilson',
      label: 'Multiple Fractures',
      type: 'red',
      time: '1 hr 20 min ago',
    },
  ];
}
