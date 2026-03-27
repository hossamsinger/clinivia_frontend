import { Component } from '@angular/core';
import { DevExtremeModule, DxDataGridModule } from 'devextreme-angular';
@Component({
  selector: 'app-datagrid',
  standalone: true,
  imports: [DxDataGridModule],
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss'],
})
export class DataGridComponent {
  data = [
    { id: 1, name: 'صورة أشعة صدر', type: 'X-Ray', date: '2025-01-10' },
    { id: 2, name: 'صورة رنين مغناطيسي', type: 'X-Ray', date: '2025-01-10' },
    { id: 3, name: 'صورة مقطعية للبطن', type: 'X-Ray', date: '2025-01-10' },
    { id: 4, name: 'صورة أشعة سينية لليد', type: 'X-Ray', date: '2025-01-10' },
    { id: 5, name: 'صورة موجات فوق صوتية', type: 'X-Ray', date: '2025-01-10' },
    { id: 6, name: 'صورة قلب دوبلر', type: 'X-Ray', date: '2025-01-10' },
    {
      id: 7,
      name: 'صورة أشعة للعمود الفقري',
      type: 'X-Ray',
      date: '2025-01-10',
    },
    { id: 8, name: 'صورة رنين للركبة', type: 'X-Ray', date: '2025-01-10' },
    { id: 9, name: 'صورة مقطعية للرأس', type: 'X-Ray', date: '2025-01-10' },
    { id: 10, name: 'صورة أشعة للأسنان', type: 'X-Ray', date: '2025-01-10' },
  ];
}
