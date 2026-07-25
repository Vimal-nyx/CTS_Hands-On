import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseCard } from '../../components/course-card/course-card';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard, HighlightDirective, FormsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  isLoading = true;
  courses: Course[] = [];
  selectedCourseId?: number;
  searchTerm = '';
  private sub!: Subscription;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.courseService.getCourses().subscribe(data => {
      this.courses = data;
      this.isLoading = false;
    });
    this.searchTerm = this.route.snapshot.queryParamMap.get('search') || '';
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

  onSearch() {
    this.router.navigate(['courses'], { queryParams: { search: this.searchTerm } });
  }

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  trackByCourseId(index: number, course: any): number {
    return course.id;
  }

  viewCourse(courseId: number) {
    this.router.navigate(['courses', courseId]);
  }
}
