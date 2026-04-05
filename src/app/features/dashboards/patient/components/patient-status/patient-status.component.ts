import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-status',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './patient-status.component.html',
  styleUrl: './patient-status.component.scss',
})
export class PatientStatusComponent {
  cards = [
    {
      title: 'ضغط الدم',
      value: '١١٠/٧٠',
      img: 'assets/images/blood-pressure.png',
      trend: ' ١٠٪ أعلى من الشهر الماضي',
    },
    {
      title: 'معدل ضربات القلب',
      value: '٦٥٠',
      img: 'assets/images/heart-rate.png',
      trend: ' ٧٪ أقل من الشهر الماضي',
    },
    {
      title: 'مستوى السكر',
      value: '٨٨ - ٧٥',
      img: 'assets/images/glucose.png',
      trend: ' ١٢٪ أعلى من الشهر الماضي',
    },
    {
      title: 'عدد خلايا الدم',
      value: '٩٬٤٥٦/مل',
      img: 'assets/images/blood-count.png',
      trend: ' ٢٢٪ أقل من الشهر الماضي',
    },
  ];
}
