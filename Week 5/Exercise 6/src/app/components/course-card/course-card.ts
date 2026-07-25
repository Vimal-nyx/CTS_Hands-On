import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {
  
  @Input() course!: Course;
  
  @Output() enrollRequested = new EventEmitter<number>();
  
  isExpanded = false;

  constructor(private enrollmentService: EnrollmentService) {}

  get isEnrolled() {
    return this.enrollmentService.isEnrolled(this.course.id);
  }

  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['course']) {
      console.log('Course changed:', changes['course'].previousValue, '->', changes['course'].currentValue);
    }
  }
  
  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }
  
  enroll() {
    if (this.isEnrolled) {
      this.enrollmentService.unenroll(this.course.id);
    } else {
      this.enrollmentService.enroll(this.course.id);
    }
  }

  get cardClasses() {
    return {
      'card--enrolled': this.isEnrolled,
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }
}
