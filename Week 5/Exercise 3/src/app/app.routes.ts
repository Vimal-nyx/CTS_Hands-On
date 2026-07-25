import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';

// Hands-On 3: Routes Configuration
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'courses', component: CourseList }
];
