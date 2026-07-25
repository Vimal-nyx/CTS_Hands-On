import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard, HighlightDirective],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  // Hands-On 3 Task 1: isLoading boolean property for *ngIf spinner
  isLoading = true;

  courses = [
    { id: 1, name: 'Angular Fundamentals', code: 'CS101', credits: 3, gradeStatus: 'passed', isEnrolled: false },
    { id: 2, name: 'TypeScript Deep Dive', code: 'CS102', credits: 4, gradeStatus: 'pending', isEnrolled: false },
    { id: 3, name: 'RxJS & Async Programming', code: 'CS103', credits: 3, gradeStatus: 'failed', isEnrolled: false },
    { id: 4, name: 'State Management with NgRx', code: 'CS104', credits: 4, gradeStatus: 'pending', isEnrolled: false }
  ];

  selectedCourseId?: number;

  ngOnInit() {
    // Hands-On 3 Task 1: Hide loading after 1.5 seconds
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  // Hands-On 3 Task 1: trackBy function for performance optimization
  trackByCourseId(index: number, course: any): number {
    return course.id;
  }

  onEnroll(courseId: number) {
    const course = this.courses.find(c => c.id === courseId);
    if (course) {
      course.isEnrolled = !course.isEnrolled;
    }
    this.selectedCourseId = courseId;
  }
}
