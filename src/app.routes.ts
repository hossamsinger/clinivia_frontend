import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './app/layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './app/layout/main-layout/main-layout.component';

export const routes: Routes = [
  // Auth Layout (Login only)
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./app/features/authentication/login/login.component').then(
            (m) => m.LoginComponent,
          ),
      },
    ],
  },
  // Main Layout
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'admin_dashboard',
        loadComponent: () =>
          import('./app/features/dashboards/admin/admin.component').then(
            (m) => m.AdminDashboardComponent,
          ),
      },
      {
        path: 'doctor_dashboard',
        loadComponent: () =>
          import('./app/features/dashboards/doctor/doctor.component').then(
            (m) => m.DoctorDashboardComponent,
          ),
      },
      {
        path: 'patient_dashboard',
        loadComponent: () =>
          import('./app/features/dashboards/patient/patient.component').then(
            (m) => m.PatientDashboardComponent,
          ),
      },
      {
        path: 'nurces_dashboard',
        loadComponent: () =>
          import('./app/features/dashboards/nurces/nurces.component').then(
            (m) => m.NurcesDashboardComponent,
          ),
      },
      {
        path: 'doctors',
        loadComponent: () =>
          import('./app/features/doctors/doctors.component').then(
            (m) => m.DoctorsComponent,
          ),
      },
      {
        path: 'patients',
        loadComponent: () =>
          import('./app/features/patients/patients.component').then(
            (m) => m.PatientsComponent,
          ),
      },
      {
        path: 'analytics',
        loadComponent: () =>
          import('./app/features/analytics/analytics.component').then(
            (m) => m.AnalyticsComponent,
          ),
      },
    ],
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
