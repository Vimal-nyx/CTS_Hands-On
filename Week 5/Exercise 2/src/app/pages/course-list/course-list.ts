import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
  // Hands-On 2 Task 3: Course objects array
  courses = [
    { id: 1, name: 'Angular Fundamentals', code: 'CS101', credits: 3 },
    { id: 2, name: 'TypeScript Deep Dive', code: 'CS102', credits: 4 },
    { id: 3, name: 'RxJS & Async Programming', code: 'CS103', credits: 3 },
    { id: 4, name: 'State Management with NgRx', code: 'CS104', credits: 4 },
    { id: 5, name: 'Unit Testing Angular', code: 'CS105', credits: 2 }
  ];

  selectedCourseId?: number;

  // Hands-On 2 Task 3: Handler for @Output event
  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}
