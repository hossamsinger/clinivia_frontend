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
  priority: 'عالي' | 'متوسط' | 'منخفض';
}
interface Doctor {
  name: string;
  qualification: string;
  status: 'متاح' | 'غائب';
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
    name: 'كارا ستيفنز',
    case: 'حمى',
    date: '12 يونيو',
    time: '09:00 - 10:00',
    image: 'assets/images/user1.jpg',
  },
  {
    name: 'آيري ساتو',
    case: 'كوليرا',
    date: '13 يونيو',
    time: '11:00 - 12:00',
    image: 'assets/images/user2.jpg',
  },
  {
    name: 'كارا ستيفنز',
    case: 'حمى',
    date: '12 يونيو',
    time: '09:00 - 10:00',
    image: 'assets/images/user3.jpg',
  },
  {
    name: 'آيري ساتو',
    case: 'كوليرا',
    date: '13 يونيو',
    time: '11:00 - 12:00',
    image: 'assets/images/user4.jpg',
  },
  {
    name: 'كارا ستيفنز',
    case: 'حمى',
    date: '12 يونيو',
    time: '09:00 - 10:00',
    image: 'assets/images/user5.jpg',
  },
  {
    name: 'آيري ساتو',
    case: 'كوليرا',
    date: '13 يونيو',
    time: '11:00 - 12:00',
    image: 'assets/images/user6.jpg',
  },
  {
    name: 'كارا ستيفنز',
    case: 'حمى',
    date: '12 يونيو',
    time: '09:00 - 10:00',
    image: 'assets/images/user7.jpg',
  },
  {
    name: 'آيري ساتو',
    case: 'كوليرا',
    date: '13 يونيو',
    time: '11:00 - 12:00',
    image: 'assets/images/user8.jpg',
  },
];

appointments2 = [
  {
    image: 'assets/images/user9.jpg',
    name: 'سارة سميث',
    gender: 'أنثى',
    date: '12/05/2016',
    diagnosis: 'كوليرا',
    report: 'assets/reports/sarah.pdf',
  },
  {
    image: 'assets/images/user10.jpg',
    name: 'آيري ساتو',
    gender: 'ذكر',
    date: '12/05/2016',
    diagnosis: 'يرقان',
    report: 'assets/reports/airi.pdf',
  },
  {
    image: 'assets/images/user11.jpg',
    name: 'سارة سميث',
    gender: 'أنثى',
    date: '12/05/2016',
    diagnosis: 'كوليرا',
    report: 'assets/reports/sarah.pdf',
  },
  {
    image: 'assets/images/user12.jpg',
    name: 'آيري ساتو',
    gender: 'ذكر',
    date: '12/05/2016',
    diagnosis: 'يرقان',
    report: 'assets/reports/airi.pdf',
  },
  {
    image: 'assets/images/user13.jpg',
    name: 'سارة سميث',
    gender: 'أنثى',
    date: '12/05/2016',
    diagnosis: 'كوليرا',
    report: 'assets/reports/sarah.pdf',
  },
  {
    image: 'assets/images/user12.jpg',
    name: 'آيري ساتو',
    gender: 'ذكر',
    date: '12/05/2016',
    diagnosis: 'يرقان',
    report: 'assets/reports/airi.pdf',
  },
];

todos: Todo[] = [
  { title: 'حضور اجتماع الطاقم الطبي', priority: 'عالي' },
  { title: 'تحديث السجلات الطبية', priority: 'عالي' },
  { title: 'التخطيط للتعليم الطبي المستمر', priority: 'منخفض' },
  { title: 'مراجعة أحدث التقارير الطبية', priority: 'منخفض' },
  { title: 'متابعة مع المساعد الطبي', priority: 'متوسط' },
  { title: 'جدولة العمليات أو الإجراءات', priority: 'عالي' },
  { title: 'متابعة مع المساعد الطبي', priority: 'متوسط' },
  { title: 'جدولة العمليات أو الإجراءات', priority: 'عالي' },
];

