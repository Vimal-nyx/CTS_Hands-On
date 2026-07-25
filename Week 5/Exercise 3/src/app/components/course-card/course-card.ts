import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {
  @Input() course!: { id: number; name: string; code: string; credits: number; gradeStatus?: string; isEnrolled?: boolean };
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['course']) {
      console.log('Course changed:', changes['course'].currentValue);
    }
  }

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

  // Hands-On 3 Task 2: Refactored ngClass binding getter
  get cardClasses() {
    return {
      'card--enrolled': !!this.course?.isEnrolled,
      'card--full': (this.course?.credits || 0) >= 4,
      'expanded': this.isExpanded
    };
  }
}
