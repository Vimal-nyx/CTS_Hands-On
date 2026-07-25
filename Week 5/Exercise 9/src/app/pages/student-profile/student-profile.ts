import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectEnrolledCourses } from '../../store/enrollment/enrollment.selectors';
import { loadCourses } from '../../store/course/course.actions';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { NotificationComponent } from '../../components/notification/notification';

@Component({
  selector: 'app-student-profile',
  imports: [CommonModule, NotificationComponent],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfileComponent implements OnInit {
  enrolledCourses$!: Observable<Course[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadCourses());
    this.enrolledCourses$ = this.store.select(selectEnrolledCourses);
  }
}
