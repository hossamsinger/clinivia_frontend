import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [],
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
