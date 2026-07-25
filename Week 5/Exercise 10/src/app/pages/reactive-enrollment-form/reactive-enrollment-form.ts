import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';
import { CourseService } from '../../services/course.service';


function noCourseCode(control: AbstractControl): ValidationErrors | null {
  if (control.value && typeof control.value === 'string' && control.value.toUpperCase().startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}


function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise(resolve => {
    setTimeout(() => {
      if (control.value && control.value.includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentFormComponent implements OnInit {
  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder, private courseService: CourseService) {}

  ngOnInit() {
    
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      courseId: [null, [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      
      additionalCourses: this.fb.array([])
    });
  }

  // A typed getter prevents casting everywhere in the template and provides strong typing
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse() {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  removeCourse(index: number) {
    this.additionalCourses.removeAt(index);
  }

  onSubmit() {
    if (this.enrollForm.valid) {
      const courseId = this.enrollForm.get('courseId')?.value;
      const newCourse = {
        id: Math.floor(Math.random() * 1000),
        name: 'New Custom Course',
        code: courseId,
        credits: 3,
        gradeStatus: 'pending' as const
      };
      
      this.courseService.addCourse(newCourse).subscribe({
        next: (res) => console.log('Successfully created course via POST:', res),
        error: (err) => console.error('Failed to create course:', err)
      });
    }
  }
}
