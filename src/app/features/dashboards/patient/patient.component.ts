import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss',
})
export class PatientDashboardComponent implements OnInit {
  fullText = ' أ / حسام مصطفي ';
  displayedText = '';
  index = 0;

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter() {
    if (this.index <= this.fullText.length) {
      this.displayedText = this.fullText.slice(0, this.index);
      this.index++;
      setTimeout(() => this.typeWriter(), 200); // سرعة الكتابة
    } else {
      // Optional: اعادة الكتابة بعد توقف
      setTimeout(() => {
        this.index = 0;
        this.typeWriter();
      }, 2000);
    }
  }
  
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
