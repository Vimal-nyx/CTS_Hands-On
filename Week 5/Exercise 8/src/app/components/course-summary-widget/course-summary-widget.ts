import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-summary-widget',
  imports: [CommonModule],
  template: `<div style="border: 1px solid blue; padding: 10px; margin: 10px 0;">
               <h4>Course Summary Widget</h4>
               <p>Total active courses globally: {{ (courses$ | async)?.length || 0 }}</p>
             </div>`
})
export class CourseSummaryWidget implements OnInit {
  courses$!: Observable<Course[]>;
  constructor(private courseService: CourseService) {}
  
  ngOnInit() {
    this.courses$ = this.courseService.getCourses();
  }
}
