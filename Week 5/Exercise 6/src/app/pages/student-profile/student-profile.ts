import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentService } from '../../services/enrollment.service';
import { NotificationComponent } from '../../components/notification/notification';

@Component({
  selector: 'app-student-profile',
  imports: [CommonModule, NotificationComponent],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfileComponent {
  constructor(public enrollmentService: EnrollmentService) {}
}
