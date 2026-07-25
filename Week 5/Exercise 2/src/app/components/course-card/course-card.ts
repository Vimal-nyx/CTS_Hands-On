import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {
  // Hands-On 2 Task 3: @Input Decorator
  @Input() course!: { id: number; name: string; code: string; credits: number; };

  // Hands-On 2 Task 3: @Output Decorator with EventEmitter
  @Output() enrollRequested = new EventEmitter<number>();

  // Hands-On 2 Task 2: ngOnChanges Lifecycle Hook
  ngOnChanges(changes: SimpleChanges) {
    if (changes['course']) {
      console.log('Course changed from', changes['course'].previousValue, 'to', changes['course'].currentValue);
    }
  }
}