doctors: Doctor[] = [
  {
    name: 'د. جاي سوني',
    qualification: 'بكالوريوس طب وجراحة، ماجستير',
    status: 'متاح',
    image: 'assets/images/user1.jpg',
  },
  {
    name: 'د. سارة سميث',
    qualification: 'بكالوريوس طب أسنان، ماجستير',
    status: 'غائب',
    image: 'assets/images/user2.jpg',
  },
  {
    name: 'د. ميغا تريفيدي',
    qualification: 'بكالوريوس طب بديل',
    status: 'متاح',
    image: 'assets/images/user3.jpg',
  },
  {
    name: 'د. جون ديو',
    qualification: 'بكالوريوس طب وجراحة، جراحة عامة',
    status: 'متاح',
    image: 'assets/images/user4.jpg',
  },
  {
    name: 'د. جاكوب رايان',
    qualification: 'بكالوريوس طب وجراحة، ماجستير',
    status: 'غائب',
    image: 'assets/images/user5.jpg',
  },
  {
    name: 'د. جاي سوني',
    qualification: 'بكالوريوس طب وجراحة',
    status: 'متاح',
    image: 'assets/images/user6.jpg',
  },
  {
    name: 'د. جاكوب رايان',
    qualification: 'بكالوريوس طب وجراحة، ماجستير',
    status: 'غائب',
    image: 'assets/images/user5.jpg',
  },
  {
    name: 'د. جاي سوني',
    qualification: 'بكالوريوس طب وجراحة',
    status: 'متاح',
    image: 'assets/images/user6.jpg',
  },
];

// 👇 لو انت قصدك doctors2 بدل appointments2
doctors2 = [
  {
    image: 'assets/images/user9.jpg',
    name: 'سارة سميث',
    gender: 'أنثى',
    date: '12/05/2016',
    diagnosis: 'كوليرا',
    report: 'assets/reports/sarah.pdf',
  },
  {
    image: 'assets/images/user10.jpg',
    name: 'آيري ساتو',
    gender: 'ذكر',
    date: '12/05/2016',
    diagnosis: 'يرقان',
    report: 'assets/reports/airi.pdf',
  },
  {
    image: 'assets/images/user11.jpg',
    name: 'سارة سميث',
    gender: 'أنثى',
    date: '12/05/2016',
    diagnosis: 'كوليرا',
    report: 'assets/reports/sarah.pdf',
  },
  {
    image: 'assets/images/user12.jpg',
    name: 'آيري ساتو',
    gender: 'ذكر',
    date: '12/05/2016',
    diagnosis: 'يرقان',
    report: 'assets/reports/airi.pdf',
  },
  {
    image: 'assets/images/user13.jpg',
    name: 'سارة سميث',
    gender: 'أنثى',
    date: '12/05/2016',
    diagnosis: 'كوليرا',
    report: 'assets/reports/sarah.pdf',
  },
  {
    image: 'assets/images/user12.jpg',
    name: 'آيري ساتو',
    gender: 'ذكر',
    date: '12/05/2016',
    diagnosis: 'يرقان',
    report: 'assets/reports/airi.pdf',
  },
];

emergencyCases = [
  {
    name: 'جون دو',
    label: 'توقف القلب',
    type: 'red',
    time: 'منذ 10 دقائق',
  },
  {
    name: 'سارة سميث',
    label: 'إصابة شديدة',
    type: 'orange',
    time: 'منذ 25 دقيقة',
  },
  {
    name: 'مايك جونسون',
    label: 'سكتة دماغية',
    type: 'red',
    time: 'منذ 45 دقيقة',
  },
  {
    name: 'إيميلي ديفيس',
    label: 'حروق شديدة',
    type: 'orange',
    time: 'منذ ساعة',
  },
  {
    name: 'ديفيد ويلسون',
    label: 'كسور متعددة',
    type: 'red',
    time: 'منذ ساعة و20 دقيقة',
  },
];
}
