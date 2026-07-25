import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-courses-layout',
  imports: [RouterOutlet],
  template: `
    <h2>Courses Area</h2>
    <router-outlet></router-outlet>
  `
})
export class CoursesLayoutComponent {}
