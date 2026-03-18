import { DoctorDashboardComponent } from './../features/dashboards/doctor/doctor.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('../features/authentication/login/login.component').then(
        (m) => m.LoginComponent,
      ),
  },

  {
    path: 'admin_dashboard',
    loadComponent: () =>
      import('../features/dashboards/admin/admin.component').then(
        (m) => m.AdminDashboardComponent,
      ),
  },
  {
    path: 'doctor_dashboard',
    loadComponent: () =>
      import('../features/dashboards/doctor/doctor.component').then(
        (m) => m.DoctorDashboardComponent,
      ),
  },
  {
    path: 'patient_dashboard',
    loadComponent: () =>
      import('../features/dashboards/patient/patient.component').then(
        (m) => m.PatientDashboardComponent,
      ),
  },
  {
    path: 'nurces_dashboard',
    loadComponent: () =>
      import('../features/dashboards/nurces/nurces.component').then(
        (m) => m.NurcesDashboardComponent,
      ),
  },
  {
    path: 'doctors',
    loadComponent: () =>
      import('../features/doctors/doctors.component').then(
        (m) => m.DoctorsComponent,
      ),
  },
  {
    path: 'patients',
    loadComponent: () =>
      import('../features/patients/patients.component').then(
        (m) => m.PatientsComponent,
      ),
  },
  {
    path: 'analytics',
    loadComponent: () =>
      import('../features/analytics/analytics.component').then(
        (m) => m.AnalyticsComponent,
      ),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
