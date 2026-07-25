import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { Store } from '@ngrx/store';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';
import { Course } from '../../models/course.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {
  
  @Input() course!: Course;
  
  @Output() enrollRequested = new EventEmitter<number>();
  
  isExpanded = false;
  isEnrolled$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.isEnrolled$ = this.store.select(selectEnrolledIds).pipe(
      map(ids => ids.includes(this.course.id))
    );
  }
  
  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }
  
  enroll(isEnrolled: boolean | null) {
    if (isEnrolled) {
      this.store.dispatch(unenrollFromCourse({ courseId: this.course.id }));
    } else {
      this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
    }
  }

  get cardClasses() {
    return {
      'expanded': this.isExpanded,
      'card--full': this.course.credits >= 4
    };
  }
}
