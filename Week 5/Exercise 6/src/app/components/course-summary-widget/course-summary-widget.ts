import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-summary-widget',
  template: `<div style="border: 1px solid blue; padding: 10px; margin: 10px 0;">
               <h4>Course Summary Widget</h4>
               <p>Total active courses globally: {{ coursesCount }}</p>
               <button (click)="addDummyCourse()">Add Dummy Course</button>
             </div>`
})
export class CourseSummaryWidget {
  constructor(private courseService: CourseService) {}

  get coursesCount() {
    return this.courseService.getCourses().length;
  }
  
  addDummyCourse() {
    this.courseService.addCourse({
      id: Math.floor(Math.random() * 1000),
      name: 'Dummy Course',
      code: 'DC001',
      credits: 2,
      gradeStatus: 'pending'
    });
  }
}
