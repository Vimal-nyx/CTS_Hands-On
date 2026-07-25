import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { CourseDetailComponent } from './pages/course-detail/course-detail';
import { CoursesLayoutComponent } from './pages/courses-layout/courses-layout';
import { StudentProfileComponent } from './pages/student-profile/student-profile';
import { NotFoundComponent } from './pages/not-found/not-found';
import { authGuard } from './guards/auth.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';

export const routes: Routes = [
  { path: '', component: Home },
  { 
    path: 'courses', 
    component: CoursesLayoutComponent,
    
    children: [
      { path: '', component: CourseList },
      { path: ':id', component: CourseDetailComponent }
    ]
  },
  { 
    path: 'enroll', 
    
    loadComponent: () => import('./pages/enrollment-form/enrollment-form').then(m => m.EnrollmentFormComponent),
    
    canActivate: [authGuard]
  },
  { 
    path: 'enroll-reactive', 
    loadComponent: () => import('./pages/reactive-enrollment-form/reactive-enrollment-form').then(m => m.ReactiveEnrollmentFormComponent),
    canActivate: [authGuard],
    canDeactivate: [unsavedChangesGuard]
  },
  { path: 'profile', component: StudentProfileComponent, canActivate: [authGuard] },
  { path: '**', component: NotFoundComponent }
];
