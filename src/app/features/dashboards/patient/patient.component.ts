import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PatientHeaderComponent } from './components/patient-header/patient-header.component';
import { PatientStatusComponent } from './components/patient-status/patient-status.component';
import { LineChartComponent } from '../../../shared/components/lineChart/linechart.component';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [
    CommonModule,
    PatientHeaderComponent,
    PatientStatusComponent,
    LineChartComponent,
  ],
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
}
