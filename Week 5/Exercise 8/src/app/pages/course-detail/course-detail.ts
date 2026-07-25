import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule],
  template: `
    <div *ngIf="course">
      <h2>{{ course.name }}</h2>
      <p>Course Code: {{ course.code }}</p>
      <p>Credits: {{ course.credits }}</p>
    </div>
    <div *ngIf="!course && !isLoading">Course not found.</div>
    <div *ngIf="isLoading">Loading...</div>
  `
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  course?: Course;
  isLoading = true;
  private sub!: Subscription;

  constructor(private route: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sub = this.courseService.getCourseById(id).subscribe({
      next: (data) => {
        this.course = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
}
