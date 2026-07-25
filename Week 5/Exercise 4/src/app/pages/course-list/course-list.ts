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
  isLoading = true;
  courses = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Web Development', code: 'WD201', credits: 3, gradeStatus: 'pending' },
    { id: 3, name: 'Database Systems', code: 'DB301', credits: 4, gradeStatus: 'passed' },
    { id: 4, name: 'Machine Learning', code: 'ML401', credits: 4, gradeStatus: 'failed' },
    { id: 5, name: 'Software Engineering', code: 'SE501', credits: 3, gradeStatus: 'pending' }
  ];
  selectedCourseId?: number;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  trackByCourseId(index: number, course: any): number {
    // trackBy improves performance by only re-rendering items whose reference (in this case, ID) has changed,
    // rather than destroying and recreating the entire DOM list on every array mutation.
    return course.id;
  }
}
