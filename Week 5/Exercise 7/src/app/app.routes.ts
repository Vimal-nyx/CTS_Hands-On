import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { CourseDetailComponent } from './pages/course-detail/course-detail';
import { EnrollmentFormComponent } from './pages/enrollment-form/enrollment-form';
import { ReactiveEnrollmentFormComponent } from './pages/reactive-enrollment-form/reactive-enrollment-form';
import { StudentProfileComponent } from './pages/student-profile/student-profile';
import { NotFoundComponent } from './pages/not-found/not-found';
import { authGuard } from './guards/auth.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';

// Hands-On 7: Route Configuration, Parameters, Guards & Wildcard
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'courses', component: CourseList },
  // Hands-On 7 Task 1: Route Parameter :id
  { path: 'courses/:id', component: CourseDetailComponent },
  // Hands-On 7 Task 2: AuthGuard protection
  { path: 'profile', canActivate: [authGuard], component: StudentProfileComponent },
  { path: 'enroll', canActivate: [authGuard], component: EnrollmentFormComponent },
  // Hands-On 7 Task 2: CanDeactivate Guard
  { path: 'enroll-reactive', canDeactivate: [unsavedChangesGuard], component: ReactiveEnrollmentFormComponent },
  // Hands-On 7 Task 1: Wildcard route for 404 Page
  { path: '**', component: NotFoundComponent }
];
