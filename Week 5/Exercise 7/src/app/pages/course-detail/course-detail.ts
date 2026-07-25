import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule, RouterLink, CreditLabelPipe],
  template: `
    <div style="max-width: 800px; margin: 2rem auto; padding: 2rem;" class="glass-card" *ngIf="course">
      <!-- Hands-On 7 Task 1: Reading :id Parameter from ActivatedRoute -->
      <span style="color: #60a5fa; font-weight: 600; font-size: 0.9rem;">Course Details (ID: {{ course.id }})</span>
      <h2 style="font-size: 2rem; margin: 0.5rem 0 1rem 0;">{{ course.name }}</h2>
      
      <div style="display: flex; gap: 1.5rem; margin-bottom: 1.5rem; color: #94a3b8;">
        <div>Code: <strong style="color: #f8fafc;">{{ course.code }}</strong></div>
        <div>Credits: <strong style="color: #f8fafc;">{{ course.credits | creditLabel }}</strong></div>
        <div>Grade Status: <strong style="color: #10b981;">{{ course.gradeStatus }}</strong></div>
      </div>

      <p style="color: #cbd5e1; line-height: 1.6; margin-bottom: 2rem;">
        Comprehensive study module covering advanced concepts and practical hands-on exercises in {{ course.name }}.
      </p>

      <a routerLink="/courses" class="btn-secondary" style="display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; text-decoration: none; border-radius: 0.5rem;">
        &larr; Back to Courses
      </a>
    </div>

    <div style="max-width: 800px; margin: 2rem auto; padding: 2rem; text-align: center;" class="glass-card" *ngIf="!course">
      <h2 style="color: #ef4444;">Course Not Found</h2>
      <p style="color: #94a3b8; margin-bottom: 1.5rem;">No course details exist for the provided ID.</p>
      <a routerLink="/courses" style="background: #3b82f6; color: white; padding: 0.75rem 1.5rem; text-decoration: none; border-radius: 0.5rem;">Back to Courses</a>
    </div>
  `
})
export class CourseDetailComponent implements OnInit {
  course?: Course;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    // Hands-On 7 Task 1: Reading paramMap snapshot
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.course = this.courseService.getCourseById(Number(id));
    }
  }
}
